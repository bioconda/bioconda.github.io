.. title:: Package Recipe 'bioconductor-limma'
.. highlight: bash


bioconductor-limma
==================

.. conda:recipe:: bioconductor-limma
   :replaces_section_title:

   Data analysis\, linear models and differential expression for microarray data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/limma.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-limma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limma/meta.yaml>`_
   :links: biotools: :biotools:`limma`

   


.. conda:package:: bioconductor-limma

   |downloads_bioconductor-limma| |docker_bioconductor-limma|

   :versions: 3.38.3, 3.36.5, 3.34.9, 3.34.6, 3.34.1, 3.34.0, 3.32.10, 3.30.13, 3.29.0, 3.28.21, 3.28.10, 3.28.6, 3.28.2, 3.27.4, 3.26.9, 3.26.7, 3.26.3, 3.26.1, 3.26.0, 3.24.15

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-limma|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-limma

   and update with::

      conda update bioconductor-limma

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-limma


.. |required_by_bioconductor-limma| conda:required_by:: bioconductor-limma
.. |downloads_bioconductor-limma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-limma.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-limma| image:: https://quay.io/repository/biocontainers/bioconductor-limma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-limma







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-limma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-limma/README.html

