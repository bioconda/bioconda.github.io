.. title:: Package Recipe 'bioconductor-pepstat'
.. highlight: bash


bioconductor-pepstat
====================

.. conda:recipe:: bioconductor-pepstat
   :replaces_section_title:

   Statistical analysis of peptide microarrays

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pepStat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pepstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepstat/meta.yaml>`_
   :links: biotools: :biotools:`pepstat`, doi: :doi:`10.1007/978-1-4939-3037-1_10`

   


.. conda:package:: bioconductor-pepstat

   |downloads_bioconductor-pepstat| |docker_bioconductor-pepstat|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-fields`  :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-pepstat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pepstat

   and update with::

      conda update bioconductor-pepstat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pepstat


.. |required_by_bioconductor-pepstat| conda:required_by:: bioconductor-pepstat
.. |downloads_bioconductor-pepstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepstat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pepstat| image:: https://quay.io/repository/biocontainers/bioconductor-pepstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepstat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepstat/README.html

