.. title:: Package Recipe 'bioconductor-rcyjs'
.. highlight: bash


bioconductor-rcyjs
==================

.. conda:recipe:: bioconductor-rcyjs
   :replaces_section_title:

   Interactive viewing and exploration of graphs\, connecting R to Cytoscape.js\, using websockets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RCyjs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rcyjs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcyjs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcyjs/meta.yaml>`_

   


.. conda:package:: bioconductor-rcyjs

   |downloads_bioconductor-rcyjs| |docker_bioconductor-rcyjs|

   :versions: 2.4.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-browserviz` >=2.4.0,<2.5.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-base64enc`  :conda:package:`r-httpuv` >=1.4.0 

   :required~by: |required_by_bioconductor-rcyjs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcyjs

   and update with::

      conda update bioconductor-rcyjs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rcyjs


.. |required_by_bioconductor-rcyjs| conda:required_by:: bioconductor-rcyjs
.. |downloads_bioconductor-rcyjs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcyjs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rcyjs| image:: https://quay.io/repository/biocontainers/bioconductor-rcyjs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcyjs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcyjs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcyjs/README.html

