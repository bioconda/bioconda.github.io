:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapid'
.. highlight: bash

rapid
=====

.. conda:recipe:: rapid
   :replaces_section_title:
   :noindex:

   Read Alignment\, Analysis\, and Differential Pipeline \(RAPID\) is a set of tools for the alignment\, and analysis of genomic regions with small RNA clusters derived from small RNA sequencing data.

   :homepage: https://github.com/SchulzLab/RAPID
   :license: GPL2
   :recipe: /`rapid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapid/meta.yaml>`_

   


.. conda:package:: rapid

   |downloads_rapid| |docker_rapid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.8-4</code>,  <code>0.8-3</code>,  <code>0.8-2</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-0</code>,  <code>0.6-0</code>,  </span></summary>
      

      ``1.0-1``,  ``1.0-0``,  ``0.8-4``,  ``0.8-3``,  ``0.8-2``,  ``0.8-1``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-1``,  ``0.4-0``,  ``0.3-0``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``2.23.0``
   :depends bioconductor-deseq2: 
   :depends bowtie2: ``2.3.0``
   :depends pandoc: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-viridis: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rapid

   and update with::

      conda update rapid

   or use the docker container::

      docker pull quay.io/biocontainers/rapid:<tag>

   (see `rapid/tags`_ for valid values for ``<tag>``)


.. |downloads_rapid| image:: https://img.shields.io/conda/dn/bioconda/rapid.svg?style=flat
   :target: https://anaconda.org/bioconda/rapid
   :alt:   (downloads)
.. |docker_rapid| image:: https://quay.io/repository/biocontainers/rapid/status
   :target: https://quay.io/repository/biocontainers/rapid
.. _`rapid/tags`: https://quay.io/repository/biocontainers/rapid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapid/README.html