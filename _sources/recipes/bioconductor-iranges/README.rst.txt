:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iranges'
.. highlight: bash

bioconductor-iranges
====================

.. conda:recipe:: bioconductor-iranges
   :replaces_section_title:
   :noindex:

   Foundation of integer range manipulation in Bioconductor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/IRanges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iranges/meta.yaml>`_
   :links: biotools: :biotools:`iranges`

   Provides efficient low\-level and highly reusable S4 classes for storing\, manipulating and aggregating over annotated ranges of integers. Implements an algebra of range operations\, including efficient algorithms for finding overlaps and nearest neighbors. Defines efficient list\-like classes for storing\, transforming and aggregating large grouped data\, i.e.\, collections of atomic vectors and DataFrames.


.. conda:package:: bioconductor-iranges

   |downloads_bioconductor-iranges| |docker_bioconductor-iranges|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.36.0-2</code>,  <code>2.36.0-1</code>,  <code>2.36.0-0</code>,  <code>2.34.1-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.28.0-2</code>,  <code>2.28.0-1</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.36.0-2``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.1-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.28.0-2``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.22.1-0``,  ``2.20.0-0``,  ``2.18.2-0``,  ``2.18.1-0``,  ``2.16.0-0``,  ``2.14.12-0``,  ``2.12.0-0``,  ``2.10.5-0``,  ``2.8.2-0``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.4.8-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-iranges

   and update with::

      mamba update bioconductor-iranges

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iranges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iranges:<tag>

   (see `bioconductor-iranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iranges
   :alt:   (downloads)
.. |docker_bioconductor-iranges| image:: https://quay.io/repository/biocontainers/bioconductor-iranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iranges
.. _`bioconductor-iranges/tags`: https://quay.io/repository/biocontainers/bioconductor-iranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iranges";
        var versions = ["2.40.0","2.36.0","2.36.0","2.36.0","2.34.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iranges/README.html