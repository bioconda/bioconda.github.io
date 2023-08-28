:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elasticluster'
.. highlight: bash

elasticluster
=============

.. conda:recipe:: elasticluster
   :replaces_section_title:
   :noindex:

   Create\, manage and setup computing clusters hosted on a public or private cloud infrastructure.

   :homepage: https://github.com/gc3-uzh-ch/elasticluster
   :license: GPL
   :recipe: /`elasticluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elasticluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elasticluster/meta.yaml>`_

   


.. conda:package:: elasticluster

   |downloads_elasticluster| |docker_elasticluster|

   :versions:
      
      

      ``0.1.3bcbio-12``,  ``0.1.3bcbio-11``

      

   
   :depends ansible: 
   :depends azure: 
   :depends boto: 
   :depends configobj: 
   :depends google-api-python-client: 
   :depends oauth2client: 
   :depends paramiko: 
   :depends pycli: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python-gflags: 
   :depends voluptuous: 
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

      mamba install elasticluster

   and update with::

      mamba update elasticluster

  To create a new environment, run::

      mamba create --name myenvname elasticluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/elasticluster:<tag>

   (see `elasticluster/tags`_ for valid values for ``<tag>``)


.. |downloads_elasticluster| image:: https://img.shields.io/conda/dn/bioconda/elasticluster.svg?style=flat
   :target: https://anaconda.org/bioconda/elasticluster
   :alt:   (downloads)
.. |docker_elasticluster| image:: https://quay.io/repository/biocontainers/elasticluster/status
   :target: https://quay.io/repository/biocontainers/elasticluster
.. _`elasticluster/tags`: https://quay.io/repository/biocontainers/elasticluster?tab=tags


.. raw:: html

    <script>
        var package = "elasticluster";
        var versions = ["0.1.3bcbio","0.1.3bcbio"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elasticluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elasticluster/README.html