:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgrc'
.. highlight: bash

pgrc
====

.. conda:recipe:: pgrc
   :replaces_section_title:
   :noindex:

   A tool for compressing the DNA stream of FASTQ datasets.

   :homepage: https://github.com/kowallus/PgRC
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pgrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgrc/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz919`

   


.. conda:package:: pgrc

   |downloads_pgrc| |docker_pgrc|

   :versions:
      
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=12``
   :depends libgomp: 
   :depends libstdcxx: ``>=12``
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

      mamba install pgrc

   and update with::

      mamba update pgrc

  To create a new environment, run::

      mamba create --name myenvname pgrc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgrc:<tag>

   (see `pgrc/tags`_ for valid values for ``<tag>``)


.. |downloads_pgrc| image:: https://img.shields.io/conda/dn/bioconda/pgrc.svg?style=flat
   :target: https://anaconda.org/bioconda/pgrc
   :alt:   (downloads)
.. |docker_pgrc| image:: https://quay.io/repository/biocontainers/pgrc/status
   :target: https://quay.io/repository/biocontainers/pgrc
.. _`pgrc/tags`: https://quay.io/repository/biocontainers/pgrc?tab=tags


.. raw:: html

    <script>
        var package = "pgrc";
        var versions = ["2.0.2","2.0.1","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgrc/README.html