:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyopenms'
.. highlight: bash

pyopenms
========

.. conda:recipe:: pyopenms
   :replaces_section_title:
   :noindex:

   Python bindings for OpenMS\, an open\-source software C\+\+ library for LC\-MS data management and analyses.

   :homepage: https://github.com/OpenMS/OpenMS
   :documentation: https://openms.readthedocs.io/en/latest
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pyopenms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopenms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopenms/meta.yaml>`_
   :links: biotools: :biotools:`openms`, doi: :doi:`10.1038/s41592-024-02197-7`

   


.. conda:package:: pyopenms

   |downloads_pyopenms| |docker_pyopenms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.1-0</code>,  <code>3.4.0-0</code>,  <code>3.3.0-5</code>,  <code>3.3.0-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  <code>3.0.0-0</code>,  <code>2.9.1-3</code>,  </span></summary>
      

      ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-5``,  ``3.3.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.9.1-3``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-3``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.85.0,<1.86.0a0``
   :depends bzip2: ``>=1.0.8,<1.1.0a0``
   :depends coinmp: ``>=1.8.4,<1.9.0a0``
   :depends eigen: ``>=3.4.0``
   :depends eigen: ``>=3.4.0,<3.5.0a0``
   :depends hdf5: ``>=1.14.3,<1.15.0a0``
   :depends icu: ``>=75.1,<76.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libopenms: ``3.4.1.*``
   :depends libopenms: ``>=3.4.1``
   :depends libstdcxx: ``>=13``
   :depends libsvm: ``>=335,<336.0a0``
   :depends libsvm: ``>=335,<400``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=2.0``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends qt6-main: 
   :depends sysroot_linux-64: ``2.17.*``
   :depends xerces-c: ``>=3.2.5,<3.3.0a0``
   :depends yaml-cpp: ``>=0.8.0,<0.9.0a0``
   :depends zlib: ``>=1.3.1,<1.4.0a0``
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

      mamba install pyopenms

   and update with::

      mamba update pyopenms

  To create a new environment, run::

      mamba create --name myenvname pyopenms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyopenms:<tag>

   (see `pyopenms/tags`_ for valid values for ``<tag>``)


.. |downloads_pyopenms| image:: https://img.shields.io/conda/dn/bioconda/pyopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/pyopenms
   :alt:   (downloads)
.. |docker_pyopenms| image:: https://quay.io/repository/biocontainers/pyopenms/status
   :target: https://quay.io/repository/biocontainers/pyopenms
.. _`pyopenms/tags`: https://quay.io/repository/biocontainers/pyopenms?tab=tags


.. raw:: html

    <script>
        var package = "pyopenms";
        var versions = ["3.4.1","3.4.0","3.3.0","3.3.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyopenms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyopenms/README.html