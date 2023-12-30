:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-profileplyr'
.. highlight: bash

bioconductor-profileplyr
========================

.. conda:recipe:: bioconductor-profileplyr
   :replaces_section_title:
   :noindex:

   Visualization and annotation of read signal over genomic ranges with profileplyr

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/profileplyr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-profileplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-profileplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-profileplyr/meta.yaml>`_

   Quick and straightforward visualization of read signal over genomic intervals is key for generating hypotheses from sequencing data sets \(e.g. ChIP\-seq\, ATAC\-seq\, bisulfite\/methyl\-seq\). Many tools both inside and outside of R and Bioconductor are available to explore these types of data\, and they typically start with a bigWig or BAM file and end with some representation of the signal \(e.g. heatmap\). profileplyr leverages many Bioconductor tools to allow for both flexibility and additional functionality in workflows that end with visualization of the read signal.


.. conda:package:: bioconductor-profileplyr

   |downloads_bioconductor-profileplyr| |docker_bioconductor-profileplyr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.3-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-chipseeker: ``>=1.38.0,<1.39.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-enrichedheatmap: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rgreat: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-soggi: ``>=1.34.0,<1.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.18.0,<3.19.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm10.knowngene: ``>=3.10.0,<3.11.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-r.utils: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :depends r-tiff: 
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

      mamba install bioconductor-profileplyr

   and update with::

      mamba update bioconductor-profileplyr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-profileplyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-profileplyr:<tag>

   (see `bioconductor-profileplyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-profileplyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-profileplyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-profileplyr
   :alt:   (downloads)
.. |docker_bioconductor-profileplyr| image:: https://quay.io/repository/biocontainers/bioconductor-profileplyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-profileplyr
.. _`bioconductor-profileplyr/tags`: https://quay.io/repository/biocontainers/bioconductor-profileplyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-profileplyr";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-profileplyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-profileplyr/README.html