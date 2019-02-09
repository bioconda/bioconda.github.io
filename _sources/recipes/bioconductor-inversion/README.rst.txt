.. title:: Package Recipe 'bioconductor-inversion'
.. highlight: bash


bioconductor-inversion
======================

.. conda:recipe:: bioconductor-inversion
   :replaces_section_title:

   Package to find genetic inversions in genotype \(SNP array\) data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/inveRsion.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-inversion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inversion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inversion/meta.yaml>`_
   :links: biotools: :biotools:`inversion`, doi: :doi:`10.1186/1471-2105-13-28`

   


.. conda:package:: bioconductor-inversion

   |downloads_bioconductor-inversion| |docker_bioconductor-inversion|

   :versions: 1.30.0, 1.28.0, 1.26.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-haplo.stats`  

   :required~by: |required_by_bioconductor-inversion|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-inversion

   and update with::

      conda update bioconductor-inversion

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-inversion


.. |required_by_bioconductor-inversion| conda:required_by:: bioconductor-inversion
.. |downloads_bioconductor-inversion| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inversion.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-inversion| image:: https://quay.io/repository/biocontainers/bioconductor-inversion/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inversion







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inversion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inversion/README.html

