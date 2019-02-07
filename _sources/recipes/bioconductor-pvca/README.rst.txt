.. title:: Package Recipe 'bioconductor-pvca'
.. highlight: bash


bioconductor-pvca
=================

.. conda:recipe:: bioconductor-pvca
   :replaces_section_title:

   This package contains the function to assess the batch sourcs by fitting all \"sources\" as random effects including two\-way interaction terms in the Mixed Model\(depends on lme4 package\) to selected principal components\, which were obtained from the original data correlation matrix. This package accompanies the book \"Batch Effects and Noise in Microarray Experiements\, chapter 12.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pvca.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-pvca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pvca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pvca/meta.yaml>`_
   :links: biotools: :biotools:`pvca`, doi: :doi:`10.1002/9780470685983.ch12`

   


.. conda:package:: bioconductor-pvca

   |downloads_bioconductor-pvca| |docker_bioconductor-pvca|

   :versions: 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-vsn` >=3.50.0,<3.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lme4`  :conda:package:`r-matrix`  

   :required~by: |required_by_bioconductor-pvca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pvca

   and update with::

      conda update bioconductor-pvca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pvca


.. |required_by_bioconductor-pvca| conda:required_by:: bioconductor-pvca
.. |downloads_bioconductor-pvca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pvca.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pvca| image:: https://quay.io/repository/biocontainers/bioconductor-pvca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pvca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pvca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pvca/README.html

