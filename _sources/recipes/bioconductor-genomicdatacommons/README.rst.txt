.. title:: Package Recipe 'bioconductor-genomicdatacommons'
.. highlight: bash


bioconductor-genomicdatacommons
===============================

.. conda:recipe:: bioconductor-genomicdatacommons
   :replaces_section_title:

   Programmatically access the NIH \/ NCI Genomic Data Commons RESTful service.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenomicDataCommons.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicdatacommons <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdatacommons>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdatacommons/meta.yaml>`_

   


.. conda:package:: bioconductor-genomicdatacommons

   |downloads_bioconductor-genomicdatacommons| |docker_bioconductor-genomicdatacommons|

   :versions: 1.6.0, 1.4.3, 1.2.0, 1.0.5

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-httr`  :conda:package:`r-jsonlite`  :conda:package:`r-lazyeval`  :conda:package:`r-magrittr`  :conda:package:`r-rappdirs`  :conda:package:`r-readr`  :conda:package:`r-xml2`  

   :required~by: |required_by_bioconductor-genomicdatacommons|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicdatacommons

   and update with::

      conda update bioconductor-genomicdatacommons

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomicdatacommons


.. |required_by_bioconductor-genomicdatacommons| conda:required_by:: bioconductor-genomicdatacommons
.. |downloads_bioconductor-genomicdatacommons| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicdatacommons.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomicdatacommons| image:: https://quay.io/repository/biocontainers/bioconductor-genomicdatacommons/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicdatacommons







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicdatacommons/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicdatacommons/README.html

