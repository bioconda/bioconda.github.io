:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'niemagraphgen'
.. highlight: bash

niemagraphgen
=============

.. conda:recipe:: niemagraphgen
   :replaces_section_title:
   :noindex:

   Niema\'s C\+\+ implementations of graph generators

   :homepage: https://github.com/niemasd/NiemaGraphGen
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`niemagraphgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/niemagraphgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/niemagraphgen/meta.yaml>`_
   :links: biotools: :biotools:`niemagraphgen`, doi: :doi:`10.46471/gigabyte.37`

   


.. conda:package:: niemagraphgen

   |downloads_niemagraphgen| |docker_niemagraphgen|

   :versions:
      
      

      ``1.0.6-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install niemagraphgen

   and update with::

      mamba update niemagraphgen

  To create a new environment, run::

      mamba create --name myenvname niemagraphgen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/niemagraphgen:<tag>

   (see `niemagraphgen/tags`_ for valid values for ``<tag>``)


.. |downloads_niemagraphgen| image:: https://img.shields.io/conda/dn/bioconda/niemagraphgen.svg?style=flat
   :target: https://anaconda.org/bioconda/niemagraphgen
   :alt:   (downloads)
.. |docker_niemagraphgen| image:: https://quay.io/repository/biocontainers/niemagraphgen/status
   :target: https://quay.io/repository/biocontainers/niemagraphgen
.. _`niemagraphgen/tags`: https://quay.io/repository/biocontainers/niemagraphgen?tab=tags


.. raw:: html

    <script>
        var package = "niemagraphgen";
        var versions = ["1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/niemagraphgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/niemagraphgen/README.html