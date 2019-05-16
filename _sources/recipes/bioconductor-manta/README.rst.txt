:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-manta'
.. highlight: bash

bioconductor-manta
==================

.. conda:recipe:: bioconductor-manta
   :replaces_section_title:

   Tools for robust comparative metatranscriptomics.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/manta.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-manta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-manta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-manta/meta.yaml>`_
   :links: biotools: :biotools:`manta`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-manta

   |downloads_bioconductor-manta| |docker_bioconductor-manta|

   :versions: 1.30.0-0, 1.28.1-0, 1.28.0-0, 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-caroline: >=0.6.6
   :depends r-hmisc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-manta

   and update with::

      conda update bioconductor-manta

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-manta:<tag>

   (see `bioconductor-manta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-manta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-manta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-manta
   :alt:   (downloads)
.. |docker_bioconductor-manta| image:: https://quay.io/repository/biocontainers/bioconductor-manta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-manta
.. _`bioconductor-manta/tags`: https://quay.io/repository/biocontainers/bioconductor-manta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-manta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-manta/README.html