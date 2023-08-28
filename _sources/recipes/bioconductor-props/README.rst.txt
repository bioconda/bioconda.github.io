:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-props'
.. highlight: bash

bioconductor-props
==================

.. conda:recipe:: bioconductor-props
   :replaces_section_title:
   :noindex:

   PRObabilistic Pathway Score \(PROPS\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PROPS.html
   :license: GPL-2
   :recipe: /`bioconductor-props <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-props>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-props/meta.yaml>`_

   This package calculates probabilistic pathway scores using gene expression data. Gene expression values are aggregated into pathway\-based scores using Bayesian network representations of biological pathways.


.. conda:package:: bioconductor-props

   |downloads_bioconductor-props| |docker_bioconductor-props|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bnlearn: 
   :depends r-reshape2: 
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

      mamba install bioconductor-props

   and update with::

      mamba update bioconductor-props

  To create a new environment, run::

      mamba create --name myenvname bioconductor-props

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-props:<tag>

   (see `bioconductor-props/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-props| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-props.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-props
   :alt:   (downloads)
.. |docker_bioconductor-props| image:: https://quay.io/repository/biocontainers/bioconductor-props/status
   :target: https://quay.io/repository/biocontainers/bioconductor-props
.. _`bioconductor-props/tags`: https://quay.io/repository/biocontainers/bioconductor-props?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-props";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-props/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-props/README.html