:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-randpack'
.. highlight: bash

bioconductor-randpack
=====================

.. conda:recipe:: bioconductor-randpack
   :replaces_section_title:
   :noindex:

   Randomization routines for Clinical Trials

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/randPack.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-randpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randpack/meta.yaml>`_
   :links: biotools: :biotools:`randpack`, doi: :doi:`10.1038/nmeth.3252`

   A suite of classes and functions for randomizing patients in clinical trials.


.. conda:package:: bioconductor-randpack

   |downloads_bioconductor-randpack| |docker_bioconductor-randpack|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-randpack

   and update with::

      mamba update bioconductor-randpack

  To create a new environment, run::

      mamba create --name myenvname bioconductor-randpack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-randpack:<tag>

   (see `bioconductor-randpack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-randpack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-randpack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-randpack
   :alt:   (downloads)
.. |docker_bioconductor-randpack| image:: https://quay.io/repository/biocontainers/bioconductor-randpack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-randpack
.. _`bioconductor-randpack/tags`: https://quay.io/repository/biocontainers/bioconductor-randpack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-randpack";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-randpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-randpack/README.html