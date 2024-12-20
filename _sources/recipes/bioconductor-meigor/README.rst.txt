:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meigor'
.. highlight: bash

bioconductor-meigor
===================

.. conda:recipe:: bioconductor-meigor
   :replaces_section_title:
   :noindex:

   MEIGO \- MEtaheuristics for bIoinformatics Global Optimization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MEIGOR.html
   :license: GPL-3
   :recipe: /`bioconductor-meigor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meigor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meigor/meta.yaml>`_
   :links: biotools: :biotools:`meigor`, doi: :doi:`10.1186/1471-2105-15-136`

   Global Optimization


.. conda:package:: bioconductor-meigor

   |downloads_bioconductor-meigor| |docker_bioconductor-meigor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.33.0-0</code>,  <code>1.31.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.33.0-0``,  ``1.31.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cnorode: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-desolve: 
   :depends r-rsolnp: 
   :depends r-snowfall: 
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

      mamba install bioconductor-meigor

   and update with::

      mamba update bioconductor-meigor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-meigor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meigor:<tag>

   (see `bioconductor-meigor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meigor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meigor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meigor
   :alt:   (downloads)
.. |docker_bioconductor-meigor| image:: https://quay.io/repository/biocontainers/bioconductor-meigor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meigor
.. _`bioconductor-meigor/tags`: https://quay.io/repository/biocontainers/bioconductor-meigor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meigor";
        var versions = ["1.40.0","1.33.0","1.31.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meigor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meigor/README.html