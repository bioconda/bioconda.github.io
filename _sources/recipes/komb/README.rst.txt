:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'komb'
.. highlight: bash

komb
====

.. conda:recipe:: komb
   :replaces_section_title:
   :noindex:

   Characterizing metagenomes using K\-Core decomposition

   :homepage: https://gitlab.com/treangenlab/komb
   :license: GPL-3.0-or-later
   :recipe: /`komb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/komb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/komb/meta.yaml>`_

   


.. conda:package:: komb

   |downloads_komb| |docker_komb|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-0``

      

   
   :depends abyss: ``2.0.2.*``
   :depends bifrost: ``>=1.0.5``
   :depends bowtie2: ``>=2.3.5.1``
   :depends igraph: ``0.8.*``
   :depends igraph: ``>=0.8.3,<0.9.0a0``
   :depends libcxx: ``>=12.0.1``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
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

      mamba install komb

   and update with::

      mamba update komb

  To create a new environment, run::

      mamba create --name myenvname komb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/komb:<tag>

   (see `komb/tags`_ for valid values for ``<tag>``)


.. |downloads_komb| image:: https://img.shields.io/conda/dn/bioconda/komb.svg?style=flat
   :target: https://anaconda.org/bioconda/komb
   :alt:   (downloads)
.. |docker_komb| image:: https://quay.io/repository/biocontainers/komb/status
   :target: https://quay.io/repository/biocontainers/komb
.. _`komb/tags`: https://quay.io/repository/biocontainers/komb?tab=tags


.. raw:: html

    <script>
        var package = "komb";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/komb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/komb/README.html