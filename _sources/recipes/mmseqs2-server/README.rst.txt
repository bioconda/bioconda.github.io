:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmseqs2-server'
.. highlight: bash

mmseqs2-server
==============

.. conda:recipe:: mmseqs2-server
   :replaces_section_title:
   :noindex:

   Server for MMseqs2\, Foldseek and ColabFold

   :homepage: https://github.com/soedinglab/MMseqs2-App
   :license: GPLv3
   :recipe: /`mmseqs2-server <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2-server>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2-server/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty1057`, biotools: :biotools:`mmseqs2`

   


.. conda:package:: mmseqs2-server

   |downloads_mmseqs2-server| |docker_mmseqs2-server|

   :versions:
      
      

      ``8.c4b9644-0``

      

   
   :depends foldseek: 
   :depends mmseqs2: 
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

      mamba install mmseqs2-server

   and update with::

      mamba update mmseqs2-server

  To create a new environment, run::

      mamba create --name myenvname mmseqs2-server

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmseqs2-server:<tag>

   (see `mmseqs2-server/tags`_ for valid values for ``<tag>``)


.. |downloads_mmseqs2-server| image:: https://img.shields.io/conda/dn/bioconda/mmseqs2-server.svg?style=flat
   :target: https://anaconda.org/bioconda/mmseqs2-server
   :alt:   (downloads)
.. |docker_mmseqs2-server| image:: https://quay.io/repository/biocontainers/mmseqs2-server/status
   :target: https://quay.io/repository/biocontainers/mmseqs2-server
.. _`mmseqs2-server/tags`: https://quay.io/repository/biocontainers/mmseqs2-server?tab=tags


.. raw:: html

    <script>
        var package = "mmseqs2-server";
        var versions = ["8.c4b9644"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmseqs2-server/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmseqs2-server/README.html