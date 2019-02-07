.. title:: Package Recipe 'bioconductor-gsealm'
.. highlight: bash


bioconductor-gsealm
===================

.. conda:recipe:: bioconductor-gsealm
   :replaces_section_title:

   Models and methods for fitting linear models to gene expression data\, together with tools for computing and using various regression diagnostics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GSEAlm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gsealm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsealm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsealm/meta.yaml>`_
   :links: biotools: :biotools:`gsealm`, doi: :doi:`10.1093/bioinformatics/btn465`

   


.. conda:package:: bioconductor-gsealm

   |downloads_bioconductor-gsealm| |docker_bioconductor-gsealm|

   :versions: 1.42.0, 1.40.0, 1.38.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-gsealm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsealm

   and update with::

      conda update bioconductor-gsealm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gsealm


.. |required_by_bioconductor-gsealm| conda:required_by:: bioconductor-gsealm
.. |downloads_bioconductor-gsealm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsealm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gsealm| image:: https://quay.io/repository/biocontainers/bioconductor-gsealm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsealm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsealm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsealm/README.html

