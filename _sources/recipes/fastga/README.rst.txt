:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastga'
.. highlight: bash

fastga
======

.. conda:recipe:: fastga
   :replaces_section_title:
   :noindex:

   FastGA \- A Fast Genome Aligner.

   :homepage: https://github.com/thegenemyers/FASTGA
   :license: BSD-like
   :recipe: /`fastga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastga/meta.yaml>`_

   


.. conda:package:: fastga

   |downloads_fastga| |docker_fastga|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install fastga

   and update with::

      mamba update fastga

  To create a new environment, run::

      mamba create --name myenvname fastga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastga:<tag>

   (see `fastga/tags`_ for valid values for ``<tag>``)


.. |downloads_fastga| image:: https://img.shields.io/conda/dn/bioconda/fastga.svg?style=flat
   :target: https://anaconda.org/bioconda/fastga
   :alt:   (downloads)
.. |docker_fastga| image:: https://quay.io/repository/biocontainers/fastga/status
   :target: https://quay.io/repository/biocontainers/fastga
.. _`fastga/tags`: https://quay.io/repository/biocontainers/fastga?tab=tags


.. raw:: html

    <script>
        var package = "fastga";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastga/README.html