:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-garnett'
.. highlight: bash

r-garnett
=========

.. conda:recipe:: r-garnett
   :replaces_section_title:

   Bioconda\-installable version of Garnett cell classification tool.

   :homepage: https://cole-trapnell-lab.github.io/garnett/
   :developer docs: https://github.com/cole-trapnell-lab/garnett
   :license: MIT / MIT
   :recipe: /`r-garnett <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-garnett>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-garnett/meta.yaml>`_

   


.. conda:package:: r-garnett

   |downloads_r-garnett| |docker_r-garnett|

   :versions: 0.1.4-0
   
   :depends bioconductor-biocinstaller: 
   :depends bioconductor-delayedarray: 
   :depends bioconductor-delayedmatrixstats: 
   :depends bioconductor-monocle: 
   :depends bioconductor-org.hs.eg.db: 
   :depends bioconductor-org.mm.eg.db: 
   :depends r-assertthat: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-covr: 
   :depends r-doparallel: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glasso: 
   :depends r-glmnet: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-rann: 
   :depends r-reshape2: 
   :depends r-rly: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-vgam: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-garnett

   and update with::

      conda update r-garnett

   or use the docker container::

      docker pull quay.io/biocontainers/r-garnett:<tag>

   (see `r-garnett/tags`_ for valid values for ``<tag>``)


.. |downloads_r-garnett| image:: https://img.shields.io/conda/dn/bioconda/r-garnett.svg?style=flat
   :target: https://anaconda.org/bioconda/r-garnett
   :alt:   (downloads)
.. |docker_r-garnett| image:: https://quay.io/repository/biocontainers/r-garnett/status
   :target: https://quay.io/repository/biocontainers/r-garnett
.. _`r-garnett/tags`: https://quay.io/repository/biocontainers/r-garnett?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-garnett/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-garnett/README.html