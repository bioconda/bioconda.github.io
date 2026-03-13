:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bttoxin_scanner'
.. highlight: bash

bttoxin_scanner
===============

.. conda:recipe:: bttoxin_scanner
   :replaces_section_title:
   :noindex:

   A toxin exploration tool for Bacillus thuringiensis

   :homepage: https://github.com/liaochenlanruo/BtToxin_scanner/blob/master/README.md
   :developer docs: https://github.com/liaochenlanruo/BtToxin_scanner/tree/master
   :license: GPL / GPLv3
   :recipe: /`bttoxin_scanner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_scanner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_scanner/meta.yaml>`_
   :links: biotools: :biotools:`BtToxin_scanner`

   


.. conda:package:: bttoxin_scanner

   |downloads_bttoxin_scanner| |docker_bttoxin_scanner|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends on blast: 
   :depends on hmmer: 
   :depends on libsvm: 
   :depends on perl-file-tee: 
   :depends on perl-getopt-long: 
   :depends on perl-pod-usage: 
   :depends on pgcgap: ``>=1.0.13``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bttoxin_scanner

to add into an existing workspace instead, run::

    pixi add bttoxin_scanner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bttoxin_scanner

Alternatively, to install into a new environment, run::

    conda create -n envname bttoxin_scanner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bttoxin_scanner:<tag>

(see `bttoxin_scanner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bttoxin_scanner| image:: https://img.shields.io/conda/dn/bioconda/bttoxin_scanner.svg?style=flat
   :target: https://anaconda.org/bioconda/bttoxin_scanner
   :alt:   (downloads)
.. |docker_bttoxin_scanner| image:: https://quay.io/repository/biocontainers/bttoxin_scanner/status
   :target: https://quay.io/repository/biocontainers/bttoxin_scanner
.. _`bttoxin_scanner/tags`: https://quay.io/repository/biocontainers/bttoxin_scanner?tab=tags


.. raw:: html

    <script>
        var package = "bttoxin_scanner";
        var versions = ["2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bttoxin_scanner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bttoxin_scanner/README.html