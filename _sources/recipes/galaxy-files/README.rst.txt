:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-files'
.. highlight: bash

galaxy-files
============

.. conda:recipe:: galaxy-files
   :replaces_section_title:
   :noindex:

   The Galaxy file sources framework and default plugins.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-files <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-files>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-files/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-files

   |downloads_galaxy-files| |docker_galaxy-files|

   :versions:
      
      

      ``23.1.2-0``,  ``23.1.1-0``,  ``23.0.6-0``,  ``23.0.5-0``,  ``23.0.4-0``

      

   
   :depends fs: 
   :depends galaxy-util: ``>=23.1``
   :depends python: ``>=3.7``
   :depends typing-extensions: 
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

      mamba install galaxy-files

   and update with::

      mamba update galaxy-files

  To create a new environment, run::

      mamba create --name myenvname galaxy-files

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-files:<tag>

   (see `galaxy-files/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-files| image:: https://img.shields.io/conda/dn/bioconda/galaxy-files.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-files
   :alt:   (downloads)
.. |docker_galaxy-files| image:: https://quay.io/repository/biocontainers/galaxy-files/status
   :target: https://quay.io/repository/biocontainers/galaxy-files
.. _`galaxy-files/tags`: https://quay.io/repository/biocontainers/galaxy-files?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-files";
        var versions = ["23.1.2","23.1.1","23.0.6","23.0.5","23.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-files/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-files/README.html