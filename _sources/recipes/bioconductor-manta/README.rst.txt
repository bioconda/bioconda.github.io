.. title:: Package Recipe 'bioconductor-manta'
.. highlight: bash


bioconductor-manta
==================

.. conda:recipe:: bioconductor-manta
   :replaces_section_title:

   Tools for robust comparative metatranscriptomics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/manta.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-manta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-manta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-manta/meta.yaml>`_
   :links: biotools: :biotools:`manta`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-manta

   |downloads_bioconductor-manta| |docker_bioconductor-manta|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-caroline` >=0.6.6 :conda:package:`r-hmisc`  

   :required~by: |required_by_bioconductor-manta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-manta

   and update with::

      conda update bioconductor-manta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-manta


.. |required_by_bioconductor-manta| conda:required_by:: bioconductor-manta
.. |downloads_bioconductor-manta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-manta.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-manta| image:: https://quay.io/repository/biocontainers/bioconductor-manta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-manta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-manta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-manta/README.html

