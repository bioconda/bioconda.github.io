:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-malaria.db0'
.. highlight: bash

bioconductor-malaria.db0
========================

.. conda:recipe:: bioconductor-malaria.db0
   :replaces_section_title:

   Base Level Annotation databases for malaria

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/malaria.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-malaria.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-malaria.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-malaria.db0/meta.yaml>`_

   Base annotation databases for malaria\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.


.. conda:package:: bioconductor-malaria.db0

   |downloads_bioconductor-malaria.db0| |docker_bioconductor-malaria.db0|

   :versions: 3.11.2-0, 3.10.0-0, 3.8.2-1, 3.7.1-1, 3.7.1-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-malaria.db0

   and update with::

      conda update bioconductor-malaria.db0

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-malaria.db0:<tag>

   (see `bioconductor-malaria.db0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-malaria.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-malaria.db0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-malaria.db0
   :alt:   (downloads)
.. |docker_bioconductor-malaria.db0| image:: https://quay.io/repository/biocontainers/bioconductor-malaria.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-malaria.db0
.. _`bioconductor-malaria.db0/tags`: https://quay.io/repository/biocontainers/bioconductor-malaria.db0?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-malaria.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-malaria.db0/README.html