:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-r3cseq'
.. highlight: bash

bioconductor-r3cseq
===================

.. conda:recipe:: bioconductor-r3cseq
   :replaces_section_title:
   :noindex:

   Analysis of Chromosome Conformation Capture and Next\-generation Sequencing \(3C\-seq\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/r3Cseq.html
   :license: GPL-3
   :recipe: /`bioconductor-r3cseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cseq/meta.yaml>`_
   :links: biotools: :biotools:`r3cseq`, doi: :doi:`10.1093/nar/gkt373`

   This package is used for the analysis of long\-range chromatin interactions from 3C\-seq assay.


.. conda:package:: bioconductor-r3cseq

   |downloads_bioconductor-r3cseq| |docker_bioconductor-r3cseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-rcolorbrewer: 
   :depends r-sqldf: 
   :depends r-vgam: 
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

      mamba install bioconductor-r3cseq

   and update with::

      mamba update bioconductor-r3cseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-r3cseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-r3cseq:<tag>

   (see `bioconductor-r3cseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-r3cseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r3cseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-r3cseq
   :alt:   (downloads)
.. |docker_bioconductor-r3cseq| image:: https://quay.io/repository/biocontainers/bioconductor-r3cseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r3cseq
.. _`bioconductor-r3cseq/tags`: https://quay.io/repository/biocontainers/bioconductor-r3cseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-r3cseq";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r3cseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r3cseq/README.html