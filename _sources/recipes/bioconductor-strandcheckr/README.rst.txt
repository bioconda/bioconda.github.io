:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-strandcheckr'
.. highlight: bash

bioconductor-strandcheckr
=========================

.. conda:recipe:: bioconductor-strandcheckr
   :replaces_section_title:
   :noindex:

   Calculate strandness information of a bam file

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/strandCheckR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-strandcheckr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-strandcheckr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-strandcheckr/meta.yaml>`_

   This package aims to quantify and remove putative double strand DNA from a strand\-specific RNA sample. There are also options and methods to plot the positive\/negative proportions of all sliding windows\, which allow users to have an idea of how much the sample was contaminated and the appropriate threshold to be used for filtering.


.. conda:package:: bioconductor-strandcheckr

   |downloads_bioconductor-strandcheckr| |docker_bioconductor-strandcheckr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-strandcheckr

   and update with::

      mamba update bioconductor-strandcheckr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-strandcheckr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-strandcheckr:<tag>

   (see `bioconductor-strandcheckr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-strandcheckr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-strandcheckr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-strandcheckr
   :alt:   (downloads)
.. |docker_bioconductor-strandcheckr| image:: https://quay.io/repository/biocontainers/bioconductor-strandcheckr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-strandcheckr
.. _`bioconductor-strandcheckr/tags`: https://quay.io/repository/biocontainers/bioconductor-strandcheckr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-strandcheckr";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-strandcheckr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-strandcheckr/README.html