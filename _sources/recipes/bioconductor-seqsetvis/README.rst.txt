:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqsetvis'
.. highlight: bash

bioconductor-seqsetvis
======================

.. conda:recipe:: bioconductor-seqsetvis
   :replaces_section_title:
   :noindex:

   Set Based Visualizations for Next\-Gen Sequencing Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seqsetvis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-seqsetvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsetvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsetvis/meta.yaml>`_

   seqsetvis enables the visualization and analysis of sets of genomic sites in next gen sequencing data. Although seqsetvis was designed for the comparison of mulitple ChIP\-seq samples\, this package is domain\-agnostic and allows the processing of multiple genomic coordinate files \(bed\-like files\) and signal files \(bigwig files pileups from bam file\).


.. conda:package:: bioconductor-seqsetvis

   |downloads_bioconductor-seqsetvis| |docker_bioconductor-seqsetvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-eulerr: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-pbapply: 
   :depends r-pbmcapply: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-upsetr: 
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

      mamba install bioconductor-seqsetvis

   and update with::

      mamba update bioconductor-seqsetvis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqsetvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqsetvis:<tag>

   (see `bioconductor-seqsetvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqsetvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqsetvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqsetvis
   :alt:   (downloads)
.. |docker_bioconductor-seqsetvis| image:: https://quay.io/repository/biocontainers/bioconductor-seqsetvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqsetvis
.. _`bioconductor-seqsetvis/tags`: https://quay.io/repository/biocontainers/bioconductor-seqsetvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqsetvis";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqsetvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqsetvis/README.html