:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowchic'
.. highlight: bash

bioconductor-flowchic
=====================

.. conda:recipe:: bioconductor-flowchic
   :replaces_section_title:
   :noindex:

   Analyze flow cytometric data using histogram information

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/flowCHIC.html
   :license: GPL-2
   :recipe: /`bioconductor-flowchic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowchic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowchic/meta.yaml>`_

   A package to analyze flow cytometric data of complex microbial communities based on histogram images


.. conda:package:: bioconductor-flowchic

   |downloads_bioconductor-flowchic| |docker_bioconductor-flowchic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-vegan: 
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

      mamba install bioconductor-flowchic

   and update with::

      mamba update bioconductor-flowchic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowchic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowchic:<tag>

   (see `bioconductor-flowchic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowchic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowchic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowchic
   :alt:   (downloads)
.. |docker_bioconductor-flowchic| image:: https://quay.io/repository/biocontainers/bioconductor-flowchic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowchic
.. _`bioconductor-flowchic/tags`: https://quay.io/repository/biocontainers/bioconductor-flowchic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowchic";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowchic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowchic/README.html