:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgraphviz'
.. highlight: bash

bioconductor-rgraphviz
======================

.. conda:recipe:: bioconductor-rgraphviz
   :replaces_section_title:
   :noindex:

   Provides plotting capabilities for R graph objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rgraphviz.html
   :license: EPL
   :recipe: /`bioconductor-rgraphviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraphviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraphviz/meta.yaml>`_
   :links: biotools: :biotools:`rgraphviz`, usegalaxy-eu: :usegalaxy-eu:`rgraphviz`

   Interfaces R with the AT and T graphviz library for plotting R graph objects from the graph package.


.. conda:package:: bioconductor-rgraphviz

   |downloads_bioconductor-rgraphviz| |docker_bioconductor-rgraphviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.50.0-1</code>,  <code>2.50.0-0</code>,  <code>2.46.0-1</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.38.0-2</code>,  <code>2.38.0-1</code>,  </span></summary>
      

      ``2.50.0-1``,  ``2.50.0-0``,  ``2.46.0-1``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.38.0-2``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.13.0-1``,  ``2.13.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rgraphviz

   and update with::

      mamba update bioconductor-rgraphviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rgraphviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgraphviz:<tag>

   (see `bioconductor-rgraphviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgraphviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgraphviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgraphviz
   :alt:   (downloads)
.. |docker_bioconductor-rgraphviz| image:: https://quay.io/repository/biocontainers/bioconductor-rgraphviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgraphviz
.. _`bioconductor-rgraphviz/tags`: https://quay.io/repository/biocontainers/bioconductor-rgraphviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgraphviz";
        var versions = ["2.50.0","2.50.0","2.46.0","2.46.0","2.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgraphviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgraphviz/README.html