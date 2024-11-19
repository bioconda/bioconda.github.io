:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'teloscope'
.. highlight: bash

teloscope
=========

.. conda:recipe:: teloscope
   :replaces_section_title:
   :noindex:

   A telomere annotation tools for genome assemblies

   :homepage: https://github.com/vgl-hub/teloscope
   :license: MIT
   :recipe: /`teloscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloscope/meta.yaml>`_
   :links: biotools: :biotools:`teloscope`, usegalaxy-eu: :usegalaxy-eu:`teloscope`

   


.. conda:package:: teloscope

   |downloads_teloscope| |docker_teloscope|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install teloscope

   and update with::

      mamba update teloscope

  To create a new environment, run::

      mamba create --name myenvname teloscope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/teloscope:<tag>

   (see `teloscope/tags`_ for valid values for ``<tag>``)


.. |downloads_teloscope| image:: https://img.shields.io/conda/dn/bioconda/teloscope.svg?style=flat
   :target: https://anaconda.org/bioconda/teloscope
   :alt:   (downloads)
.. |docker_teloscope| image:: https://quay.io/repository/biocontainers/teloscope/status
   :target: https://quay.io/repository/biocontainers/teloscope
.. _`teloscope/tags`: https://quay.io/repository/biocontainers/teloscope?tab=tags


.. raw:: html

    <script>
        var package = "teloscope";
        var versions = ["0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/teloscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/teloscope/README.html