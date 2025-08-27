:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mccortex'
.. highlight: bash

mccortex
========

.. conda:recipe:: mccortex
   :replaces_section_title:
   :noindex:

   De novo genome assembly and multisample variant calling 

   :homepage: https://github.com/mcveanlab/mccortex
   :license: MIT
   :recipe: /`mccortex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mccortex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mccortex/meta.yaml>`_
   :links: biotools: :biotools:`mccortex`

   


.. conda:package:: mccortex

   |downloads_mccortex| |docker_mccortex|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libcxx: ``>=12.0.1``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install mccortex

   and update with::

      mamba update mccortex

  To create a new environment, run::

      mamba create --name myenvname mccortex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mccortex:<tag>

   (see `mccortex/tags`_ for valid values for ``<tag>``)


.. |downloads_mccortex| image:: https://img.shields.io/conda/dn/bioconda/mccortex.svg?style=flat
   :target: https://anaconda.org/bioconda/mccortex
   :alt:   (downloads)
.. |docker_mccortex| image:: https://quay.io/repository/biocontainers/mccortex/status
   :target: https://quay.io/repository/biocontainers/mccortex
.. _`mccortex/tags`: https://quay.io/repository/biocontainers/mccortex?tab=tags


.. raw:: html

    <script>
        var package = "mccortex";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mccortex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mccortex/README.html