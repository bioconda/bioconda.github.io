:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenopath'
.. highlight: bash

bioconductor-phenopath
======================

.. conda:recipe:: bioconductor-phenopath
   :replaces_section_title:
   :noindex:

   Genomic trajectories with heterogeneous genetic and environmental backgrounds

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/phenopath.html
   :license: Apache License (== 2.0)
   :recipe: /`bioconductor-phenopath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenopath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenopath/meta.yaml>`_

   PhenoPath infers genomic trajectories \(pseudotimes\) in the presence of heterogeneous genetic and environmental backgrounds and tests for interactions between them.


.. conda:package:: bioconductor-phenopath

   |downloads_bioconductor-phenopath| |docker_bioconductor-phenopath|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-rcpp: ``>=0.12.8``
   :depends r-tibble: 
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

      mamba install bioconductor-phenopath

   and update with::

      mamba update bioconductor-phenopath

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phenopath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phenopath:<tag>

   (see `bioconductor-phenopath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phenopath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenopath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenopath
   :alt:   (downloads)
.. |docker_bioconductor-phenopath| image:: https://quay.io/repository/biocontainers/bioconductor-phenopath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenopath
.. _`bioconductor-phenopath/tags`: https://quay.io/repository/biocontainers/bioconductor-phenopath?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phenopath";
        var versions = ["1.26.0","1.24.0","1.22.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenopath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenopath/README.html