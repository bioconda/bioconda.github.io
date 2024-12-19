:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabocoreutils'
.. highlight: bash

bioconductor-metabocoreutils
============================

.. conda:recipe:: bioconductor-metabocoreutils
   :replaces_section_title:
   :noindex:

   Core Utils for Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MetaboCoreUtils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metabocoreutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabocoreutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabocoreutils/meta.yaml>`_

   MetaboCoreUtils defines metabolomics\-related core functionality provided as low\-level functions to allow a data structure\-independent usage across various R packages. This includes functions to calculate between ion \(adduct\) and compound mass\-to\-charge ratios and masses or functions to work with chemical formulas. The package provides also a set of adduct definitions and information on some commercially available internal standard mixes commonly used in MS experiments.


.. conda:package:: bioconductor-metabocoreutils

   |downloads_bioconductor-metabocoreutils| |docker_bioconductor-metabocoreutils|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-mscoreutils: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-metabocoreutils

   and update with::

      mamba update bioconductor-metabocoreutils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metabocoreutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabocoreutils:<tag>

   (see `bioconductor-metabocoreutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabocoreutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabocoreutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabocoreutils
   :alt:   (downloads)
.. |docker_bioconductor-metabocoreutils| image:: https://quay.io/repository/biocontainers/bioconductor-metabocoreutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabocoreutils
.. _`bioconductor-metabocoreutils/tags`: https://quay.io/repository/biocontainers/bioconductor-metabocoreutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabocoreutils";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabocoreutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabocoreutils/README.html