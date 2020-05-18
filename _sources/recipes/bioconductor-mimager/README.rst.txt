:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mimager'
.. highlight: bash

bioconductor-mimager
====================

.. conda:recipe:: bioconductor-mimager
   :replaces_section_title:

   mimager\: The Microarray Imager

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/mimager.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mimager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimager/meta.yaml>`_

   Easily visualize and inspect microarrays for spatial artifacts.


.. conda:package:: bioconductor-mimager

   |downloads_bioconductor-mimager| |docker_bioconductor-mimager|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-1, 1.6.0-0
   
   :depends bioconductor-affy: >=1.66.0,<1.67.0
   :depends bioconductor-affyplm: >=1.64.0,<1.65.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-oligo: >=1.52.0,<1.53.0
   :depends bioconductor-oligoclasses: >=1.50.0,<1.51.0
   :depends bioconductor-preprocesscore: >=1.50.0,<1.51.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dbi: 
   :depends r-gtable: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mimager

   and update with::

      conda update bioconductor-mimager

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mimager:<tag>

   (see `bioconductor-mimager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mimager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mimager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mimager
   :alt:   (downloads)
.. |docker_bioconductor-mimager| image:: https://quay.io/repository/biocontainers/bioconductor-mimager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mimager
.. _`bioconductor-mimager/tags`: https://quay.io/repository/biocontainers/bioconductor-mimager?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mimager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mimager/README.html