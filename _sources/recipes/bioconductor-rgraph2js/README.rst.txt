:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgraph2js'
.. highlight: bash

bioconductor-rgraph2js
======================

.. conda:recipe:: bioconductor-rgraph2js
   :replaces_section_title:

   Generator of web pages which display interactive network\/graph visualizations with D3js\, jQuery and Raphael.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RGraph2js.html
   :license: GPL-2
   :recipe: /`bioconductor-rgraph2js <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraph2js>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraph2js/meta.yaml>`_
   :links: biotools: :biotools:`rgraph2js`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rgraph2js

   |downloads_bioconductor-rgraph2js| |docker_bioconductor-rgraph2js|

   :versions: 1.12.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-graph: >=1.62.0,<1.63.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-digest: 
   :depends r-rjson: 
   :depends r-whisker: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgraph2js

   and update with::

      conda update bioconductor-rgraph2js

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgraph2js:<tag>

   (see `bioconductor-rgraph2js/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgraph2js| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgraph2js.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgraph2js
   :alt:   (downloads)
.. |docker_bioconductor-rgraph2js| image:: https://quay.io/repository/biocontainers/bioconductor-rgraph2js/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgraph2js
.. _`bioconductor-rgraph2js/tags`: https://quay.io/repository/biocontainers/bioconductor-rgraph2js?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgraph2js/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgraph2js/README.html