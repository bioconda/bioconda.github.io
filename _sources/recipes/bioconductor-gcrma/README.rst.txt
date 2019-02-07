.. title:: Package Recipe 'bioconductor-gcrma'
.. highlight: bash


bioconductor-gcrma
==================

.. conda:recipe:: bioconductor-gcrma
   :replaces_section_title:

   Background adjustment using sequence information

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gcrma.html
   :license: LGPL
   :recipe: /`bioconductor-gcrma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrma/meta.yaml>`_
   :links: biotools: :biotools:`gcrma`, doi: :doi:`10.1186/1471-2105-9-452`

   


.. conda:package:: bioconductor-gcrma

   |downloads_bioconductor-gcrma| |docker_bioconductor-gcrma|

   :versions: 2.54.0, 2.52.0, 2.50.0, 2.48.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-affyio` >=1.52.0,<1.53.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  

   :required~by: |required_by_bioconductor-gcrma|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcrma

   and update with::

      conda update bioconductor-gcrma

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gcrma


.. |required_by_bioconductor-gcrma| conda:required_by:: bioconductor-gcrma
.. |downloads_bioconductor-gcrma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcrma.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gcrma| image:: https://quay.io/repository/biocontainers/bioconductor-gcrma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcrma







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcrma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcrma/README.html

