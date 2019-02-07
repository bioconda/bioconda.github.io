.. title:: Package Recipe 'bioconductor-bubbletree'
.. highlight: bash


bioconductor-bubbletree
=======================

.. conda:recipe:: bioconductor-bubbletree
   :replaces_section_title:

   CNV analysis in groups of tumor samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BubbleTree.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-bubbletree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bubbletree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bubbletree/meta.yaml>`_
   :links: biotools: :biotools:`bubbletree`, doi: :doi:`10.1093/nar/gkv1102`

   


.. conda:package:: bioconductor-bubbletree

   |downloads_bioconductor-bubbletree| |docker_bioconductor-bubbletree|

   :versions: 2.12.0, 2.10.0, 2.8.0, 2.6.0, 2.4.0, 2.1.5

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`bioconductor-biovizbase` >=1.30.0,<1.31.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-e1071`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-gtable`  :conda:package:`r-gtools`  :conda:package:`r-magrittr`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-writexls`  

   :required~by: |required_by_bioconductor-bubbletree|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bubbletree

   and update with::

      conda update bioconductor-bubbletree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bubbletree


.. |required_by_bioconductor-bubbletree| conda:required_by:: bioconductor-bubbletree
.. |downloads_bioconductor-bubbletree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bubbletree.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bubbletree| image:: https://quay.io/repository/biocontainers/bioconductor-bubbletree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bubbletree







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bubbletree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bubbletree/README.html

