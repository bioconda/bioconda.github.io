:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-acde'
.. highlight: bash

bioconductor-acde
=================

.. conda:recipe:: bioconductor-acde
   :replaces_section_title:
   :noindex:

   Artificial Components Detection of Differentially Expressed Genes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/acde.html
   :license: GPL-3
   :recipe: /`bioconductor-acde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acde/meta.yaml>`_
   :links: biotools: :biotools:`acde`, doi: :doi:`10.1007/978-0-387-49317-6_9`

   This package provides a multivariate inferential analysis method for detecting differentially expressed genes in gene expression data. It uses artificial components\, close to the data\'s principal components but with an exact interpretation in terms of differential genetic expression\, to identify differentially expressed genes while controlling the false discovery rate \(FDR\). The methods on this package are described in the vignette or in the article \'Multivariate Method for Inferential Identification of Differentially Expressed Genes in Gene Expression Experiments\' by J. P. Acosta\, L. Lopez\-Kleine and S. Restrepo \(2015\, pending publication\).


.. conda:package:: bioconductor-acde

   |downloads_bioconductor-acde| |docker_bioconductor-acde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: ``>=1.3``
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

      mamba install bioconductor-acde

   and update with::

      mamba update bioconductor-acde

  To create a new environment, run::

      mamba create --name myenvname bioconductor-acde

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-acde:<tag>

   (see `bioconductor-acde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-acde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-acde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-acde
   :alt:   (downloads)
.. |docker_bioconductor-acde| image:: https://quay.io/repository/biocontainers/bioconductor-acde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-acde
.. _`bioconductor-acde/tags`: https://quay.io/repository/biocontainers/bioconductor-acde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-acde";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-acde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-acde/README.html