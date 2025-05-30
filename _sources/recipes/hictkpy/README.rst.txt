:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hictkpy'
.. highlight: bash

hictkpy
=======

.. conda:recipe:: hictkpy
   :replaces_section_title:
   :noindex:

   Python bindings for hictk\: read and write .cool and .hic files directly from Python

   :homepage: https://github.com/paulsengroup/hictkpy
   :documentation: https://hictkpy.readthedocs.io/en/stable/
   
   :license: MIT
   :recipe: /`hictkpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hictkpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hictkpy/meta.yaml>`_
   :links: biotools: :biotools:`hictkpy`, doi: :doi:`10.5281/zenodo.8220300`

   


.. conda:package:: hictkpy

   |downloads_hictkpy| |docker_hictkpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.0.5-2</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  </span></summary>
      

      ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends hdf5: ``>=1.14,<2.0a0``
   :depends hdf5: ``>=1.14.6,<1.14.7.0a0``
   :depends libarrow: ``>=20.0.0,<20.1.0a0``
   :depends libdeflate: ``>=1,<2.0a0``
   :depends libdeflate: ``>=1.24,<1.25.0a0``
   :depends libgcc: ``>=12``
   :depends libgcc: ``>=15``
   :depends libstdcxx: ``>=15``
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=2,<3.0a0``
   :depends pandas: 
   :depends pyarrow: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends zstd: ``>=1.5,<2.0a0``
   :depends zstd: ``>=1.5.7,<1.6.0a0``
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

      mamba install hictkpy

   and update with::

      mamba update hictkpy

  To create a new environment, run::

      mamba create --name myenvname hictkpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hictkpy:<tag>

   (see `hictkpy/tags`_ for valid values for ``<tag>``)


.. |downloads_hictkpy| image:: https://img.shields.io/conda/dn/bioconda/hictkpy.svg?style=flat
   :target: https://anaconda.org/bioconda/hictkpy
   :alt:   (downloads)
.. |docker_hictkpy| image:: https://quay.io/repository/biocontainers/hictkpy/status
   :target: https://quay.io/repository/biocontainers/hictkpy
.. _`hictkpy/tags`: https://quay.io/repository/biocontainers/hictkpy?tab=tags


.. raw:: html

    <script>
        var package = "hictkpy";
        var versions = ["1.3.0","1.2.0","1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hictkpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hictkpy/README.html