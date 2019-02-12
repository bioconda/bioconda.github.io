:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathrender'
.. highlight: bash

bioconductor-pathrender
=======================

.. conda:recipe:: bioconductor-pathrender
   :replaces_section_title:

   build graphs from pathway databases\, render them by Rgraphviz.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pathRender.html
   :license: LGPL
   :recipe: /`bioconductor-pathrender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathrender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathrender/meta.yaml>`_
   :links: biotools: :biotools:`pathrender`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-pathrender

   |downloads_bioconductor-pathrender| |docker_bioconductor-pathrender|

   :versions: 1.50.0-0, 1.48.0-0, 1.46.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-cmap: >=1.15.0,<1.16.0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends bioconductor-rgraphviz: >=2.26.0,<2.27.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcolorbrewer: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathrender

   and update with::

      conda update bioconductor-pathrender

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pathrender:<tag>

   (see `bioconductor-pathrender/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathrender| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathrender.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pathrender| image:: https://quay.io/repository/biocontainers/bioconductor-pathrender/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathrender
.. _`bioconductor-pathrender/tags`: https://quay.io/repository/biocontainers/bioconductor-pathrender?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathrender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathrender/README.html