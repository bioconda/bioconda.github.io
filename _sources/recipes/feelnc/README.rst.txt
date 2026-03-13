:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feelnc'
.. highlight: bash

feelnc
======

.. conda:recipe:: feelnc
   :replaces_section_title:
   :noindex:

   FlExible Extraction of LncRNA

   :homepage: https://github.com/tderrien/FEELnc
   :license: GNU General Public License v3.0
   :recipe: /`feelnc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feelnc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feelnc/meta.yaml>`_

   


.. conda:package:: feelnc

   |downloads_feelnc| |docker_feelnc|

   :versions:
      
      

      ``0.2-0``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends on fasta_ushuffle: 
   :depends on kmerinshort: 
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on perl-bio-featureio: 
   :depends on perl-bioperl: 
   :depends on perl-db-file: 
   :depends on perl-parallel-forkmanager: 
   :depends on r-base: 
   :depends on r-randomforest: 
   :depends on r-rocr: 

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

    pixi global install feelnc

to add into an existing workspace instead, run::

    pixi add feelnc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install feelnc

Alternatively, to install into a new environment, run::

    conda create -n envname feelnc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/feelnc:<tag>

(see `feelnc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_feelnc| image:: https://img.shields.io/conda/dn/bioconda/feelnc.svg?style=flat
   :target: https://anaconda.org/bioconda/feelnc
   :alt:   (downloads)
.. |docker_feelnc| image:: https://quay.io/repository/biocontainers/feelnc/status
   :target: https://quay.io/repository/biocontainers/feelnc
.. _`feelnc/tags`: https://quay.io/repository/biocontainers/feelnc?tab=tags


.. raw:: html

    <script>
        var package = "feelnc";
        var versions = ["0.2","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feelnc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feelnc/README.html