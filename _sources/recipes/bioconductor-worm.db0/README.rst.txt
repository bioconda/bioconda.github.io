:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-worm.db0'
.. highlight: bash

bioconductor-worm.db0
=====================

.. conda:recipe:: bioconductor-worm.db0
   :replaces_section_title:

   Base annotation databases for worm\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/worm.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-worm.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-worm.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-worm.db0/meta.yaml>`_

   


.. conda:package:: bioconductor-worm.db0

   |downloads_bioconductor-worm.db0| |docker_bioconductor-worm.db0|

   :versions: 3.7.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-worm.db0

   and update with::

      conda update bioconductor-worm.db0

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-worm.db0:<tag>

   (see `bioconductor-worm.db0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-worm.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-worm.db0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-worm.db0
   :alt:   (downloads)
.. |docker_bioconductor-worm.db0| image:: https://quay.io/repository/biocontainers/bioconductor-worm.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-worm.db0
.. _`bioconductor-worm.db0/tags`: https://quay.io/repository/biocontainers/bioconductor-worm.db0?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-worm.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-worm.db0/README.html