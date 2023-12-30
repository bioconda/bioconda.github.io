:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genvisr'
.. highlight: bash

bioconductor-genvisr
====================

.. conda:recipe:: bioconductor-genvisr
   :replaces_section_title:
   :noindex:

   Genomic Visualizations in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GenVisR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-genvisr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr/meta.yaml>`_
   :links: biotools: :biotools:`genvisr`

   Produce highly customizable publication quality graphics for genomic data primarily at the cohort level.


.. conda:package:: bioconductor-genvisr

   |downloads_bioconductor-genvisr| |docker_bioconductor-genvisr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.31.1-0</code>,  <code>1.29.3-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.31.1-0``,  ``1.29.3-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-1``,  ``1.14.2-0``,  ``1.14.1-1``,  ``1.14.1-0``,  ``1.12.1-0``,  ``1.8.0-0``,  ``1.6.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-gridextra: ``>=2.0.0``
   :depends r-gtable: 
   :depends r-gtools: 
   :depends r-plyr: ``>=1.8.3``
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-viridis: 
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

      mamba install bioconductor-genvisr

   and update with::

      mamba update bioconductor-genvisr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genvisr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genvisr:<tag>

   (see `bioconductor-genvisr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genvisr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genvisr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genvisr
   :alt:   (downloads)
.. |docker_bioconductor-genvisr| image:: https://quay.io/repository/biocontainers/bioconductor-genvisr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genvisr
.. _`bioconductor-genvisr/tags`: https://quay.io/repository/biocontainers/bioconductor-genvisr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genvisr";
        var versions = ["1.34.0","1.31.1","1.29.3","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genvisr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genvisr/README.html