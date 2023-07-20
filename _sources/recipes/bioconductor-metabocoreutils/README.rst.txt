:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabocoreutils'
.. highlight: bash

bioconductor-metabocoreutils
============================

.. conda:recipe:: bioconductor-metabocoreutils
   :replaces_section_title:
   :noindex:

   Core Utils for Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MetaboCoreUtils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metabocoreutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabocoreutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabocoreutils/meta.yaml>`_

   MetaboCoreUtils defines metabolomics\-related core functionality provided as low\-level functions to allow a data structure\-independent usage across various R packages. This includes functions to calculate between ion \(adduct\) and compound mass\-to\-charge ratios and masses or functions to work with chemical formulas. The package provides also a set of adduct definitions and information on some commercially available internal standard mixes commonly used in MS experiments.


.. conda:package:: bioconductor-metabocoreutils

   |downloads_bioconductor-metabocoreutils| |docker_bioconductor-metabocoreutils|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-mscoreutils: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metabocoreutils

   and update with::

      conda update bioconductor-metabocoreutils

   or use the docker container::

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
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
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