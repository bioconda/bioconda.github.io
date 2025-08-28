:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tgv'
.. highlight: bash

tgv
===

.. conda:recipe:: tgv
   :replaces_section_title:
   :noindex:

   Explore genomes in the terminal. Light\, blazing fast 🚀\, vim\-motion.

   :homepage: https://github.com/zeqianli/tgv
   :license: MIT
   :recipe: /`tgv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgv/meta.yaml>`_

   


.. conda:package:: tgv

   |downloads_tgv| |docker_tgv|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends htslib: ``>=1.22.1,<1.23.0a0``
   :depends libclang13: ``>=20.1.8``
   :depends libgcc: ``>=13``
   :depends libsqlite: ``>=3.50.3,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.1,<4.0a0``
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

      mamba install tgv

   and update with::

      mamba update tgv

  To create a new environment, run::

      mamba create --name myenvname tgv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tgv:<tag>

   (see `tgv/tags`_ for valid values for ``<tag>``)


.. |downloads_tgv| image:: https://img.shields.io/conda/dn/bioconda/tgv.svg?style=flat
   :target: https://anaconda.org/bioconda/tgv
   :alt:   (downloads)
.. |docker_tgv| image:: https://quay.io/repository/biocontainers/tgv/status
   :target: https://quay.io/repository/biocontainers/tgv
.. _`tgv/tags`: https://quay.io/repository/biocontainers/tgv?tab=tags


.. raw:: html

    <script>
        var package = "tgv";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tgv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tgv/README.html