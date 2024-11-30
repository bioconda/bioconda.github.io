:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proper'
.. highlight: bash

bioconductor-proper
===================

.. conda:recipe:: bioconductor-proper
   :replaces_section_title:
   :noindex:

   PROspective Power Evaluation for RNAseq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PROPER.html
   :license: GPL
   :recipe: /`bioconductor-proper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proper/meta.yaml>`_
   :links: biotools: :biotools:`proper`

   This package provide simulation based methods for evaluating the statistical power in differential expression analysis from RNA\-seq data.


.. conda:package:: bioconductor-proper

   |downloads_bioconductor-proper| |docker_bioconductor-proper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-proper

   and update with::

      mamba update bioconductor-proper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-proper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proper:<tag>

   (see `bioconductor-proper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proper
   :alt:   (downloads)
.. |docker_bioconductor-proper| image:: https://quay.io/repository/biocontainers/bioconductor-proper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proper
.. _`bioconductor-proper/tags`: https://quay.io/repository/biocontainers/bioconductor-proper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proper";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proper/README.html