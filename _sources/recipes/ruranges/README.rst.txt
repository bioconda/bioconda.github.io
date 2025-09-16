:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ruranges'
.. highlight: bash

ruranges
========

.. conda:recipe:: ruranges
   :replaces_section_title:
   :noindex:

   Rust\-backed interval kernels exposed to Python\/NumPy.

   :homepage: https://github.com/pyranges/ruranges
   :license: MIT / MIT
   :recipe: /`ruranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruranges/meta.yaml>`_

   


.. conda:package:: ruranges

   |downloads_ruranges| |docker_ruranges|

   :versions:
      
      

      ``0.0.13-1``,  ``0.0.13-0``

      

   
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python_abi: ``3.12.* *_cp312``
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

      mamba install ruranges

   and update with::

      mamba update ruranges

  To create a new environment, run::

      mamba create --name myenvname ruranges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ruranges:<tag>

   (see `ruranges/tags`_ for valid values for ``<tag>``)


.. |downloads_ruranges| image:: https://img.shields.io/conda/dn/bioconda/ruranges.svg?style=flat
   :target: https://anaconda.org/bioconda/ruranges
   :alt:   (downloads)
.. |docker_ruranges| image:: https://quay.io/repository/biocontainers/ruranges/status
   :target: https://quay.io/repository/biocontainers/ruranges
.. _`ruranges/tags`: https://quay.io/repository/biocontainers/ruranges?tab=tags


.. raw:: html

    <script>
        var package = "ruranges";
        var versions = ["0.0.13","0.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ruranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ruranges/README.html