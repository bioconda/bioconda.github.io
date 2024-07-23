:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staden_io_lib'
.. highlight: bash

staden_io_lib
=============

.. conda:recipe:: staden_io_lib
   :replaces_section_title:
   :noindex:

   Staden io\_lib is a library of file reading and writing code e.g. for SAM\/BAM\/CRAM

   :homepage: https://github.com/jkbonfield/io_lib/
   :license: BSD
   :recipe: /`staden_io_lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staden_io_lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staden_io_lib/meta.yaml>`_

   


.. conda:package:: staden_io_lib

   |downloads_staden_io_lib| |docker_staden_io_lib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15.0-0</code>,  <code>1.14.14-9</code>,  <code>1.14.14-8</code>,  <code>1.14.14-7</code>,  <code>1.14.14-6</code>,  <code>1.14.14-5</code>,  <code>1.14.14-4</code>,  <code>1.14.14-3</code>,  <code>1.14.14-2</code>,  </span></summary>
      

      ``1.15.0-0``,  ``1.14.14-9``,  ``1.14.14-8``,  ``1.14.14-7``,  ``1.14.14-6``,  ``1.14.14-5``,  ``1.14.14-4``,  ``1.14.14-3``,  ``1.14.14-2``,  ``1.14.14-1``,  ``1.14.14-0``,  ``1.14.13-1``,  ``1.14.13-0``,  ``1.14.12-1``,  ``1.14.12-0``,  ``1.14.11-1``,  ``1.14.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.8.0,<9.0a0``
   :depends libdeflate: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install staden_io_lib

   and update with::

      mamba update staden_io_lib

  To create a new environment, run::

      mamba create --name myenvname staden_io_lib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/staden_io_lib:<tag>

   (see `staden_io_lib/tags`_ for valid values for ``<tag>``)


.. |downloads_staden_io_lib| image:: https://img.shields.io/conda/dn/bioconda/staden_io_lib.svg?style=flat
   :target: https://anaconda.org/bioconda/staden_io_lib
   :alt:   (downloads)
.. |docker_staden_io_lib| image:: https://quay.io/repository/biocontainers/staden_io_lib/status
   :target: https://quay.io/repository/biocontainers/staden_io_lib
.. _`staden_io_lib/tags`: https://quay.io/repository/biocontainers/staden_io_lib?tab=tags


.. raw:: html

    <script>
        var package = "staden_io_lib";
        var versions = ["1.15.0","1.14.14","1.14.14","1.14.14","1.14.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staden_io_lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staden_io_lib/README.html