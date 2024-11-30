:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basic4cseq'
.. highlight: bash

bioconductor-basic4cseq
=======================

.. conda:recipe:: bioconductor-basic4cseq
   :replaces_section_title:
   :noindex:

   Basic4Cseq\: an R\/Bioconductor package for analyzing 4C\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Basic4Cseq.html
   :license: LGPL-3
   :recipe: /`bioconductor-basic4cseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basic4cseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basic4cseq/meta.yaml>`_
   :links: biotools: :biotools:`basic4cseq`, doi: :doi:`10.1093/bioinformatics/btu497`

   Basic4Cseq is an R\/Bioconductor package for basic filtering\, analysis and subsequent visualization of 4C\-seq data. Virtual fragment libraries can be created for any BSGenome package\, and filter functions for both reads and fragments and basic quality controls are included. Fragment data in the vicinity of the experiment\'s viewpoint can be visualized as a coverage plot based on a running median approach and a multi\-scale contact profile.


.. conda:package:: bioconductor-basic4cseq

   |downloads_bioconductor-basic4cseq| |docker_bioconductor-basic4cseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome.ecoli.ncbi.20080805: ``>=1.3.0,<1.4.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-catools: 
   :depends r-rcircos: 
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

      mamba install bioconductor-basic4cseq

   and update with::

      mamba update bioconductor-basic4cseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-basic4cseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basic4cseq:<tag>

   (see `bioconductor-basic4cseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basic4cseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basic4cseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basic4cseq
   :alt:   (downloads)
.. |docker_bioconductor-basic4cseq| image:: https://quay.io/repository/biocontainers/bioconductor-basic4cseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basic4cseq
.. _`bioconductor-basic4cseq/tags`: https://quay.io/repository/biocontainers/bioconductor-basic4cseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basic4cseq";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basic4cseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basic4cseq/README.html