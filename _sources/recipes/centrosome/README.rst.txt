:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centrosome'
.. highlight: bash

centrosome
==========

.. conda:recipe:: centrosome
   :replaces_section_title:
   :noindex:

   An open source image processing library. Dependency for CellProfiler

   :homepage: https://github.com/CellProfiler/centrosome
   :license: BSD 3
   :recipe: /`centrosome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrosome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrosome/meta.yaml>`_

   


.. conda:package:: centrosome

   |downloads_centrosome| |docker_centrosome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.3-2</code>,  <code>1.2.3-1</code>,  <code>1.2.3-0</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-3</code>,  </span></summary>
      

      ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends deprecation: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pillow: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-image: 
   :depends scipy: 
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

      mamba install centrosome

   and update with::

      mamba update centrosome

  To create a new environment, run::

      mamba create --name myenvname centrosome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/centrosome:<tag>

   (see `centrosome/tags`_ for valid values for ``<tag>``)


.. |downloads_centrosome| image:: https://img.shields.io/conda/dn/bioconda/centrosome.svg?style=flat
   :target: https://anaconda.org/bioconda/centrosome
   :alt:   (downloads)
.. |docker_centrosome| image:: https://quay.io/repository/biocontainers/centrosome/status
   :target: https://quay.io/repository/biocontainers/centrosome
.. _`centrosome/tags`: https://quay.io/repository/biocontainers/centrosome?tab=tags


.. raw:: html

    <script>
        var package = "centrosome";
        var versions = ["1.2.3","1.2.3","1.2.3","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrosome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrosome/README.html