:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-raceid'
.. highlight: bash

r-raceid
========

.. conda:recipe:: r-raceid
   :replaces_section_title:

   Application of \'RaceID\' allows inference of cell types and prediction of lineage trees by the StemID2 algorithm.

   :homepage: https://github.com/dgrun/RaceID3_StemID2_package
   :license: GPL3 / GPL-3
   :recipe: /`r-raceid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-raceid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-raceid/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.4662`

   


.. conda:package:: r-raceid

   |downloads_r-raceid| |docker_r-raceid|

   :versions: 0.1.3-0, 0.1.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: 
   :depends r-coop: 
   :depends r-fateid: 
   :depends r-fpc: 
   :depends r-ica: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-locfit: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-pheatmap: 
   :depends r-quadprog: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-rtsne: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-raceid

   and update with::

      conda update r-raceid

   or use the docker container::

      docker pull quay.io/biocontainers/r-raceid:<tag>

   (see `r-raceid/tags`_ for valid values for ``<tag>``)


.. |downloads_r-raceid| image:: https://img.shields.io/conda/dn/bioconda/r-raceid.svg?style=flat
   :target: https://anaconda.org/bioconda/r-raceid
   :alt:   (downloads)
.. |docker_r-raceid| image:: https://quay.io/repository/biocontainers/r-raceid/status
   :target: https://quay.io/repository/biocontainers/r-raceid
.. _`r-raceid/tags`: https://quay.io/repository/biocontainers/r-raceid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-raceid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-raceid/README.html