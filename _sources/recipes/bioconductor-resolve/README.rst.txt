:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-resolve'
.. highlight: bash

bioconductor-resolve
====================

.. conda:recipe:: bioconductor-resolve
   :replaces_section_title:
   :noindex:

   RESOLVE\: An R package for the efficient analysis of mutational signatures from cancer genomes

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RESOLVE.html
   :license: file LICENSE
   :recipe: /`bioconductor-resolve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-resolve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-resolve/meta.yaml>`_

   Cancer is a genetic disease caused by somatic mutations in genes controlling key biological functions such as cellular growth and division. Such mutations may arise both through cell\-intrinsic and exogenous processes\, generating characteristic mutational patterns over the genome named mutational signatures. The study of mutational signatures have become a standard component of modern genomics studies\, since it can reveal which \(environmental and endogenous\) mutagenic processes are active in a tumor\, and may highlight markers for therapeutic response. Mutational signatures computational analysis presents many pitfalls. First\, the task of determining the number of signatures is very complex and depends on heuristics. Second\, several signatures have no clear etiology\, casting doubt on them being computational artifacts rather than due to mutagenic processes. Last\, approaches for signatures assignment are greatly influenced by the set of signatures used for the analysis. To overcome these limitations\, we developed RESOLVE \(Robust EStimation Of mutationaL signatures Via rEgularization\)\, a framework that allows the efficient extraction and assignment of mutational signatures. RESOLVE implements a novel algorithm that enables \(i\) the efficient extraction\, \(ii\) exposure estimation\, and \(iii\) confidence assessment during the computational inference of mutational signatures.


.. conda:package:: bioconductor-resolve

   |downloads_bioconductor-resolve| |docker_bioconductor-resolve|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-bsgenome.hsapiens.1000genomes.hs37d5: ``>=0.99.0,<0.100.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gridextra: 
   :depends r-lsa: 
   :depends r-nmf: 
   :depends r-nnls: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-resolve

   and update with::

      conda update bioconductor-resolve

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-resolve:<tag>

   (see `bioconductor-resolve/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-resolve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-resolve.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-resolve
   :alt:   (downloads)
.. |docker_bioconductor-resolve| image:: https://quay.io/repository/biocontainers/bioconductor-resolve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-resolve
.. _`bioconductor-resolve/tags`: https://quay.io/repository/biocontainers/bioconductor-resolve?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-resolve";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-resolve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-resolve/README.html