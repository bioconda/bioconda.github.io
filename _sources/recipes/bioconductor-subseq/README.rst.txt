:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-subseq'
.. highlight: bash

bioconductor-subseq
===================

.. conda:recipe:: bioconductor-subseq
   :replaces_section_title:
   :noindex:

   Subsampling of high\-throughput sequencing count data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/subSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-subseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subseq/meta.yaml>`_
   :links: biotools: :biotools:`subseq`, doi: :doi:`10.1093/bioinformatics/btu552`

   Subsampling of high throughput sequencing count data for use in experiment design and analysis.


.. conda:package:: bioconductor-subseq

   |downloads_bioconductor-subseq| |docker_bioconductor-subseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-subseq

   and update with::

      mamba update bioconductor-subseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-subseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-subseq:<tag>

   (see `bioconductor-subseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-subseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-subseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-subseq
   :alt:   (downloads)
.. |docker_bioconductor-subseq| image:: https://quay.io/repository/biocontainers/bioconductor-subseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-subseq
.. _`bioconductor-subseq/tags`: https://quay.io/repository/biocontainers/bioconductor-subseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-subseq";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-subseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-subseq/README.html