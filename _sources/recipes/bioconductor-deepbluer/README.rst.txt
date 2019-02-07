.. title:: Package Recipe 'bioconductor-deepbluer'
.. highlight: bash


bioconductor-deepbluer
======================

.. conda:recipe:: bioconductor-deepbluer
   :replaces_section_title:

   Accessing the DeepBlue Epigenetics Data Server through R.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DeepBlueR.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-deepbluer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepbluer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepbluer/meta.yaml>`_
   :links: biotools: :biotools:`deepbluer`

   


.. conda:package:: bioconductor-deepbluer

   |downloads_bioconductor-deepbluer| |docker_bioconductor-deepbluer|

   :versions: 1.8.0, 1.6.0, 1.4.1

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-diffr`  :conda:package:`r-dplyr`  :conda:package:`r-filehash`  :conda:package:`r-foreach`  :conda:package:`r-r.utils`  :conda:package:`r-rcurl`  :conda:package:`r-rjson`  :conda:package:`r-settings`  :conda:package:`r-stringr`  :conda:package:`r-withr`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-deepbluer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deepbluer

   and update with::

      conda update bioconductor-deepbluer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-deepbluer


.. |required_by_bioconductor-deepbluer| conda:required_by:: bioconductor-deepbluer
.. |downloads_bioconductor-deepbluer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deepbluer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-deepbluer| image:: https://quay.io/repository/biocontainers/bioconductor-deepbluer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deepbluer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deepbluer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deepbluer/README.html

