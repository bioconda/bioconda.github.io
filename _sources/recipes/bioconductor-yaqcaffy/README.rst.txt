:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yaqcaffy'
.. highlight: bash

bioconductor-yaqcaffy
=====================

.. conda:recipe:: bioconductor-yaqcaffy
   :replaces_section_title:
   :noindex:

   Affymetrix expression data quality control and reproducibility analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/yaqcaffy.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yaqcaffy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yaqcaffy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yaqcaffy/meta.yaml>`_
   :links: biotools: :biotools:`yaqcaffy`, doi: :doi:`10.1038/nmeth.3252`

   Quality control of Affymetrix GeneChip expression data and reproducibility analysis of human whole genome chips with the MAQC reference datasets.


.. conda:package:: bioconductor-yaqcaffy

   |downloads_bioconductor-yaqcaffy| |docker_bioconductor-yaqcaffy|

   :versions:
      
      

      ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      

   
   :depends bioconductor-simpleaffy: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yaqcaffy

   and update with::

      conda update bioconductor-yaqcaffy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yaqcaffy:<tag>

   (see `bioconductor-yaqcaffy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yaqcaffy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yaqcaffy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yaqcaffy
   :alt:   (downloads)
.. |docker_bioconductor-yaqcaffy| image:: https://quay.io/repository/biocontainers/bioconductor-yaqcaffy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yaqcaffy
.. _`bioconductor-yaqcaffy/tags`: https://quay.io/repository/biocontainers/bioconductor-yaqcaffy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yaqcaffy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yaqcaffy/README.html