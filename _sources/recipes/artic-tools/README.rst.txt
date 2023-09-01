:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artic-tools'
.. highlight: bash

artic-tools
===========

.. conda:recipe:: artic-tools
   :replaces_section_title:
   :noindex:

   A set of tools for working with the ARTIC bioinformatic pipeline.

   :homepage: https://github.com/will-rowe/artic-tools
   :license: MIT
   :recipe: /`artic-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-tools/meta.yaml>`_

   


.. conda:package:: artic-tools

   |downloads_artic-tools| |docker_artic-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-5</code>,  <code>0.3.1-4</code>,  <code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  </span></summary>
      

      ``0.3.1-5``,  ``0.3.1-4``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libcurl: ``>=8.0.1,<9.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install artic-tools

   and update with::

      mamba update artic-tools

  To create a new environment, run::

      mamba create --name myenvname artic-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/artic-tools:<tag>

   (see `artic-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_artic-tools| image:: https://img.shields.io/conda/dn/bioconda/artic-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/artic-tools
   :alt:   (downloads)
.. |docker_artic-tools| image:: https://quay.io/repository/biocontainers/artic-tools/status
   :target: https://quay.io/repository/biocontainers/artic-tools
.. _`artic-tools/tags`: https://quay.io/repository/biocontainers/artic-tools?tab=tags


.. raw:: html

    <script>
        var package = "artic-tools";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artic-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artic-tools/README.html