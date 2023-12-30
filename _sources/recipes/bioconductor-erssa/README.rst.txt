:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-erssa'
.. highlight: bash

bioconductor-erssa
==================

.. conda:recipe:: bioconductor-erssa
   :replaces_section_title:
   :noindex:

   Empirical RNA\-seq Sample Size Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ERSSA.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-erssa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erssa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erssa/meta.yaml>`_

   The ERSSA package takes user supplied RNA\-seq differential expression dataset and calculates the number of differentially expressed genes at varying biological replicate levels. This allows the user to determine\, without relying on any a priori assumptions\, whether sufficient differential detection has been acheived with their RNA\-seq dataset.


.. conda:package:: bioconductor-erssa

   |downloads_bioconductor-erssa| |docker_bioconductor-erssa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-apeglm: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-plyr: ``>=1.8.4``
   :depends r-rcolorbrewer: ``>=1.1-2``
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

      mamba install bioconductor-erssa

   and update with::

      mamba update bioconductor-erssa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-erssa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-erssa:<tag>

   (see `bioconductor-erssa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-erssa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-erssa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-erssa
   :alt:   (downloads)
.. |docker_bioconductor-erssa| image:: https://quay.io/repository/biocontainers/bioconductor-erssa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-erssa
.. _`bioconductor-erssa/tags`: https://quay.io/repository/biocontainers/bioconductor-erssa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-erssa";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-erssa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-erssa/README.html