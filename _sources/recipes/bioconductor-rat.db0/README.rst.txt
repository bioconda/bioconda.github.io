:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rat.db0'
.. highlight: bash

bioconductor-rat.db0
====================

.. conda:recipe:: bioconductor-rat.db0
   :replaces_section_title:

   Base annotation databases for rat\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/rat.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rat.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rat.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rat.db0/meta.yaml>`_

   


.. conda:package:: bioconductor-rat.db0

   |downloads_bioconductor-rat.db0| |docker_bioconductor-rat.db0|

   :versions: 3.7.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rat.db0

   and update with::

      conda update bioconductor-rat.db0

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rat.db0:<tag>

   (see `bioconductor-rat.db0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rat.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rat.db0.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rat.db0| image:: https://quay.io/repository/biocontainers/bioconductor-rat.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rat.db0
.. _`bioconductor-rat.db0/tags`: https://quay.io/repository/biocontainers/bioconductor-rat.db0?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rat.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rat.db0/README.html