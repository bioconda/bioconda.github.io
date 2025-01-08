:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rprotobuflib'
.. highlight: bash

bioconductor-rprotobuflib
=========================

.. conda:recipe:: bioconductor-rprotobuflib
   :replaces_section_title:
   :noindex:

   C\+\+ headers and static libraries of Protocol buffers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RProtoBufLib.html
   :license: BSD_3_clause
   :recipe: /`bioconductor-rprotobuflib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprotobuflib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprotobuflib/meta.yaml>`_

   This package provides the headers and static library of Protocol buffers for other R packages to compile and link against.


.. conda:package:: bioconductor-rprotobuflib

   |downloads_bioconductor-rprotobuflib| |docker_bioconductor-rprotobuflib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-2</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
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

      mamba install bioconductor-rprotobuflib

   and update with::

      mamba update bioconductor-rprotobuflib

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rprotobuflib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rprotobuflib:<tag>

   (see `bioconductor-rprotobuflib/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rprotobuflib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rprotobuflib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rprotobuflib
   :alt:   (downloads)
.. |docker_bioconductor-rprotobuflib| image:: https://quay.io/repository/biocontainers/bioconductor-rprotobuflib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rprotobuflib
.. _`bioconductor-rprotobuflib/tags`: https://quay.io/repository/biocontainers/bioconductor-rprotobuflib?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rprotobuflib";
        var versions = ["2.18.0","2.14.0","2.14.0","2.12.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rprotobuflib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rprotobuflib/README.html