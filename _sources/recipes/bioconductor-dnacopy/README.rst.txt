.. title:: Package Recipe 'bioconductor-dnacopy'
.. highlight: bash


bioconductor-dnacopy
====================

.. conda:recipe:: bioconductor-dnacopy
   :replaces_section_title:

   Implements the circular binary segmentation \(CBS\) algorithm to segment DNA copy number data and identify genomic regions with abnormal copy number.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DNAcopy.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dnacopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnacopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnacopy/meta.yaml>`_
   :links: biotools: :biotools:`dnacopy`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-dnacopy

   |downloads_bioconductor-dnacopy| |docker_bioconductor-dnacopy|

   :versions: 1.56.0, 1.54.0, 1.52.0, 1.50.1, 1.48.0, 1.46.0, 1.44.0

   :depends: :conda:package:`libgfortran` >=3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-dnacopy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dnacopy

   and update with::

      conda update bioconductor-dnacopy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dnacopy


.. |required_by_bioconductor-dnacopy| conda:required_by:: bioconductor-dnacopy
.. |downloads_bioconductor-dnacopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnacopy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dnacopy| image:: https://quay.io/repository/biocontainers/bioconductor-dnacopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnacopy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnacopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnacopy/README.html

