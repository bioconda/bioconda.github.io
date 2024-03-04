:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'terrace'
.. highlight: bash

terrace
=======

.. conda:recipe:: terrace
   :replaces_section_title:
   :noindex:

   TERRACE is an assembler for circular RNAs.

   :homepage: https://github.com/Shao-Group/TERRACE
   :license: BSD-3-Clause
   :recipe: /`terrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/terrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/terrace/meta.yaml>`_

   


.. conda:package:: terrace

   |downloads_terrace| |docker_terrace|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends htslib: ``>=1.19.1,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install terrace

   and update with::

      mamba update terrace

  To create a new environment, run::

      mamba create --name myenvname terrace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/terrace:<tag>

   (see `terrace/tags`_ for valid values for ``<tag>``)


.. |downloads_terrace| image:: https://img.shields.io/conda/dn/bioconda/terrace.svg?style=flat
   :target: https://anaconda.org/bioconda/terrace
   :alt:   (downloads)
.. |docker_terrace| image:: https://quay.io/repository/biocontainers/terrace/status
   :target: https://quay.io/repository/biocontainers/terrace
.. _`terrace/tags`: https://quay.io/repository/biocontainers/terrace?tab=tags


.. raw:: html

    <script>
        var package = "terrace";
        var versions = ["1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/terrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/terrace/README.html