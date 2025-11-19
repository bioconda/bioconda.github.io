:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-files-full'
.. highlight: bash

galaxy-files-full
=================

.. conda:recipe:: galaxy-files-full
   :replaces_section_title:
   :noindex:

   The Galaxy file sources framework and default plugins.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: APACHE / Apache-2.0
   :recipe: /`galaxy-files-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-files-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-files-full/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-files-full

   |downloads_galaxy-files-full| |docker_galaxy-files-full|

   :versions:
      
      

      ``25.0.4-0``,  ``25.0.3-0``,  ``25.0.2-0``,  ``25.0.1-0``,  ``24.2.4-0``,  ``24.2.3-0``

      

   
   :depends fissix: 
   :depends fs: 
   :depends fs-gcsfs: 
   :depends fs.googledrivefs: 
   :depends fs.sshfs: 
   :depends fs.webdavfs: 
   :depends galaxy-util: ``>=25.0``
   :depends google-cloud-storage: 
   :depends legacy-cgi: 
   :depends python: ``>=3.9``
   :depends typing-extensions: 
   :depends webdavclient3: 
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

      mamba install galaxy-files-full

   and update with::

      mamba update galaxy-files-full

  To create a new environment, run::

      mamba create --name myenvname galaxy-files-full

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-files-full:<tag>

   (see `galaxy-files-full/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-files-full| image:: https://img.shields.io/conda/dn/bioconda/galaxy-files-full.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-files-full
   :alt:   (downloads)
.. |docker_galaxy-files-full| image:: https://quay.io/repository/biocontainers/galaxy-files-full/status
   :target: https://quay.io/repository/biocontainers/galaxy-files-full
.. _`galaxy-files-full/tags`: https://quay.io/repository/biocontainers/galaxy-files-full?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-files-full";
        var versions = ["25.0.4","25.0.3","25.0.2","25.0.1","24.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-files-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-files-full/README.html