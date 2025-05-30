:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bearscc'
.. highlight: bash

bioconductor-bearscc
====================

.. conda:recipe:: bioconductor-bearscc
   :replaces_section_title:
   :noindex:

   BEARscc \(Bayesian ERCC Assesstment of Robustness of Single Cell Clusters\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BEARscc.html
   :license: GPL-3
   :recipe: /`bioconductor-bearscc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bearscc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bearscc/meta.yaml>`_

   BEARscc is a noise estimation and injection tool that is designed to assess putative single\-cell RNA\-seq clusters in the context of experimental noise estimated by ERCC spike\-in controls.


.. conda:package:: bioconductor-bearscc

   |downloads_bioconductor-bearscc| |docker_bioconductor-bearscc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-bearscc

   and update with::

      mamba update bioconductor-bearscc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bearscc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bearscc:<tag>

   (see `bioconductor-bearscc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bearscc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bearscc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bearscc
   :alt:   (downloads)
.. |docker_bioconductor-bearscc| image:: https://quay.io/repository/biocontainers/bioconductor-bearscc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bearscc
.. _`bioconductor-bearscc/tags`: https://quay.io/repository/biocontainers/bioconductor-bearscc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bearscc";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bearscc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bearscc/README.html