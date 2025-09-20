:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ibridges'
.. highlight: bash

ibridges
========

.. conda:recipe:: ibridges
   :replaces_section_title:
   :noindex:

   Package for accessing data and metadata on iRods servers.

   :homepage: https://github.com/iBridges-for-iRODS/iBridges
   :documentation: https://ibridges.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`ibridges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibridges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibridges/meta.yaml>`_

   


.. conda:package:: ibridges

   |downloads_ibridges| |docker_ibridges|

   :versions:
      
      

      ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.3.0-0``,  ``1.2.0-0``

      

   
   :depends python: ``>=3.8``
   :depends python-irodsclient: ``>=2.0.0``
   :depends tqdm: 
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

      mamba install ibridges

   and update with::

      mamba update ibridges

  To create a new environment, run::

      mamba create --name myenvname ibridges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ibridges:<tag>

   (see `ibridges/tags`_ for valid values for ``<tag>``)


.. |downloads_ibridges| image:: https://img.shields.io/conda/dn/bioconda/ibridges.svg?style=flat
   :target: https://anaconda.org/bioconda/ibridges
   :alt:   (downloads)
.. |docker_ibridges| image:: https://quay.io/repository/biocontainers/ibridges/status
   :target: https://quay.io/repository/biocontainers/ibridges
.. _`ibridges/tags`: https://quay.io/repository/biocontainers/ibridges?tab=tags


.. raw:: html

    <script>
        var package = "ibridges";
        var versions = ["1.5.2","1.5.1","1.5.0","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ibridges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ibridges/README.html