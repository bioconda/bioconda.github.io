:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-atacseqqc'
.. highlight: bash

bioconductor-atacseqqc
======================

.. conda:recipe:: bioconductor-atacseqqc
   :replaces_section_title:
   :noindex:

   ATAC\-seq Quality Control

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ATACseqQC.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-atacseqqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqqc/meta.yaml>`_

   ATAC\-seq\, an assay for Transposase\-Accessible Chromatin using sequencing\, is a rapid and sensitive method for chromatin accessibility analysis. It was developed as an alternative method to MNase\-seq\, FAIRE\-seq and DNAse\-seq. Comparing to the other methods\, ATAC\-seq requires less amount of the biological samples and time to process. In the process of analyzing several ATAC\-seq dataset produced in our labs\, we learned some of the unique aspects of the quality assessment for ATAC\-seq data.To help users to quickly assess whether their ATAC\-seq experiment is successful\, we developed ATACseqQC package partially following the guideline published in Nature Method 2013 \(Greenleaf et al.\)\, including diagnostic plot of fragment size distribution\, proportion of mitochondria reads\, nucleosome positioning pattern\, and CTCF or other Transcript Factor footprints.


.. conda:package:: bioconductor-atacseqqc

   |downloads_bioconductor-atacseqqc| |docker_bioconductor-atacseqqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.4-1</code>,  <code>1.14.4-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.4-1``,  ``1.14.4-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.5-0``,  ``1.6.4-0``,  ``1.4.3-0``,  ``1.2.0-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-chippeakanno: ``>=3.36.0,<3.37.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicscores: ``>=2.14.0,<2.15.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-motifstack: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernsmooth: 
   :depends r-preseqr: 
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-atacseqqc

   and update with::

      mamba update bioconductor-atacseqqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-atacseqqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-atacseqqc:<tag>

   (see `bioconductor-atacseqqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-atacseqqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-atacseqqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-atacseqqc
   :alt:   (downloads)
.. |docker_bioconductor-atacseqqc| image:: https://quay.io/repository/biocontainers/bioconductor-atacseqqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-atacseqqc
.. _`bioconductor-atacseqqc/tags`: https://quay.io/repository/biocontainers/bioconductor-atacseqqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-atacseqqc";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-atacseqqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-atacseqqc/README.html