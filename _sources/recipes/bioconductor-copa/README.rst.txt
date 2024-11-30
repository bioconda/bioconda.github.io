:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copa'
.. highlight: bash

bioconductor-copa
=================

.. conda:recipe:: bioconductor-copa
   :replaces_section_title:
   :noindex:

   Functions to perform cancer outlier profile analysis.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/copa.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copa/meta.yaml>`_
   :links: biotools: :biotools:`copa`, usegalaxy-eu: :usegalaxy-eu:`copa`

   COPA is a method to find genes that undergo recurrent fusion in a given cancer type by finding pairs of genes that have mutually exclusive outlier profiles.


.. conda:package:: bioconductor-copa

   |downloads_bioconductor-copa| |docker_bioconductor-copa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.62.0-2</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.62.0-2``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-copa

   and update with::

      mamba update bioconductor-copa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-copa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-copa:<tag>

   (see `bioconductor-copa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-copa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copa
   :alt:   (downloads)
.. |docker_bioconductor-copa| image:: https://quay.io/repository/biocontainers/bioconductor-copa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copa
.. _`bioconductor-copa/tags`: https://quay.io/repository/biocontainers/bioconductor-copa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-copa";
        var versions = ["1.70.0","1.70.0","1.68.0","1.66.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copa/README.html