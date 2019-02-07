.. title:: Package Recipe 'bioconductor-sispa'
.. highlight: bash


bioconductor-sispa
==================

.. conda:recipe:: bioconductor-sispa
   :replaces_section_title:

   Sample Integrated Set Profile Analysis \(SISPA\) is a method designed to define sample groups with similar gene set enrichment profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SISPA.html
   :license: GPL-2
   :recipe: /`bioconductor-sispa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sispa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sispa/meta.yaml>`_
   :links: biotools: :biotools:`sispa`, doi: :doi:`10.1093/nar/gkv1503`

   


.. conda:package:: bioconductor-sispa

   |downloads_bioconductor-sispa| |docker_bioconductor-sispa|

   :versions: 1.12.0, 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-gsva` >=1.30.0,<1.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-changepoint`  :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-sispa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sispa

   and update with::

      conda update bioconductor-sispa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sispa


.. |required_by_bioconductor-sispa| conda:required_by:: bioconductor-sispa
.. |downloads_bioconductor-sispa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sispa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sispa| image:: https://quay.io/repository/biocontainers/bioconductor-sispa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sispa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sispa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sispa/README.html

