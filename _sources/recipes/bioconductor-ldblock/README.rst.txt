.. title:: Package Recipe 'bioconductor-ldblock'
.. highlight: bash


bioconductor-ldblock
====================

.. conda:recipe:: bioconductor-ldblock
   :replaces_section_title:

   Define data structures for linkage disequilibrium measures in populations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ldblock.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ldblock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ldblock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ldblock/meta.yaml>`_

   


.. conda:package:: bioconductor-ldblock

   |downloads_bioconductor-ldblock| |docker_bioconductor-ldblock|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-erma` >=0.14.0,<0.15.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-homo.sapiens` >=1.3.0,<1.4.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-snpstats` >=1.32.0,<1.33.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  

   :required~by: |required_by_bioconductor-ldblock|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ldblock

   and update with::

      conda update bioconductor-ldblock

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ldblock


.. |required_by_bioconductor-ldblock| conda:required_by:: bioconductor-ldblock
.. |downloads_bioconductor-ldblock| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ldblock.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ldblock| image:: https://quay.io/repository/biocontainers/bioconductor-ldblock/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ldblock







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ldblock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ldblock/README.html

