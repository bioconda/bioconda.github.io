:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basilisk'
.. highlight: bash

bioconductor-basilisk
=====================

.. conda:recipe:: bioconductor-basilisk
   :replaces_section_title:
   :noindex:

   Freezing Python Dependencies Inside Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/basilisk.html
   :license: GPL-3
   :recipe: /`bioconductor-basilisk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basilisk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basilisk/meta.yaml>`_

   Installs a self\-contained conda instance that is managed by the R\/Bioconductor installation machinery. This aims to provide a consistent Python environment that can be used reliably by Bioconductor packages. Functions are also provided to enable smooth interoperability of multiple Python environments in a single R session.


.. conda:package:: bioconductor-basilisk

   |downloads_bioconductor-basilisk| |docker_bioconductor-basilisk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.1-0</code>,  <code>1.10.2-0</code>,  <code>1.9.12-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.1-0``,  ``1.12.1-0``,  ``1.10.2-0``,  ``1.9.12-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-basilisk.utils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-dir.expiry: ``>=1.14.0,<1.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-reticulate: 
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

      mamba install bioconductor-basilisk

   and update with::

      mamba update bioconductor-basilisk

  To create a new environment, run::

      mamba create --name myenvname bioconductor-basilisk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basilisk:<tag>

   (see `bioconductor-basilisk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basilisk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basilisk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basilisk
   :alt:   (downloads)
.. |docker_bioconductor-basilisk| image:: https://quay.io/repository/biocontainers/bioconductor-basilisk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basilisk
.. _`bioconductor-basilisk/tags`: https://quay.io/repository/biocontainers/bioconductor-basilisk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basilisk";
        var versions = ["1.18.0","1.14.1","1.12.1","1.10.2","1.9.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basilisk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basilisk/README.html