:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastdup'
.. highlight: bash

fastdup
=======

.. conda:recipe:: fastdup
   :replaces_section_title:
   :noindex:

   A Scalable Duplicate Marking Tool using Speculation\-and\-Test Mechanism.

   :homepage: https://github.com/zzhofict/FastDup
   :license: MIT / MIT
   :recipe: /`fastdup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastdup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastdup/meta.yaml>`_
   :links: biotools: :biotools:`fastdup`, usegalaxy-eu: :usegalaxy-eu:`fastdup`

   


.. conda:package:: fastdup

   |downloads_fastdup| |docker_fastdup|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends htslib: ``>=1.22.1,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends ncurses: ``>=6.5,<7.0a0``
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

      mamba install fastdup

   and update with::

      mamba update fastdup

  To create a new environment, run::

      mamba create --name myenvname fastdup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastdup:<tag>

   (see `fastdup/tags`_ for valid values for ``<tag>``)


.. |downloads_fastdup| image:: https://img.shields.io/conda/dn/bioconda/fastdup.svg?style=flat
   :target: https://anaconda.org/bioconda/fastdup
   :alt:   (downloads)
.. |docker_fastdup| image:: https://quay.io/repository/biocontainers/fastdup/status
   :target: https://quay.io/repository/biocontainers/fastdup
.. _`fastdup/tags`: https://quay.io/repository/biocontainers/fastdup?tab=tags


.. raw:: html

    <script>
        var package = "fastdup";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastdup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastdup/README.html