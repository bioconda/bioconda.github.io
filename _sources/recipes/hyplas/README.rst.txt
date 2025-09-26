:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hyplas'
.. highlight: bash

hyplas
======

.. conda:recipe:: hyplas
   :replaces_section_title:
   :noindex:

   Hybrid long\- short\- plasmid assembler.

   :homepage: https://github.com/cchauve/hyplas
   :license: MIT / MIT
   :recipe: /`hyplas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyplas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyplas/meta.yaml>`_

   


.. conda:package:: hyplas

   |downloads_hyplas| |docker_hyplas|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends miniasm: 
   :depends minigraph: 
   :depends minimap2: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: 
   :depends platon: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends racon: 
   :depends spades: ``>=4.0.0``
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

      mamba install hyplas

   and update with::

      mamba update hyplas

  To create a new environment, run::

      mamba create --name myenvname hyplas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hyplas:<tag>

   (see `hyplas/tags`_ for valid values for ``<tag>``)


.. |downloads_hyplas| image:: https://img.shields.io/conda/dn/bioconda/hyplas.svg?style=flat
   :target: https://anaconda.org/bioconda/hyplas
   :alt:   (downloads)
.. |docker_hyplas| image:: https://quay.io/repository/biocontainers/hyplas/status
   :target: https://quay.io/repository/biocontainers/hyplas
.. _`hyplas/tags`: https://quay.io/repository/biocontainers/hyplas?tab=tags


.. raw:: html

    <script>
        var package = "hyplas";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hyplas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hyplas/README.html