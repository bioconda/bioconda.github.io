:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-switchde'
.. highlight: bash

bioconductor-switchde
=====================

.. conda:recipe:: bioconductor-switchde
   :replaces_section_title:

   Inference and detection of switch\-like differential expression across single\-cell RNA\-seq trajectories.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/switchde.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-switchde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-switchde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-switchde/meta.yaml>`_
   :links: biotools: :biotools:`switchde`, doi: :doi:`10.1093/bioinformatics/btw798`

   


.. conda:package:: bioconductor-switchde

   |downloads_bioconductor-switchde| |docker_bioconductor-switchde|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-singlecellexperiment: >=1.4.0,<1.5.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-switchde

   and update with::

      conda update bioconductor-switchde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-switchde:<tag>

   (see `bioconductor-switchde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-switchde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-switchde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-switchde
   :alt:   (downloads)
.. |docker_bioconductor-switchde| image:: https://quay.io/repository/biocontainers/bioconductor-switchde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-switchde
.. _`bioconductor-switchde/tags`: https://quay.io/repository/biocontainers/bioconductor-switchde?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-switchde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-switchde/README.html