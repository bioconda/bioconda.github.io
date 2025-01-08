:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fabia'
.. highlight: bash

bioconductor-fabia
==================

.. conda:recipe:: bioconductor-fabia
   :replaces_section_title:
   :noindex:

   FABIA\: Factor Analysis for Bicluster Acquisition

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/fabia.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-fabia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabia/meta.yaml>`_
   :links: biotools: :biotools:`fabia`

   Biclustering by \"Factor Analysis for Bicluster Acquisition\" \(FABIA\). FABIA is a model\-based technique for biclustering\, that is clustering rows and columns simultaneously. Biclusters are found by factor analysis where both the factors and the loading matrix are sparse. FABIA is a multiplicative model that extracts linear dependencies between samples and feature patterns. It captures realistic non\-Gaussian data distributions with heavy tails as observed in gene expression measurements. FABIA utilizes well understood model selection techniques like the EM algorithm and variational approaches and is embedded into a Bayesian framework. FABIA ranks biclusters according to their information content and separates spurious biclusters from true biclusters. The code is written in C.


.. conda:package:: bioconductor-fabia

   |downloads_bioconductor-fabia| |docker_bioconductor-fabia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.52.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.40.0-2</code>,  <code>2.40.0-1</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  </span></summary>
      

      ``2.52.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.40.0-2``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-fabia

   and update with::

      mamba update bioconductor-fabia

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fabia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fabia:<tag>

   (see `bioconductor-fabia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fabia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fabia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fabia
   :alt:   (downloads)
.. |docker_bioconductor-fabia| image:: https://quay.io/repository/biocontainers/bioconductor-fabia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fabia
.. _`bioconductor-fabia/tags`: https://quay.io/repository/biocontainers/bioconductor-fabia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fabia";
        var versions = ["2.52.0","2.48.0","2.46.0","2.44.0","2.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fabia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fabia/README.html