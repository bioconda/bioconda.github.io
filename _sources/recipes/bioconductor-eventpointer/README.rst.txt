:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eventpointer'
.. highlight: bash

bioconductor-eventpointer
=========================

.. conda:recipe:: bioconductor-eventpointer
   :replaces_section_title:
   :noindex:

   An effective identification of alternative splicing events using junction arrays and RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EventPointer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-eventpointer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eventpointer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eventpointer/meta.yaml>`_

   EventPointer is an R package to identify alternative splicing events that involve either simple \(case\-control experiment\) or complex experimental designs such as time course experiments and studies including paired\-samples. The algorithm can be used to analyze data from either junction arrays \(Affymetrix Arrays\) or sequencing data \(RNA\-Seq\). The software returns a data.frame with the detected alternative splicing events\: gene name\, type of event \(cassette\, alternative 3\'\,...\,etc\)\, genomic position\, statistical significance and increment of the percent spliced in \(Delta PSI\) for all the events. The algorithm can generate a series of files to visualize the detected alternative splicing events in IGV. This eases the interpretation of results and the design of primers for standard PCR validation.


.. conda:package:: bioconductor-eventpointer

   |downloads_bioconductor-eventpointer| |docker_bioconductor-eventpointer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.14.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.6.0-1</code>,  <code>3.6.0-0</code>,  <code>3.2.0-2</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.0.0-0</code>,  </span></summary>
      

      ``3.14.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.4-0``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affxparser: ``>=1.78.0,<1.79.0``
   :depends bioconductor-affxparser: ``>=1.78.0,<1.79.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0a0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0a0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0a0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-sgseq: ``>=1.40.0,<1.41.0``
   :depends bioconductor-sgseq: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-tximport: ``>=1.34.0,<1.35.0``
   :depends bioconductor-tximport: ``>=1.34.0,<1.35.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-eventpointer

   and update with::

      mamba update bioconductor-eventpointer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-eventpointer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["3.14.0","3.10.0","3.8.0","3.6.0","3.6.0"];
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