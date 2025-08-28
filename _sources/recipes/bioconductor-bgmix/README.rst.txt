:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgmix'
.. highlight: bash

bioconductor-bgmix
==================

.. conda:recipe:: bioconductor-bgmix
   :replaces_section_title:
   :noindex:

   Bayesian models for differential gene expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BGmix.html
   :license: GPL-2
   :recipe: /`bioconductor-bgmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgmix/meta.yaml>`_
   :links: biotools: :biotools:`bgmix`, doi: :doi:`10.2202/1544-6115.1314`

   Fully Bayesian mixture models for differential gene expression


.. conda:package:: bioconductor-bgmix

   |downloads_bioconductor-bgmix| |docker_bioconductor-bgmix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.59.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.54.0-2</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-2</code>,  </span></summary>
      

      ``1.59.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.54.0-2``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernsmooth: 
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

      mamba install bioconductor-bgmix

   and update with::

      mamba update bioconductor-bgmix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bgmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bgmix:<tag>

   (see `bioconductor-bgmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bgmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bgmix
   :alt:   (downloads)
.. |docker_bioconductor-bgmix| image:: https://quay.io/repository/biocontainers/bioconductor-bgmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgmix
.. _`bioconductor-bgmix/tags`: https://quay.io/repository/biocontainers/bioconductor-bgmix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bgmix";
        var versions = ["1.59.0","1.58.0","1.58.0","1.58.0","1.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgmix/README.html