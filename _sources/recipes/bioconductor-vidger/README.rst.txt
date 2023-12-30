:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vidger'
.. highlight: bash

bioconductor-vidger
===================

.. conda:recipe:: bioconductor-vidger
   :replaces_section_title:
   :noindex:

   Create rapid visualizations of RNAseq data in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/vidger.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-vidger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vidger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vidger/meta.yaml>`_

   The aim of vidger is to rapidly generate information\-rich visualizations for the interpretation of differential gene expression results from three widely\-used tools\: Cuffdiff\, DESeq2\, and edgeR.


.. conda:package:: bioconductor-vidger

   |downloads_bioconductor-vidger| |docker_bioconductor-vidger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-knitr: 
   :depends r-rcolorbrewer: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-tidyr: 
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

      mamba install bioconductor-vidger

   and update with::

      mamba update bioconductor-vidger

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vidger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vidger:<tag>

   (see `bioconductor-vidger/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vidger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vidger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vidger
   :alt:   (downloads)
.. |docker_bioconductor-vidger| image:: https://quay.io/repository/biocontainers/bioconductor-vidger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vidger
.. _`bioconductor-vidger/tags`: https://quay.io/repository/biocontainers/bioconductor-vidger?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vidger";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vidger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vidger/README.html