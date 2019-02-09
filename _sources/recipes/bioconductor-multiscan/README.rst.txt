.. title:: Package Recipe 'bioconductor-multiscan'
.. highlight: bash


bioconductor-multiscan
======================

.. conda:recipe:: bioconductor-multiscan
   :replaces_section_title:

   Estimates gene expressions from several laser scans of the same microarray

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/multiscan.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-multiscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiscan/meta.yaml>`_
   :links: biotools: :biotools:`multiscan`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-multiscan

   |downloads_bioconductor-multiscan| |docker_bioconductor-multiscan|

   :versions: 1.42.0, 1.40.0, 1.38.0, 1.36.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-multiscan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multiscan

   and update with::

      conda update bioconductor-multiscan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-multiscan


.. |required_by_bioconductor-multiscan| conda:required_by:: bioconductor-multiscan
.. |downloads_bioconductor-multiscan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiscan.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-multiscan| image:: https://quay.io/repository/biocontainers/bioconductor-multiscan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiscan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiscan/README.html

