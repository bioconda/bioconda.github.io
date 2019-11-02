:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rontotools'
.. highlight: bash

bioconductor-rontotools
=======================

.. conda:recipe:: bioconductor-rontotools
   :replaces_section_title:

   Suite of tools for functional analysis.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ROntoTools.html
   :license: CC BY-NC-ND 4.0 + file LICENSE
   :recipe: /`bioconductor-rontotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rontotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rontotools/meta.yaml>`_
   :links: biotools: :biotools:`rontotools`, doi: :doi:`10.1109/JPROC.2016.2531000`

   


.. conda:package:: bioconductor-rontotools

   |downloads_bioconductor-rontotools| |docker_bioconductor-rontotools|

   :versions: 2.14.0-0, 2.12.0-1, 2.10.0-0, 2.8.0-0, 2.6.0-0, 2.4.0-0
   
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-kegggraph: >=1.46.0,<1.47.0
   :depends bioconductor-keggrest: >=1.26.0,<1.27.0
   :depends bioconductor-rgraphviz: >=2.30.0,<2.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-boot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rontotools

   and update with::

      conda update bioconductor-rontotools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rontotools:<tag>

   (see `bioconductor-rontotools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rontotools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rontotools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rontotools
   :alt:   (downloads)
.. |docker_bioconductor-rontotools| image:: https://quay.io/repository/biocontainers/bioconductor-rontotools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rontotools
.. _`bioconductor-rontotools/tags`: https://quay.io/repository/biocontainers/bioconductor-rontotools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rontotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rontotools/README.html