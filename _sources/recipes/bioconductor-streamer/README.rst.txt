:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-streamer'
.. highlight: bash

bioconductor-streamer
=====================

.. conda:recipe:: bioconductor-streamer
   :replaces_section_title:
   :noindex:

   Enabling stream processing of large files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Streamer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-streamer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-streamer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-streamer/meta.yaml>`_
   :links: biotools: :biotools:`streamer`, doi: :doi:`10.1038/nmeth.3252`

   Large data files can be difficult to work with in R\, where data generally resides in memory. This package encourages a style of programming where data is \'streamed\' from disk into R via a \`producer\' and through a series of \`consumers\' that\, typically reduce the original data to a manageable size. The package provides useful Producer and Consumer stream components for operations such as data input\, sampling\, indexing\, and transformation\; see package\?Streamer for details.


.. conda:package:: bioconductor-streamer

   |downloads_bioconductor-streamer| |docker_bioconductor-streamer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0a0``
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

      mamba install bioconductor-streamer

   and update with::

      mamba update bioconductor-streamer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-streamer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-streamer:<tag>

   (see `bioconductor-streamer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-streamer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-streamer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-streamer
   :alt:   (downloads)
.. |docker_bioconductor-streamer| image:: https://quay.io/repository/biocontainers/bioconductor-streamer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-streamer
.. _`bioconductor-streamer/tags`: https://quay.io/repository/biocontainers/bioconductor-streamer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-streamer";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-streamer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-streamer/README.html