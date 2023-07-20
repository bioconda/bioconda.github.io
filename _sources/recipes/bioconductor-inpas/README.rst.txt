:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inpas'
.. highlight: bash

bioconductor-inpas
==================

.. conda:recipe:: bioconductor-inpas
   :replaces_section_title:
   :noindex:

   Identify Novel Alternative PolyAdenylation Sites \(PAS\) from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/InPAS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-inpas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpas/meta.yaml>`_

   Alternative polyadenylation \(APA\) is one of the important post\- transcriptional regulation mechanisms which occurs in most human genes. InPAS facilitates the discovery of novel APA sites and the differential usage of APA sites from RNA\-Seq data. It leverages cleanUpdTSeq to fine tune identified APA sites by removing false sites.


.. conda:package:: bioconductor-inpas

   |downloads_bioconductor-inpas| |docker_bioconductor-inpas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.3-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.3-0``,  ``1.14.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-cleanupdtseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-plyranges: ``>=1.20.0,<1.21.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-batchtools: 
   :depends r-depmixs4: 
   :depends r-dplyr: 
   :depends r-flock: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-parallelly: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-inpas

   and update with::

      conda update bioconductor-inpas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inpas:<tag>

   (see `bioconductor-inpas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inpas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inpas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inpas
   :alt:   (downloads)
.. |docker_bioconductor-inpas| image:: https://quay.io/repository/biocontainers/bioconductor-inpas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inpas
.. _`bioconductor-inpas/tags`: https://quay.io/repository/biocontainers/bioconductor-inpas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-inpas";
        var versions = ["2.8.0","2.6.0","2.2.0","2.0.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inpas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inpas/README.html