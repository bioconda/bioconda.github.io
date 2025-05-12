:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libcarna'
.. highlight: bash

libcarna
========

.. conda:recipe:: libcarna
   :replaces_section_title:
   :noindex:

   Real\-time 3D visualization of biomedical data and beyond

   :homepage: https://github.com/kostrykin/LibCarna
   :documentation: https://kostrykin.github.io/LibCarna/html
   
   :license: MIT
   :recipe: /`libcarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcarna/meta.yaml>`_

   


.. conda:package:: libcarna

   |downloads_libcarna| |docker_libcarna|

   :versions:
      
      

      ``3.4.0-0``,  ``3.3.3-0``

      

   
   :depends _openmp_mutex: 
   :depends libegl: ``>=1.7.0,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libgl: ``>=1.7.0,<2.0a0``
   :depends libglu: 
   :depends libstdcxx: ``>=13``
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

      mamba install libcarna

   and update with::

      mamba update libcarna

  To create a new environment, run::

      mamba create --name myenvname libcarna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libcarna:<tag>

   (see `libcarna/tags`_ for valid values for ``<tag>``)


.. |downloads_libcarna| image:: https://img.shields.io/conda/dn/bioconda/libcarna.svg?style=flat
   :target: https://anaconda.org/bioconda/libcarna
   :alt:   (downloads)
.. |docker_libcarna| image:: https://quay.io/repository/biocontainers/libcarna/status
   :target: https://quay.io/repository/biocontainers/libcarna
.. _`libcarna/tags`: https://quay.io/repository/biocontainers/libcarna?tab=tags


.. raw:: html

    <script>
        var package = "libcarna";
        var versions = ["3.4.0","3.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libcarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libcarna/README.html