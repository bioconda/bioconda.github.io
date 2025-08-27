:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'radiant'
.. highlight: bash

radiant
=======

.. conda:recipe:: radiant
   :replaces_section_title:
   :noindex:

   Annotate proteomes with protein domains

   :homepage: https://domainworld.uni-muenster.de/data/radiant-db/index.html
   :license: GPL-3.0-or-later
   :recipe: /`radiant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radiant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radiant/meta.yaml>`_

   This program rapidly annotates protein sequences with Pfam domains


.. conda:package:: radiant

   |downloads_radiant| |docker_radiant|

   :versions:
      
      

      ``1.1.5-0``

      

   
   :depends boost-cpp: ``>=1.84.0,<1.84.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcxx: ``>=14``
   :depends libsqlite: ``>=3.45.3,<4.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openmp: 
   :depends sqlite: 
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

      mamba install radiant

   and update with::

      mamba update radiant

  To create a new environment, run::

      mamba create --name myenvname radiant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/radiant:<tag>

   (see `radiant/tags`_ for valid values for ``<tag>``)


.. |downloads_radiant| image:: https://img.shields.io/conda/dn/bioconda/radiant.svg?style=flat
   :target: https://anaconda.org/bioconda/radiant
   :alt:   (downloads)
.. |docker_radiant| image:: https://quay.io/repository/biocontainers/radiant/status
   :target: https://quay.io/repository/biocontainers/radiant
.. _`radiant/tags`: https://quay.io/repository/biocontainers/radiant?tab=tags


.. raw:: html

    <script>
        var package = "radiant";
        var versions = ["1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/radiant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/radiant/README.html