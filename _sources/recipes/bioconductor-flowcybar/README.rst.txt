:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcybar'
.. highlight: bash

bioconductor-flowcybar
======================

.. conda:recipe:: bioconductor-flowcybar
   :replaces_section_title:
   :noindex:

   Analyze flow cytometric data using gate information

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/flowCyBar.html
   :license: GPL-2
   :recipe: /`bioconductor-flowcybar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcybar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcybar/meta.yaml>`_

   A package to analyze flow cytometric data using gate information to follow population\/community dynamics


.. conda:package:: bioconductor-flowcybar

   |downloads_bioconductor-flowcybar| |docker_bioconductor-flowcybar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-vegan: 
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

      mamba install bioconductor-flowcybar

   and update with::

      mamba update bioconductor-flowcybar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowcybar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcybar:<tag>

   (see `bioconductor-flowcybar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcybar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcybar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcybar
   :alt:   (downloads)
.. |docker_bioconductor-flowcybar| image:: https://quay.io/repository/biocontainers/bioconductor-flowcybar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcybar
.. _`bioconductor-flowcybar/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcybar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowcybar";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcybar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcybar/README.html