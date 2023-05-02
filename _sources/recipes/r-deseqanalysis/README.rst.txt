:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-deseqanalysis'
.. highlight: bash

r-deseqanalysis
===============

.. conda:recipe:: r-deseqanalysis
   :replaces_section_title:
   :noindex:

   Toolkit for performing differential expression with DESeq2.

   :homepage: https://r.acidgenomics.com/packages/deseqanalysis/
   :developer docs: https://github.com/acidgenomics/r-deseqanalysis
   :license: GPL / AGPL-3.0
   :recipe: /`r-deseqanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deseqanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deseqanalysis/meta.yaml>`_

   


.. conda:package:: r-deseqanalysis

   |downloads_r-deseqanalysis| |docker_r-deseqanalysis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.8-0</code>,  <code>0.6.7-1</code>,  <code>0.6.7-0</code>,  <code>0.6.6-1</code>,  <code>0.6.6-0</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  </span></summary>
      

      ``0.6.8-0``,  ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.3.10-2``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.20-1``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-1``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-apeglm: ``>=1.20.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0``
   :depends bioconductor-deseq2: ``>=1.38.0``
   :depends bioconductor-iranges: ``>=2.32.0``
   :depends bioconductor-s4vectors: ``>=0.36.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0``
   :depends bioconductor-tximport: ``>=1.26.0``
   :depends r-acidbase: ``>=0.6.15``
   :depends r-acidcli: ``>=0.2.7``
   :depends r-acidexperiment: ``>=0.4.7``
   :depends r-acidgenerics: ``>=0.6.7``
   :depends r-acidgenomes: ``>=0.5.0``
   :depends r-acidmarkdown: ``>=0.2.5``
   :depends r-acidplots: ``>=0.5.5``
   :depends r-acidplyr: ``>=0.3.10``
   :depends r-ashr: ``>=2.2.54``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-basejump: ``>=0.16.5``
   :depends r-ggplot2: ``>=3.4.2``
   :depends r-goalie: ``>=0.6.9``
   :depends r-knitr: ``>=1.42``
   :depends r-pipette: ``>=0.10.9``
   :depends r-rmarkdown: ``>=2.21``
   :depends r-stringi: ``>=1.7.12``
   :depends r-syntactic: ``>=0.6.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-deseqanalysis

   and update with::

      conda update r-deseqanalysis

   or use the docker container::

      docker pull quay.io/biocontainers/r-deseqanalysis:<tag>

   (see `r-deseqanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_r-deseqanalysis| image:: https://img.shields.io/conda/dn/bioconda/r-deseqanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/r-deseqanalysis
   :alt:   (downloads)
.. |docker_r-deseqanalysis| image:: https://quay.io/repository/biocontainers/r-deseqanalysis/status
   :target: https://quay.io/repository/biocontainers/r-deseqanalysis
.. _`r-deseqanalysis/tags`: https://quay.io/repository/biocontainers/r-deseqanalysis?tab=tags


.. raw:: html

    <script>
        var package = "r-deseqanalysis";
        var versions = ["0.6.8","0.6.7","0.6.7","0.6.6","0.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deseqanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deseqanalysis/README.html