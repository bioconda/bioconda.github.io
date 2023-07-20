:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eventpointer'
.. highlight: bash

bioconductor-eventpointer
=========================

.. conda:recipe:: bioconductor-eventpointer
   :replaces_section_title:
   :noindex:

   An effective identification of alternative splicing events using junction arrays and RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/EventPointer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-eventpointer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eventpointer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eventpointer/meta.yaml>`_

   EventPointer is an R package to identify alternative splicing events that involve either simple \(case\-control experiment\) or complex experimental designs such as time course experiments and studies including paired\-samples. The algorithm can be used to analyze data from either junction arrays \(Affymetrix Arrays\) or sequencing data \(RNA\-Seq\). The software returns a data.frame with the detected alternative splicing events\: gene name\, type of event \(cassette\, alternative 3\'\,...\,etc\)\, genomic position\, statistical significance and increment of the percent spliced in \(Delta PSI\) for all the events. The algorithm can generate a series of files to visualize the detected alternative splicing events in IGV. This eases the interpretation of results and the design of primers for standard PCR validation.


.. conda:package:: bioconductor-eventpointer

   |downloads_bioconductor-eventpointer| |docker_bioconductor-eventpointer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8.0-0</code>,  <code>3.6.0-1</code>,  <code>3.6.0-0</code>,  <code>3.2.0-2</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.0.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``3.8.0-0``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.4-0``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affxparser: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-fgsea: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rbgl: ``>=1.76.0,<1.77.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-sgseq: ``>=1.34.0,<1.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-tximport: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cobs: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-glmnet: 
   :depends r-igraph: 
   :depends r-iterators: 
   :depends r-lpsolve: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nnls: 
   :depends r-poibin: 
   :depends r-prodlim: 
   :depends r-speedglm: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eventpointer

   and update with::

      conda update bioconductor-eventpointer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eventpointer:<tag>

   (see `bioconductor-eventpointer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eventpointer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eventpointer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eventpointer
   :alt:   (downloads)
.. |docker_bioconductor-eventpointer| image:: https://quay.io/repository/biocontainers/bioconductor-eventpointer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eventpointer
.. _`bioconductor-eventpointer/tags`: https://quay.io/repository/biocontainers/bioconductor-eventpointer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eventpointer";
        var versions = ["3.8.0","3.6.0","3.6.0","3.2.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eventpointer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eventpointer/README.html