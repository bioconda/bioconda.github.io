:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lib-pod5'
.. highlight: bash

lib-pod5
========

.. conda:recipe:: lib-pod5
   :replaces_section_title:
   :noindex:

   Python bindings for the POD5 file format.

   :homepage: https://github.com/nanoporetech/pod5-file-format
   :documentation: https://pod5-file-format.readthedocs.io/en/latest
   
   :license: OTHER / MPL-2.0
   :recipe: /`lib-pod5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lib-pod5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lib-pod5/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/pod5\-file\-format\/badge\/\?version\=latest\)\]\(https\:\/\/pod5\-file\-format.readthedocs.io\/\)

   \*\*Python bindings for the POD5 file format\*\*

   What does this project contain
   \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

   This project contains the low\-level core library \(extension modules\) for reading and writing POD5 files.
   This project forms the basis of the pure\-python \[pod5 package\]\(https\:\/\/github.com\/nanoporetech\/pod5\-file\-format\) which is probably the project you want.

   Documentation
   \-\-\-\-\-\-\-\-\-\-\-\-\-

   Full documentation is found at https\:\/\/pod5\-file\-format.readthedocs.io



.. conda:package:: lib-pod5

   |downloads_lib-pod5| |docker_lib-pod5|

   :versions:
      
      

      ``0.3.27-0``,  ``0.3.15-0``

      

   
   :depends flatbuffers: ``>=24.3.25,<24.3.26.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends numpy: ``>=1.21.0``
   :depends pyarrow: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install lib-pod5

   and update with::

      mamba update lib-pod5

  To create a new environment, run::

      mamba create --name myenvname lib-pod5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lib-pod5:<tag>

   (see `lib-pod5/tags`_ for valid values for ``<tag>``)


.. |downloads_lib-pod5| image:: https://img.shields.io/conda/dn/bioconda/lib-pod5.svg?style=flat
   :target: https://anaconda.org/bioconda/lib-pod5
   :alt:   (downloads)
.. |docker_lib-pod5| image:: https://quay.io/repository/biocontainers/lib-pod5/status
   :target: https://quay.io/repository/biocontainers/lib-pod5
.. _`lib-pod5/tags`: https://quay.io/repository/biocontainers/lib-pod5?tab=tags


.. raw:: html

    <script>
        var package = "lib-pod5";
        var versions = ["0.3.27","0.3.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lib-pod5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lib-pod5/README.html