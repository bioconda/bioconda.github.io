:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breakpointr'
.. highlight: bash

bioconductor-breakpointr
========================

.. conda:recipe:: bioconductor-breakpointr
   :replaces_section_title:
   :noindex:

   Find breakpoints in Strand\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/breakpointR.html
   :license: file LICENSE
   :recipe: /`bioconductor-breakpointr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointr/meta.yaml>`_

   This package implements functions for finding breakpoints\, plotting and export of Strand\-seq data.


.. conda:package:: bioconductor-breakpointr

   |downloads_bioconductor-breakpointr| |docker_bioconductor-breakpointr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-breakpointrdata: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gtools: 
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

      mamba install bioconductor-breakpointr

   and update with::

      mamba update bioconductor-breakpointr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-breakpointr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breakpointr:<tag>

   (see `bioconductor-breakpointr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breakpointr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breakpointr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-breakpointr
   :alt:   (downloads)
.. |docker_bioconductor-breakpointr| image:: https://quay.io/repository/biocontainers/bioconductor-breakpointr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breakpointr
.. _`bioconductor-breakpointr/tags`: https://quay.io/repository/biocontainers/bioconductor-breakpointr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-breakpointr";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breakpointr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breakpointr/README.html