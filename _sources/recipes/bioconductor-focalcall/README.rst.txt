.. title:: Package Recipe 'bioconductor-focalcall'
.. highlight: bash


bioconductor-focalcall
======================

.. conda:recipe:: bioconductor-focalcall
   :replaces_section_title:

   Detection of genomic focal aberrations in high\-resolution DNA copy number data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/focalCall.html
   :license: GPL-2
   :recipe: /`bioconductor-focalcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-focalcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-focalcall/meta.yaml>`_
   :links: biotools: :biotools:`focalcall`, doi: :doi:`10.4137/cin.s19519`

   


.. conda:package:: bioconductor-focalcall

   |downloads_bioconductor-focalcall| |docker_bioconductor-focalcall|

   :versions: 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-cghcall` >=2.44.0,<2.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-focalcall|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-focalcall

   and update with::

      conda update bioconductor-focalcall

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-focalcall


.. |required_by_bioconductor-focalcall| conda:required_by:: bioconductor-focalcall
.. |downloads_bioconductor-focalcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-focalcall.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-focalcall| image:: https://quay.io/repository/biocontainers/bioconductor-focalcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-focalcall







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-focalcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-focalcall/README.html

