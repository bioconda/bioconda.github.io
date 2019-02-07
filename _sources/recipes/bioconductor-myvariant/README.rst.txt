.. title:: Package Recipe 'bioconductor-myvariant'
.. highlight: bash


bioconductor-myvariant
======================

.. conda:recipe:: bioconductor-myvariant
   :replaces_section_title:

   MyVariant.info is a comprehensive aggregation of variant annotation resources. myvariant is a wrapper for querying MyVariant.info services

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/myvariant.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-myvariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-myvariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-myvariant/meta.yaml>`_
   :links: biotools: :biotools:`myvariant`, doi: :doi:`10.1101/035667`

   


.. conda:package:: bioconductor-myvariant

   |downloads_bioconductor-myvariant| |docker_bioconductor-myvariant|

   :versions: 1.12.0, 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hmisc`  :conda:package:`r-httr`  :conda:package:`r-jsonlite`  :conda:package:`r-magrittr`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-myvariant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-myvariant

   and update with::

      conda update bioconductor-myvariant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-myvariant


.. |required_by_bioconductor-myvariant| conda:required_by:: bioconductor-myvariant
.. |downloads_bioconductor-myvariant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-myvariant.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-myvariant| image:: https://quay.io/repository/biocontainers/bioconductor-myvariant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-myvariant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-myvariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-myvariant/README.html

