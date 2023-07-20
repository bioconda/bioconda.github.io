:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggmsa'
.. highlight: bash

bioconductor-ggmsa
==================

.. conda:recipe:: bioconductor-ggmsa
   :replaces_section_title:
   :noindex:

   Plot Multiple Sequence Alignment using \'ggplot2\'

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ggmsa.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmsa/meta.yaml>`_

   A visual exploration tool for multiple sequence alignment and associated data. Supports MSA of DNA\, RNA\, and protein sequences using \'ggplot2\'. Multiple sequence alignment can easily be combined with other \'ggplot2\' plots\, such as phylogenetic tree Visualized by \'ggtree\'\, boxplot\, genome map and so on. More features\: visualization of sequence logos\, sequence bundles\, RNA secondary structures and detection of sequence recombinations.


.. conda:package:: bioconductor-ggmsa

   |downloads_bioconductor-ggmsa| |docker_bioconductor-ggmsa|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-ggtree: ``>=3.8.0,<3.9.0``
   :depends bioconductor-r4rna: ``>=1.28.0,<1.29.0``
   :depends r-aplot: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggalt: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-seqmagick: 
   :depends r-statebins: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggmsa

   and update with::

      conda update bioconductor-ggmsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggmsa:<tag>

   (see `bioconductor-ggmsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggmsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggmsa
   :alt:   (downloads)
.. |docker_bioconductor-ggmsa| image:: https://quay.io/repository/biocontainers/bioconductor-ggmsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggmsa
.. _`bioconductor-ggmsa/tags`: https://quay.io/repository/biocontainers/bioconductor-ggmsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggmsa";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggmsa/README.html