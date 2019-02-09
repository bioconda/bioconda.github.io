.. title:: Package Recipe 'bioconductor-genefilter'
.. highlight: bash


bioconductor-genefilter
=======================

.. conda:recipe:: bioconductor-genefilter
   :replaces_section_title:

   Some basic functions for filtering genes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/genefilter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genefilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefilter/meta.yaml>`_
   :links: biotools: :biotools:`genefilter`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-genefilter

   |downloads_bioconductor-genefilter| |docker_bioconductor-genefilter|

   :versions: 1.64.0, 1.62.0, 1.60.0, 1.58.1, 1.56.0, 1.54.2, 1.52.1, 1.52.0, 1.51.0, 1.50.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`libgfortran` >=3.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-genefilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genefilter

   and update with::

      conda update bioconductor-genefilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genefilter


.. |required_by_bioconductor-genefilter| conda:required_by:: bioconductor-genefilter
.. |downloads_bioconductor-genefilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genefilter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genefilter| image:: https://quay.io/repository/biocontainers/bioconductor-genefilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genefilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genefilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genefilter/README.html

