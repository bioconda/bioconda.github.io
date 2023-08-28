:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghnormaliter'
.. highlight: bash

bioconductor-cghnormaliter
==========================

.. conda:recipe:: bioconductor-cghnormaliter
   :replaces_section_title:
   :noindex:

   Normalization of array CGH data with imbalanced aberrations.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CGHnormaliter.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-cghnormaliter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghnormaliter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghnormaliter/meta.yaml>`_
   :links: biotools: :biotools:`cghnormaliter`, doi: :doi:`10.1186/1471-2164-10-401`

   Normalization and centralization of array comparative genomic hybridization \(aCGH\) data. The algorithm uses an iterative procedure that effectively eliminates the influence of imbalanced copy numbers. This leads to a more reliable assessment of copy number alterations \(CNAs\).


.. conda:package:: bioconductor-cghnormaliter

   |downloads_bioconductor-cghnormaliter| |docker_bioconductor-cghnormaliter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-cghbase: ``>=1.60.0,<1.61.0``
   :depends bioconductor-cghcall: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-cghnormaliter

   and update with::

      mamba update bioconductor-cghnormaliter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cghnormaliter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghnormaliter:<tag>

   (see `bioconductor-cghnormaliter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghnormaliter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghnormaliter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghnormaliter
   :alt:   (downloads)
.. |docker_bioconductor-cghnormaliter| image:: https://quay.io/repository/biocontainers/bioconductor-cghnormaliter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghnormaliter
.. _`bioconductor-cghnormaliter/tags`: https://quay.io/repository/biocontainers/bioconductor-cghnormaliter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cghnormaliter";
        var versions = ["1.54.0","1.52.0","1.48.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghnormaliter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghnormaliter/README.html