:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bubbletree'
.. highlight: bash

bioconductor-bubbletree
=======================

.. conda:recipe:: bioconductor-bubbletree
   :replaces_section_title:
   :noindex:

   BubbleTree\: an intuitive visualization to elucidate tumoral aneuploidy and clonality in somatic mosaicism using next generation sequencing data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/BubbleTree.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-bubbletree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bubbletree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bubbletree/meta.yaml>`_
   :links: biotools: :biotools:`bubbletree`, doi: :doi:`10.1093/nar/gkv1102`

   CNV analysis in groups of tumor samples.


.. conda:package:: bioconductor-bubbletree

   |downloads_bioconductor-bubbletree| |docker_bioconductor-bubbletree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocstyle: ``>=2.18.0,<2.19.0``
   :depends bioconductor-biovizbase: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-writexls: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bubbletree

   and update with::

      conda update bioconductor-bubbletree

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bubbletree:<tag>

   (see `bioconductor-bubbletree/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bubbletree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bubbletree.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bubbletree
   :alt:   (downloads)
.. |docker_bioconductor-bubbletree| image:: https://quay.io/repository/biocontainers/bioconductor-bubbletree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bubbletree
.. _`bioconductor-bubbletree/tags`: https://quay.io/repository/biocontainers/bioconductor-bubbletree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bubbletree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bubbletree/README.html