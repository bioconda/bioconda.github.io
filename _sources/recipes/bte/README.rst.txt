:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bte'
.. highlight: bash

bte
===

.. conda:recipe:: bte
   :replaces_section_title:
   :noindex:

   Cython wrapper enabling use of the MAT library in Python.

   :homepage: https://github.com/jmcbroome/BTE
   :documentation: https://jmcbroome.github.io/BTE/build/html/index.html
   
   :license: MIT / MIT
   :recipe: /`bte <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bte>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bte/meta.yaml>`_

   


.. conda:package:: bte

   |downloads_bte| |docker_bte|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.3-1</code>,  <code>0.9.3-0</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  </span></summary>
      

      ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends protobuf: ``<5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends tbb: ``>=2020.2,<2021.0.0a0``
   :depends tbb-devel: ``<2021.1.1``
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

      mamba install bte

   and update with::

      mamba update bte

  To create a new environment, run::

      mamba create --name myenvname bte

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bte:<tag>

   (see `bte/tags`_ for valid values for ``<tag>``)


.. |downloads_bte| image:: https://img.shields.io/conda/dn/bioconda/bte.svg?style=flat
   :target: https://anaconda.org/bioconda/bte
   :alt:   (downloads)
.. |docker_bte| image:: https://quay.io/repository/biocontainers/bte/status
   :target: https://quay.io/repository/biocontainers/bte
.. _`bte/tags`: https://quay.io/repository/biocontainers/bte?tab=tags


.. raw:: html

    <script>
        var package = "bte";
        var versions = ["0.9.3","0.9.3","0.9.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bte/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bte/README.html