:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgcloud-lib'
.. highlight: bash

cgcloud-lib
===========

.. conda:recipe:: cgcloud-lib
   :replaces_section_title:
   :noindex:

   Components shared between cgcloud\-core and cgcloud\-agent

   :homepage: https://github.com/BD2KGenomics/cgcloud
   :license: Apache 2.0
   :recipe: /`cgcloud-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgcloud-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgcloud-lib/meta.yaml>`_

   


.. conda:package:: cgcloud-lib

   |downloads_cgcloud-lib| |docker_cgcloud-lib|

   :versions:
      
      

      ``1.6.0-4``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4a1.dev195-0``

      

   
   :depends bd2k-python-lib: 
   :depends boto: ``>=2.38.0``
   :depends future: 
   :depends python: ``>=3``
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

      mamba install cgcloud-lib

   and update with::

      mamba update cgcloud-lib

  To create a new environment, run::

      mamba create --name myenvname cgcloud-lib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgcloud-lib:<tag>

   (see `cgcloud-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_cgcloud-lib| image:: https://img.shields.io/conda/dn/bioconda/cgcloud-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/cgcloud-lib
   :alt:   (downloads)
.. |docker_cgcloud-lib| image:: https://quay.io/repository/biocontainers/cgcloud-lib/status
   :target: https://quay.io/repository/biocontainers/cgcloud-lib
.. _`cgcloud-lib/tags`: https://quay.io/repository/biocontainers/cgcloud-lib?tab=tags


.. raw:: html

    <script>
        var package = "cgcloud-lib";
        var versions = ["1.6.0","1.6.0","1.6.0","1.6.0","1.4a1.dev195"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgcloud-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgcloud-lib/README.html