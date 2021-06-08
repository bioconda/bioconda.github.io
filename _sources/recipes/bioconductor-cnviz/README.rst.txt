:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnviz'
.. highlight: bash

bioconductor-cnviz
==================

.. conda:recipe:: bioconductor-cnviz
   :replaces_section_title:
   :noindex:

   Copy Number Visualization

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CNViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnviz/meta.yaml>`_

   CNViz takes probe\, gene\, and segment\-level log2 copy number ratios and launches a Shiny app to visualize your sample\'s copy number profile. You can also integrate loss of heterozygosity \(LOH\) and single nucleotide variant \(SNV\) data.


.. conda:package:: bioconductor-cnviz

   |downloads_bioconductor-cnviz| |docker_bioconductor-cnviz|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-copynumberplots: ``>=1.8.0,<1.9.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-karyoploter: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-scales: 
   :depends r-shiny: ``>=1.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnviz

   and update with::

      conda update bioconductor-cnviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnviz:<tag>

   (see `bioconductor-cnviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnviz
   :alt:   (downloads)
.. |docker_bioconductor-cnviz| image:: https://quay.io/repository/biocontainers/bioconductor-cnviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnviz
.. _`bioconductor-cnviz/tags`: https://quay.io/repository/biocontainers/bioconductor-cnviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnviz/README.html