:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barcodeforge'
.. highlight: bash

barcodeforge
============

.. conda:recipe:: barcodeforge
   :replaces_section_title:
   :noindex:

   A CLI tool for generating pathogen\-specific barcodes for Freyja.

   :homepage: https://github.com/andersen-lab/BarcodeForge
   :documentation: https://andersen-lab.github.io/Freyja/src/wiki/custom_barcodes.html
   
   :license: BSD / BSD-2-Clause
   :recipe: /`barcodeforge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcodeforge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcodeforge/meta.yaml>`_

   


.. conda:package:: barcodeforge

   |downloads_barcodeforge| |docker_barcodeforge|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends augur: ``>=31.1.0``
   :depends biopython: ``>=1.78``
   :depends dendropy: ``>=4.5.2``
   :depends ete4: ``>=4.3.0``
   :depends matplotlib-base: ``>=3.10.3``
   :depends numpy: ``>=1.20.0``
   :depends pandas: ``>=1.3.0``
   :depends pathlib: ``>=1.0.1``
   :depends python: ``>=3.10``
   :depends rich: ``>=10.0.0``
   :depends rich-click: ``>=1.6.0``
   :depends seaborn: ``>=0.13.2``
   :depends six: ``>=1.16.0``
   :depends ucsc-fatovcf: 
   :depends usher: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install barcodeforge

   and update with::

      mamba update barcodeforge

  To create a new environment, run::

      mamba create --name myenvname barcodeforge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/barcodeforge:<tag>

   (see `barcodeforge/tags`_ for valid values for ``<tag>``)


.. |downloads_barcodeforge| image:: https://img.shields.io/conda/dn/bioconda/barcodeforge.svg?style=flat
   :target: https://anaconda.org/bioconda/barcodeforge
   :alt:   (downloads)
.. |docker_barcodeforge| image:: https://quay.io/repository/biocontainers/barcodeforge/status
   :target: https://quay.io/repository/biocontainers/barcodeforge
.. _`barcodeforge/tags`: https://quay.io/repository/biocontainers/barcodeforge?tab=tags


.. raw:: html

    <script>
        var package = "barcodeforge";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barcodeforge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barcodeforge/README.html