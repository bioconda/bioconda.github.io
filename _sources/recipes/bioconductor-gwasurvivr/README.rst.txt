:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwasurvivr'
.. highlight: bash

bioconductor-gwasurvivr
=======================

.. conda:recipe:: bioconductor-gwasurvivr
   :replaces_section_title:
   :noindex:

   gwasurvivr\: an R package for genome wide survival analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/gwasurvivr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gwasurvivr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwasurvivr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwasurvivr/meta.yaml>`_

   gwasurvivr is a package to perform survival analysis using Cox proportional hazard models on imputed genetic data.


.. conda:package:: bioconductor-gwasurvivr

   |downloads_bioconductor-gwasurvivr| |docker_bioconductor-gwasurvivr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gwastools: ``>=1.48.0,<1.49.0``
   :depends bioconductor-snprelate: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
   :depends r-survival: 
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

      mamba install bioconductor-gwasurvivr

   and update with::

      mamba update bioconductor-gwasurvivr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gwasurvivr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwasurvivr:<tag>

   (see `bioconductor-gwasurvivr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwasurvivr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwasurvivr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwasurvivr
   :alt:   (downloads)
.. |docker_bioconductor-gwasurvivr| image:: https://quay.io/repository/biocontainers/bioconductor-gwasurvivr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwasurvivr
.. _`bioconductor-gwasurvivr/tags`: https://quay.io/repository/biocontainers/bioconductor-gwasurvivr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gwasurvivr";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwasurvivr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwasurvivr/README.html