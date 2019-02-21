:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pannbuilder'
.. highlight: bash

bioconductor-pannbuilder
========================

.. conda:recipe:: bioconductor-pannbuilder
   :replaces_section_title:

   Processing annotation data from public data repositories and building protein\-centric annotation data packages.

   :homepage: http://bioconductor.org/packages/3.7/bioc/html/PAnnBuilder.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-pannbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pannbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pannbuilder/meta.yaml>`_
   :links: biotools: :biotools:`pannbuilder`, doi: :doi:`10.1093/bioinformatics/btp100`

   


.. conda:package:: bioconductor-pannbuilder

   |downloads_bioconductor-pannbuilder| |docker_bioconductor-pannbuilder|

   :versions: 1.43.0-0, 1.42.0-0, 1.40.0-0
   
   :depends bioconductor-annotationdbi: >=1.42.1,<1.44.0
   
   :depends bioconductor-biobase: >=2.40.0,<2.42.0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-dbi: 
   
   :depends r-rsqlite: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pannbuilder

   and update with::

      conda update bioconductor-pannbuilder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pannbuilder:<tag>

   (see `bioconductor-pannbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pannbuilder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pannbuilder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pannbuilder| image:: https://quay.io/repository/biocontainers/bioconductor-pannbuilder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pannbuilder
.. _`bioconductor-pannbuilder/tags`: https://quay.io/repository/biocontainers/bioconductor-pannbuilder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pannbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pannbuilder/README.html