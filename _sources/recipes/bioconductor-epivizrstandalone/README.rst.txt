.. title:: Package Recipe 'bioconductor-epivizrstandalone'
.. highlight: bash


bioconductor-epivizrstandalone
==============================

.. conda:recipe:: bioconductor-epivizrstandalone
   :replaces_section_title:

   This package imports the epiviz visualization JavaScript app for genomic data interactive visualization. The \'epivizrServer\' package is used to provide a web server running completely within R. This standalone version allows to browse arbitrary genomes through genome annotations provided by Bioconductor packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/epivizrStandalone.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epivizrstandalone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrstandalone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrstandalone/meta.yaml>`_
   :links: biotools: :biotools:`epivizrstandalone`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-epivizrstandalone

   |downloads_bioconductor-epivizrstandalone| |docker_bioconductor-epivizrstandalone|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-epivizr` >=2.12.0,<2.13.0 :conda:package:`bioconductor-epivizrserver` >=1.10.0,<1.11.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-git2r`  

   :required~by: |required_by_bioconductor-epivizrstandalone|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epivizrstandalone

   and update with::

      conda update bioconductor-epivizrstandalone

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-epivizrstandalone


.. |required_by_bioconductor-epivizrstandalone| conda:required_by:: bioconductor-epivizrstandalone
.. |downloads_bioconductor-epivizrstandalone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrstandalone.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-epivizrstandalone| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrstandalone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrstandalone







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrstandalone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrstandalone/README.html

