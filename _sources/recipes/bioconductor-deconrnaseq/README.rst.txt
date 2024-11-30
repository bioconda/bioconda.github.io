:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deconrnaseq'
.. highlight: bash

bioconductor-deconrnaseq
========================

.. conda:recipe:: bioconductor-deconrnaseq
   :replaces_section_title:
   :noindex:

   Deconvolution of Heterogeneous Tissue Samples for mRNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DeconRNASeq.html
   :license: GPL-2
   :recipe: /`bioconductor-deconrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconrnaseq/meta.yaml>`_

   DeconSeq is an R package for deconvolution of heterogeneous tissues based on mRNA\-Seq data. It modeled expression levels from heterogeneous cell populations in mRNA\-Seq as the weighted average of expression from different constituting cell types and predicted cell type proportions of single expression profiles.


.. conda:package:: bioconductor-deconrnaseq

   |downloads_bioconductor-deconrnaseq| |docker_bioconductor-deconrnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-limsolve: 
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

      mamba install bioconductor-deconrnaseq

   and update with::

      mamba update bioconductor-deconrnaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deconrnaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deconrnaseq:<tag>

   (see `bioconductor-deconrnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deconrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deconrnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deconrnaseq
   :alt:   (downloads)
.. |docker_bioconductor-deconrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-deconrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deconrnaseq
.. _`bioconductor-deconrnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-deconrnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deconrnaseq";
        var versions = ["1.44.0","1.42.0","1.40.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deconrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deconrnaseq/README.html