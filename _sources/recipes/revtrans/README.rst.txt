:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'revtrans'
.. highlight: bash

revtrans
========

.. conda:recipe:: revtrans
   :replaces_section_title:
   :noindex:

   revtrans \- performs a reverse translation of a peptide alignment.

   :homepage: http://www.cbs.dtu.dk/services/RevTrans-2.0/web/download.php
   :license: GPL / GPLv2
   :recipe: /`revtrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revtrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revtrans/meta.yaml>`_
   :links: biotools: :biotools:`revtrans`

   


.. conda:package:: revtrans

   |downloads_revtrans| |docker_revtrans|

   :versions:
      
      

      ``1.4-1``,  ``1.4-0``

      

   
   :depends on python: ``<3``

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

    pixi global install revtrans

to add into an existing workspace instead, run::

    pixi add revtrans

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install revtrans

Alternatively, to install into a new environment, run::

    conda create -n envname revtrans

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/revtrans:<tag>

(see `revtrans/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_revtrans| image:: https://img.shields.io/conda/dn/bioconda/revtrans.svg?style=flat
   :target: https://anaconda.org/bioconda/revtrans
   :alt:   (downloads)
.. |docker_revtrans| image:: https://quay.io/repository/biocontainers/revtrans/status
   :target: https://quay.io/repository/biocontainers/revtrans
.. _`revtrans/tags`: https://quay.io/repository/biocontainers/revtrans?tab=tags


.. raw:: html

    <script>
        var package = "revtrans";
        var versions = ["1.4","1.4"];
    </script>





Notes
-----
This package includes a modified version of the program named \'revtrans\_jarmo.py\' that works with peptide fragments instead of full length sequences.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/revtrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/revtrans/README.html