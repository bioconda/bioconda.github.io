:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylmix'
.. highlight: bash

bioconductor-methylmix
======================

.. conda:recipe:: bioconductor-methylmix
   :replaces_section_title:
   :noindex:

   MethylMix\: Identifying methylation driven cancer genes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MethylMix.html
   :license: GPL-2
   :recipe: /`bioconductor-methylmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmix/meta.yaml>`_

   MethylMix is an algorithm implemented to identify hyper and hypomethylated genes for a disease. MethylMix is based on a beta mixture model to identify methylation states and compares them with the normal DNA methylation state. MethylMix uses a novel statistic\, the Differential Methylation value or DM\-value defined as the difference of a methylation state with the normal methylation state. Finally\, matched gene expression data is used to identify\, besides differential\, functional methylation states by focusing on methylation changes that effect gene expression. References\: Gevaert 0. MethylMix\: an R package for identifying DNA methylation\-driven genes. Bioinformatics \(Oxford\, England\). 2015\;31\(11\)\:1839\-41. doi\:10.1093\/bioinformatics\/btv020. Gevaert O\, Tibshirani R\, Plevritis SK. Pancancer analysis of DNA methylation\-driven genes using MethylMix. Genome Biology. 2015\;16\(1\)\:17. doi\:10.1186\/s13059\-014\-0579\-8.


.. conda:package:: bioconductor-methylmix

   |downloads_bioconductor-methylmix| |docker_bioconductor-methylmix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-r.matlab: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-rpmm: 
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

      mamba install bioconductor-methylmix

   and update with::

      mamba update bioconductor-methylmix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylmix:<tag>

   (see `bioconductor-methylmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylmix
   :alt:   (downloads)
.. |docker_bioconductor-methylmix| image:: https://quay.io/repository/biocontainers/bioconductor-methylmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylmix
.. _`bioconductor-methylmix/tags`: https://quay.io/repository/biocontainers/bioconductor-methylmix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylmix";
        var versions = ["2.32.0","2.30.0","2.28.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylmix/README.html