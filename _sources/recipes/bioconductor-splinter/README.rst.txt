:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splinter'
.. highlight: bash

bioconductor-splinter
=====================

.. conda:recipe:: bioconductor-splinter
   :replaces_section_title:
   :noindex:

   Splice Interpreter of Transcripts

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SPLINTER.html
   :license: GPL-2
   :recipe: /`bioconductor-splinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinter/meta.yaml>`_
   :links: biotools: :biotools:`splinter`, doi: :doi:`10.1038/nmeth.3252`

   Provides tools to analyze alternative splicing sites\, interpret outcomes based on sequence information\, select and design primers for site validiation and give visual representation of the event to guide downstream experiments.


.. conda:package:: bioconductor-splinter

   |downloads_bioconductor-splinter| |docker_bioconductor-splinter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm9: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-seqlogo: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-googlevis: 
   :depends r-plyr: 
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

      mamba install bioconductor-splinter

   and update with::

      mamba update bioconductor-splinter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-splinter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splinter:<tag>

   (see `bioconductor-splinter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splinter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splinter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splinter
   :alt:   (downloads)
.. |docker_bioconductor-splinter| image:: https://quay.io/repository/biocontainers/bioconductor-splinter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splinter
.. _`bioconductor-splinter/tags`: https://quay.io/repository/biocontainers/bioconductor-splinter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splinter";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splinter/README.html