:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowchic'
.. highlight: bash

bioconductor-flowchic
=====================

.. conda:recipe:: bioconductor-flowchic
   :replaces_section_title:

   A package to analyze flow cytometric data of complex microbial communities based on histogram images

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowCHIC.html
   :license: GPL-2
   :recipe: /`bioconductor-flowchic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowchic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowchic/meta.yaml>`_

   


.. conda:package:: bioconductor-flowchic

   |downloads_bioconductor-flowchic| |docker_bioconductor-flowchic|

   :versions: 1.16.0-0
   
   :depends bioconductor-ebimage: >=4.24.0,<4.25.0
   
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-hexbin: 
   
   :depends r-vegan: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowchic

   and update with::

      conda update bioconductor-flowchic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowchic:<tag>

   (see `bioconductor-flowchic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowchic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowchic.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowchic| image:: https://quay.io/repository/biocontainers/bioconductor-flowchic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowchic
.. _`bioconductor-flowchic/tags`: https://quay.io/repository/biocontainers/bioconductor-flowchic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowchic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowchic/README.html