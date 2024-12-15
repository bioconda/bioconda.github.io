:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mantelcorr'
.. highlight: bash

bioconductor-mantelcorr
=======================

.. conda:recipe:: bioconductor-mantelcorr
   :replaces_section_title:
   :noindex:

   Compute Mantel Cluster Correlations

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MantelCorr.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mantelcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mantelcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mantelcorr/meta.yaml>`_
   :links: biotools: :biotools:`mantelcorr`, doi: :doi:`10.1038/nmeth.3252`

   Computes Mantel cluster correlations from a \(p x n\) numeric data matrix \(e.g. microarray gene\-expression data\).


.. conda:package:: bioconductor-mantelcorr

   |downloads_bioconductor-mantelcorr| |docker_bioconductor-mantelcorr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-mantelcorr

   and update with::

      mamba update bioconductor-mantelcorr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mantelcorr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mantelcorr:<tag>

   (see `bioconductor-mantelcorr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mantelcorr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mantelcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mantelcorr
   :alt:   (downloads)
.. |docker_bioconductor-mantelcorr| image:: https://quay.io/repository/biocontainers/bioconductor-mantelcorr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mantelcorr
.. _`bioconductor-mantelcorr/tags`: https://quay.io/repository/biocontainers/bioconductor-mantelcorr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mantelcorr";
        var versions = ["1.76.0","1.72.0","1.70.0","1.68.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mantelcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mantelcorr/README.html