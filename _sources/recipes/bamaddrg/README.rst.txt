:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamaddrg'
.. highlight: bash

bamaddrg
========

.. conda:recipe:: bamaddrg
   :replaces_section_title:
   :noindex:

   Add read group to BAM files

   :homepage: https://github.com/ekg/bamaddrg
   :license: MIT
   :recipe: /`bamaddrg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamaddrg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamaddrg/meta.yaml>`_

   


.. conda:package:: bamaddrg

   |downloads_bamaddrg| |docker_bamaddrg|

   :versions:
      
      

      ``9baba65f88228e55639689a3cea38dd150e6284f-2``,  ``9baba65f88228e55639689a3cea38dd150e6284f-1``,  ``9baba65f88228e55639689a3cea38dd150e6284f-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bamaddrg

   and update with::

      mamba update bamaddrg

  To create a new environment, run::

      mamba create --name myenvname bamaddrg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamaddrg:<tag>

   (see `bamaddrg/tags`_ for valid values for ``<tag>``)


.. |downloads_bamaddrg| image:: https://img.shields.io/conda/dn/bioconda/bamaddrg.svg?style=flat
   :target: https://anaconda.org/bioconda/bamaddrg
   :alt:   (downloads)
.. |docker_bamaddrg| image:: https://quay.io/repository/biocontainers/bamaddrg/status
   :target: https://quay.io/repository/biocontainers/bamaddrg
.. _`bamaddrg/tags`: https://quay.io/repository/biocontainers/bamaddrg?tab=tags


.. raw:: html

    <script>
        var package = "bamaddrg";
        var versions = ["9baba65f88228e55639689a3cea38dd150e6284f","9baba65f88228e55639689a3cea38dd150e6284f","9baba65f88228e55639689a3cea38dd150e6284f"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamaddrg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamaddrg/README.html