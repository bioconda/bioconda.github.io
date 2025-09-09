:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexiplex'
.. highlight: bash

flexiplex
=========

.. conda:recipe:: flexiplex
   :replaces_section_title:
   :noindex:

   flexiplex\: the flexible demultiplexer

   :homepage: https://github.com/DavidsonGroup/flexiplex
   :documentation: https://davidsongroup.github.io/flexiplex
   
   :license: MIT / MIT
   :recipe: /`flexiplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexiplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexiplex/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btae102`

   Flexiplex is a fast and versatile sequence searching and demultiplexing tool 
   for omics data. For more information\, see the accompanying paper
   \"Cheng et al. Flexiplex\: A versatile demultiplexer and search tool for omics data.\"



.. conda:package:: flexiplex

   |downloads_flexiplex| |docker_flexiplex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.02.5-1</code>,  <code>1.02.5-0</code>,  <code>1.02.4-0</code>,  <code>1.02.3-0</code>,  <code>1.01-2</code>,  <code>1.01-1</code>,  <code>1.01-0</code>,  <code>0.97.1-1</code>,  <code>0.97.1-0</code>,  </span></summary>
      

      ``1.02.5-1``,  ``1.02.5-0``,  ``1.02.4-0``,  ``1.02.3-0``,  ``1.01-2``,  ``1.01-1``,  ``1.01-0``,  ``0.97.1-1``,  ``0.97.1-0``,  ``0.97-0``

      
      .. raw:: html

         </details>
      

   
   :depends cachetools: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.13,<3.14.0a0``
   :depends python_abi: ``3.13.* *_cp313``
   :depends requests: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install flexiplex

   and update with::

      mamba update flexiplex

  To create a new environment, run::

      mamba create --name myenvname flexiplex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flexiplex:<tag>

   (see `flexiplex/tags`_ for valid values for ``<tag>``)


.. |downloads_flexiplex| image:: https://img.shields.io/conda/dn/bioconda/flexiplex.svg?style=flat
   :target: https://anaconda.org/bioconda/flexiplex
   :alt:   (downloads)
.. |docker_flexiplex| image:: https://quay.io/repository/biocontainers/flexiplex/status
   :target: https://quay.io/repository/biocontainers/flexiplex
.. _`flexiplex/tags`: https://quay.io/repository/biocontainers/flexiplex?tab=tags


.. raw:: html

    <script>
        var package = "flexiplex";
        var versions = ["1.02.5","1.02.5","1.02.4","1.02.3","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexiplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexiplex/README.html