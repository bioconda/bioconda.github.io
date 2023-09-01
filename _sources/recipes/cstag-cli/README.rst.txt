:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cstag-cli'
.. highlight: bash

cstag-cli
=========

.. conda:recipe:: cstag-cli
   :replaces_section_title:
   :noindex:

   Command line interface of cstag to manipulate the minimap2\'s CS tag

   :homepage: https://github.com/akikuno/cstag-cli
   :license: MIT
   :recipe: /`cstag-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag-cli/meta.yaml>`_

   


.. conda:package:: cstag-cli

   |downloads_cstag-cli| |docker_cstag-cli|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bzip2: ``<2.0a0``
   :depends cstag: 
   :depends libcurl: ``<8.0a0``
   :depends libdeflate: ``<1.11.0a0``
   :depends openssl: ``<1.1.2a``
   :depends pysam: ``0.19.1``
   :depends python: 
   :depends xz: ``<5.3.0a0``
   :depends zlib: ``<1.3.0a0``
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

      mamba install cstag-cli

   and update with::

      mamba update cstag-cli

  To create a new environment, run::

      mamba create --name myenvname cstag-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cstag-cli:<tag>

   (see `cstag-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_cstag-cli| image:: https://img.shields.io/conda/dn/bioconda/cstag-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/cstag-cli
   :alt:   (downloads)
.. |docker_cstag-cli| image:: https://quay.io/repository/biocontainers/cstag-cli/status
   :target: https://quay.io/repository/biocontainers/cstag-cli
.. _`cstag-cli/tags`: https://quay.io/repository/biocontainers/cstag-cli?tab=tags


.. raw:: html

    <script>
        var package = "cstag-cli";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cstag-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cstag-cli/README.html