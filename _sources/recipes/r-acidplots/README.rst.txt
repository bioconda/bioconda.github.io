:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplots'
.. highlight: bash

r-acidplots
===========

.. conda:recipe:: r-acidplots
   :replaces_section_title:
   :noindex:

   Functions for plotting genomic data.

   :homepage: https://acidplots.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/acidplots
   :license: GPL-3
   :recipe: /`r-acidplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots/meta.yaml>`_

   


.. conda:package:: r-acidplots

   |downloads_r-acidplots| |docker_r-acidplots|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.32-0</code>,  <code>0.2.30-0</code>,  <code>0.2.29-0</code>,  <code>0.2.28-0</code>,  <code>0.2.27-0</code>,  <code>0.2.26-1</code>,  <code>0.2.26-0</code>,  <code>0.2.24-0</code>,  <code>0.2.23-0</code>,  </span></summary>
      

      ``0.2.32-0``,  ``0.2.30-0``,  ``0.2.29-0``,  ``0.2.28-0``,  ``0.2.27-0``,  ``0.2.26-1``,  ``0.2.26-0``,  ``0.2.24-0``,  ``0.2.23-0``,  ``0.2.22-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.32``
   :depends bioconductor-dropletutils: ``>=1.6``
   :depends bioconductor-iranges: ``>=2.20``
   :depends bioconductor-s4vectors: ``>=0.24``
   :depends bioconductor-singlecellexperiment: ``>=1.8``
   :depends bioconductor-summarizedexperiment: ``>=1.16``
   :depends r-acidgenerics: ``>=0.3.7``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-basejump: ``>=0.12.8``
   :depends r-cowplot: ``>=1.0``
   :depends r-ggplot2: ``>=3.3``
   :depends r-ggrepel: ``>=0.8.2``
   :depends r-ggridges: ``>=0.5.2``
   :depends r-goalie: ``>=0.4.4``
   :depends r-matrix: ``>=1.2``
   :depends r-matrixstats: ``>=0.55``
   :depends r-pheatmap: ``>=1.0.12``
   :depends r-rcolorbrewer: ``>=1.1``
   :depends r-rlang: ``>=0.4``
   :depends r-stringr: ``>=1.4``
   :depends r-upsetr: ``>=1.4``
   :depends r-viridis: ``>=0.5.1``
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidplots/README.html