:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tttrlib'
.. highlight: bash

tttrlib
=======

.. conda:recipe:: tttrlib
   :replaces_section_title:
   :noindex:

   A file format agnostic library for time\-resolved imaging and spectroscopic data.

   :homepage: https://github.com/fluorescence-tools/tttrlib
   :documentation: https://tttrlib.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`tttrlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tttrlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tttrlib/meta.yaml>`_

   tttrlib is a simple\, fast\, libray to read\, write and process
   time\-resolved imaging and spectroscopic data. For speed\, it 
   is written in C\+\+ and wrapped for Python via SWIG.



.. conda:package:: tttrlib

   |downloads_tttrlib| |docker_tttrlib|

   :versions:
      
      

      ``0.25.1-1``,  ``0.25.1-0``,  ``0.25.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends click: 
   :depends click-didyoumean: 
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-image: 
   :depends tqdm: 
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

      mamba install tttrlib

   and update with::

      mamba update tttrlib

  To create a new environment, run::

      mamba create --name myenvname tttrlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tttrlib:<tag>

   (see `tttrlib/tags`_ for valid values for ``<tag>``)


.. |downloads_tttrlib| image:: https://img.shields.io/conda/dn/bioconda/tttrlib.svg?style=flat
   :target: https://anaconda.org/bioconda/tttrlib
   :alt:   (downloads)
.. |docker_tttrlib| image:: https://quay.io/repository/biocontainers/tttrlib/status
   :target: https://quay.io/repository/biocontainers/tttrlib
.. _`tttrlib/tags`: https://quay.io/repository/biocontainers/tttrlib?tab=tags


.. raw:: html

    <script>
        var package = "tttrlib";
        var versions = ["0.25.1","0.25.1","0.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tttrlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tttrlib/README.html