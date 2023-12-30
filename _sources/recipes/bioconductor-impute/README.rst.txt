:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-impute'
.. highlight: bash

bioconductor-impute
===================

.. conda:recipe:: bioconductor-impute
   :replaces_section_title:
   :noindex:

   impute\: Imputation for microarray data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/impute.html
   :license: GPL-2
   :recipe: /`bioconductor-impute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impute/meta.yaml>`_
   :links: biotools: :biotools:`impute`, doi: :doi:`10.1007/978-3-642-57489-4_7`

   Imputation for microarray data \(currently KNN only\)


.. conda:package:: bioconductor-impute

   |downloads_bioconductor-impute| |docker_bioconductor-impute|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.74.1-0</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.68.0-2</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  </span></summary>
      

      ``1.76.0-1``,  ``1.76.0-0``,  ``1.74.1-0``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.68.0-2``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.1-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-impute

   and update with::

      mamba update bioconductor-impute

  To create a new environment, run::

      mamba create --name myenvname bioconductor-impute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-impute:<tag>

   (see `bioconductor-impute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-impute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-impute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-impute
   :alt:   (downloads)
.. |docker_bioconductor-impute| image:: https://quay.io/repository/biocontainers/bioconductor-impute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-impute
.. _`bioconductor-impute/tags`: https://quay.io/repository/biocontainers/bioconductor-impute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-impute";
        var versions = ["1.76.0","1.76.0","1.74.1","1.72.0","1.72.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-impute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-impute/README.html