.. title:: Package Recipe 'bioconductor-category'
.. highlight: bash


bioconductor-category
=====================

.. conda:recipe:: bioconductor-category
   :replaces_section_title:

   A collection of tools for performing category \(gene set enrichment\) analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Category.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-category <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-category>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-category/meta.yaml>`_
   :links: biotools: :biotools:`category`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-category

   |downloads_bioconductor-category| |docker_bioconductor-category|

   :versions: 2.48.0, 2.46.0, 2.44.0, 2.42.1, 2.38.0, 2.36.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-rbgl` >=1.58.0,<1.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-matrix`  

   :required~by: |required_by_bioconductor-category|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-category

   and update with::

      conda update bioconductor-category

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-category


.. |required_by_bioconductor-category| conda:required_by:: bioconductor-category
.. |downloads_bioconductor-category| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-category.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-category| image:: https://quay.io/repository/biocontainers/bioconductor-category/status
   :target: https://quay.io/repository/biocontainers/bioconductor-category







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-category/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-category/README.html

