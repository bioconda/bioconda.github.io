:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'athena_meta'
.. highlight: bash

athena_meta
===========

.. conda:recipe:: athena_meta
   :replaces_section_title:
   :noindex:

   Athena read cloud assembler for metagenomes

   :homepage: https://github.com/abishara/athena_meta/
   :license: MIT
   :recipe: /`athena_meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/athena_meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/athena_meta/meta.yaml>`_

   


.. conda:package:: athena_meta

   |downloads_athena_meta| |docker_athena_meta|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends bwa: ``0.7.*``
   :depends bx-python: ``0.8.*``
   :depends flye: ``2.3.1.*``
   :depends htslib: ``1.9.*``
   :depends idba_subasm: ``1.1.3a1.*``
   :depends ipython-cluster-helper: ``0.6.*``
   :depends numpy: ``1.11.*``
   :depends pysam: ``0.15.*``
   :depends python: ``<3``
   :depends samtools: ``1.9.*``
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

      mamba install athena_meta

   and update with::

      mamba update athena_meta

  To create a new environment, run::

      mamba create --name myenvname athena_meta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/athena_meta:<tag>

   (see `athena_meta/tags`_ for valid values for ``<tag>``)


.. |downloads_athena_meta| image:: https://img.shields.io/conda/dn/bioconda/athena_meta.svg?style=flat
   :target: https://anaconda.org/bioconda/athena_meta
   :alt:   (downloads)
.. |docker_athena_meta| image:: https://quay.io/repository/biocontainers/athena_meta/status
   :target: https://quay.io/repository/biocontainers/athena_meta
.. _`athena_meta/tags`: https://quay.io/repository/biocontainers/athena_meta?tab=tags


.. raw:: html

    <script>
        var package = "athena_meta";
        var versions = ["1.3","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/athena_meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/athena_meta/README.html