:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcyjs'
.. highlight: bash

bioconductor-rcyjs
==================

.. conda:recipe:: bioconductor-rcyjs
   :replaces_section_title:

   Interactive viewing and exploration of graphs\, connecting R to Cytoscape.js\, using websockets.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RCyjs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rcyjs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcyjs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcyjs/meta.yaml>`_

   


.. conda:package:: bioconductor-rcyjs

   |downloads_bioconductor-rcyjs| |docker_bioconductor-rcyjs|

   :versions: 2.6.0-1, 2.4.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-browserviz: >=2.6.0,<2.7.0
   :depends bioconductor-graph: >=1.62.0,<1.63.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-base64enc: 
   :depends r-httpuv: >=1.5.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcyjs

   and update with::

      conda update bioconductor-rcyjs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcyjs:<tag>

   (see `bioconductor-rcyjs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcyjs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcyjs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcyjs
   :alt:   (downloads)
.. |docker_bioconductor-rcyjs| image:: https://quay.io/repository/biocontainers/bioconductor-rcyjs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcyjs
.. _`bioconductor-rcyjs/tags`: https://quay.io/repository/biocontainers/bioconductor-rcyjs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcyjs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcyjs/README.html