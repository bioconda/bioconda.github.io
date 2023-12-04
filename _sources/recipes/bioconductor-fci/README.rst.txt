:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fci'
.. highlight: bash

bioconductor-fci
================

.. conda:recipe:: bioconductor-fci
   :replaces_section_title:
   :noindex:

   f\-divergence Cutoff Index for Differential Expression Analysis in Transcriptomics and Proteomics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/fCI.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fci/meta.yaml>`_

   \(f\-divergence Cutoff Index\)\, is to find DEGs in the transcriptomic \& proteomic data\, and identify DEGs by computing the difference between the distribution of fold\-changes for the control\-control and remaining \(non\-differential\) case\-control gene expression ratio data. fCI provides several advantages compared to existing methods.


.. conda:package:: bioconductor-fci

   |downloads_bioconductor-fci| |docker_bioconductor-fci|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fnn: 
   :depends r-gtools: 
   :depends r-psych: 
   :depends r-rgl: 
   :depends r-venndiagram: 
   :depends r-zoo: 
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

      mamba install bioconductor-fci

   and update with::

      mamba update bioconductor-fci

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fci

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fci:<tag>

   (see `bioconductor-fci/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fci| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fci.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fci
   :alt:   (downloads)
.. |docker_bioconductor-fci| image:: https://quay.io/repository/biocontainers/bioconductor-fci/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fci
.. _`bioconductor-fci/tags`: https://quay.io/repository/biocontainers/bioconductor-fci?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fci";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fci/README.html