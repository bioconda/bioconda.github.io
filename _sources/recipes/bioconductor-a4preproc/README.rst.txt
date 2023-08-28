:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-a4preproc'
.. highlight: bash

bioconductor-a4preproc
======================

.. conda:recipe:: bioconductor-a4preproc
   :replaces_section_title:
   :noindex:

   Automated Affymetrix Array Analysis Preprocessing Package

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/a4Preproc.html
   :license: GPL-3
   :recipe: /`bioconductor-a4preproc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4preproc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4preproc/meta.yaml>`_
   :links: biotools: :biotools:`a4preproc`, doi: :doi:`10.1038/nmeth.3252`

   Utility functions to pre\-process data for the Automated Affymetrix Array Analysis set of packages.


.. conda:package:: bioconductor-a4preproc

   |downloads_bioconductor-a4preproc| |docker_bioconductor-a4preproc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
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

      mamba install bioconductor-a4preproc

   and update with::

      mamba update bioconductor-a4preproc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-a4preproc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-a4preproc:<tag>

   (see `bioconductor-a4preproc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-a4preproc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4preproc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-a4preproc
   :alt:   (downloads)
.. |docker_bioconductor-a4preproc| image:: https://quay.io/repository/biocontainers/bioconductor-a4preproc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4preproc
.. _`bioconductor-a4preproc/tags`: https://quay.io/repository/biocontainers/bioconductor-a4preproc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-a4preproc";
        var versions = ["1.48.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4preproc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4preproc/README.html