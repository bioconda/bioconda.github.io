:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libcarna-python'
.. highlight: bash

libcarna-python
===============

.. conda:recipe:: libcarna-python
   :replaces_section_title:
   :noindex:

   Real\-time 3D visualization of biomedical data and beyond in Python

   :homepage: https://github.com/kostrykin/LibCarna-Python
   :documentation: https://libcarna.readthedocs.io
   
   :license: MIT
   :recipe: /`libcarna-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcarna-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcarna-python/meta.yaml>`_

   


.. conda:package:: libcarna-python

   |downloads_libcarna-python| |docker_libcarna-python|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends ffmpeg: ``>=4.3.2``
   :depends libcarna: ``3.4``
   :depends libcarna: ``>=3.4.0,<3.5.0a0``
   :depends libegl: ``>=1.7.0,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libgl: ``>=1.7.0,<2.0a0``
   :depends libglu: ``>=9.0.3,<9.1.0a0``
   :depends libopengl: ``>=1.7.0,<2.0a0``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numpngw: ``>=0.1.4,<0.2``
   :depends numpy: ``<2.3``
   :depends pooch: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-image: 
   :depends scikit-video: ``1.1.*``
   :depends scipy: 
   :depends tifffile: 
   :depends typing_extensions: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install libcarna-python

   and update with::

      mamba update libcarna-python

  To create a new environment, run::

      mamba create --name myenvname libcarna-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libcarna-python:<tag>

   (see `libcarna-python/tags`_ for valid values for ``<tag>``)


.. |downloads_libcarna-python| image:: https://img.shields.io/conda/dn/bioconda/libcarna-python.svg?style=flat
   :target: https://anaconda.org/bioconda/libcarna-python
   :alt:   (downloads)
.. |docker_libcarna-python| image:: https://quay.io/repository/biocontainers/libcarna-python/status
   :target: https://quay.io/repository/biocontainers/libcarna-python
.. _`libcarna-python/tags`: https://quay.io/repository/biocontainers/libcarna-python?tab=tags


.. raw:: html

    <script>
        var package = "libcarna-python";
        var versions = ["0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libcarna-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libcarna-python/README.html