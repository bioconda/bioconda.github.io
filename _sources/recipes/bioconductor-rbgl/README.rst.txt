:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbgl'
.. highlight: bash

bioconductor-rbgl
=================

.. conda:recipe:: bioconductor-rbgl
   :replaces_section_title:

   A fairly extensive and comprehensive interface to the graph algorithms contained in the BOOST library.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RBGL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rbgl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbgl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbgl/meta.yaml>`_
   :links: biotools: :biotools:`rbgl`, doi: :doi:`10.1093/bioinformatics/bth458`

   


.. conda:package:: bioconductor-rbgl

   |downloads_bioconductor-rbgl| |docker_bioconductor-rbgl|

   :versions: 1.58.1-0, 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.48.1-1, 1.46.0-1, 1.46.0-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbgl

   and update with::

      conda update bioconductor-rbgl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbgl:<tag>

   (see `bioconductor-rbgl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbgl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbgl.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rbgl| image:: https://quay.io/repository/biocontainers/bioconductor-rbgl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbgl
.. _`bioconductor-rbgl/tags`: https://quay.io/repository/biocontainers/bioconductor-rbgl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbgl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbgl/README.html