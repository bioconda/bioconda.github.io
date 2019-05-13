:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ddpcrclust'
.. highlight: bash

bioconductor-ddpcrclust
=======================

.. conda:recipe:: bioconductor-ddpcrclust
   :replaces_section_title:

   The ddPCRclust algorithm can automatically quantify the CPDs of non\-orthogonal ddPCR reactions with up to four targets. In order to determine the correct droplet count for each target\, it is crucial to both identify all clusters and label them correctly based on their position. For more information on what data can be analyzed and how a template needs to be formatted\, please check the vignette.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ddPCRclust.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ddpcrclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddpcrclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddpcrclust/meta.yaml>`_

   


.. conda:package:: bioconductor-ddpcrclust

   |downloads_bioconductor-ddpcrclust| |docker_bioconductor-ddpcrclust|

   :versions: 1.2.0-0
   
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   :depends bioconductor-flowdensity: >=1.16.0,<1.17.0
   :depends bioconductor-flowpeaks: >=1.28.0,<1.29.0
   :depends bioconductor-samspectral: >=1.36.0,<1.37.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-clue: 
   :depends r-ggplot2: 
   :depends r-openxlsx: 
   :depends r-plotrix: 
   :depends r-r.utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ddpcrclust

   and update with::

      conda update bioconductor-ddpcrclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ddpcrclust:<tag>

   (see `bioconductor-ddpcrclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ddpcrclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ddpcrclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ddpcrclust
   :alt:   (downloads)
.. |docker_bioconductor-ddpcrclust| image:: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust
.. _`bioconductor-ddpcrclust/tags`: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ddpcrclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ddpcrclust/README.html