:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplots'
.. highlight: bash

r-acidplots
===========

.. conda:recipe:: r-acidplots
   :replaces_section_title:
   :noindex:

   Functions for plotting genomic data.

   :homepage: https://r.acidgenomics.com/packages/acidplots/
   :developer docs: https://github.com/acidgenomics/r-acidplots
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots/meta.yaml>`_

   


.. conda:package:: r-acidplots

   |downloads_r-acidplots| |docker_r-acidplots|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.7-0</code>,  <code>0.3.5-2</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.0-0</code>,  <code>0.2.36-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.0-0``,  ``0.2.36-0``,  ``0.2.35-0``,  ``0.2.34-0``,  ``0.2.32-0``,  ``0.2.30-0``,  ``0.2.29-0``,  ``0.2.28-0``,  ``0.2.27-0``,  ``0.2.26-1``,  ``0.2.26-0``,  ``0.2.24-0``,  ``0.2.23-0``,  ``0.2.22-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-complexheatmap: 
   :depends bioconductor-dropletutils: 
   :depends bioconductor-iranges: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-singlecellexperiment: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-acidbase: ``>=0.5.0``
   :depends r-acidcli: ``>=0.2.0``
   :depends r-acidexperiment: ``>=0.3.0``
   :depends r-acidgenerics: ``>=0.6.0``
   :depends r-acidgenomes: ``>=0.3.0``
   :depends r-acidmarkdown: ``>=0.1.5``
   :depends r-acidplyr: ``>=0.2.0``
   :depends r-acidsinglecell: ``>=0.2.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-complexupset: 
   :depends r-ggplot2: 
   :depends r-ggpmisc: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-goalie: ``>=0.6.0``
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-pheatmap: 
   :depends r-pipette: ``>=0.8.0``
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-syntactic: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidplots

   and update with::

      conda update r-acidplots

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidplots:<tag>

   (see `r-acidplots/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidplots| image:: https://img.shields.io/conda/dn/bioconda/r-acidplots.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidplots
   :alt:   (downloads)
.. |docker_r-acidplots| image:: https://quay.io/repository/biocontainers/r-acidplots/status
   :target: https://quay.io/repository/biocontainers/r-acidplots
.. _`r-acidplots/tags`: https://quay.io/repository/biocontainers/r-acidplots?tab=tags


.. raw:: html

    <script>
        var package = "r-acidplots";
        var versions = ["0.4.0","0.3.9","0.3.8","0.3.7","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidplots/README.html