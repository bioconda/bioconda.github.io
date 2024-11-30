:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphlite'
.. highlight: bash

graphlite
=========

.. conda:recipe:: graphlite
   :replaces_section_title:
   :noindex:

   embedded graph datastore

   :homepage: https://github.com/eugene-eeo/graphlite
   :license: MIT License
   :recipe: /`graphlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphlite/meta.yaml>`_

   


.. conda:package:: graphlite

   |downloads_graphlite| |docker_graphlite|

   :versions:
      
      

      ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends python: 
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

      mamba install graphlite

   and update with::

      mamba update graphlite

  To create a new environment, run::

      mamba create --name myenvname graphlite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphlite:<tag>

   (see `graphlite/tags`_ for valid values for ``<tag>``)


.. |downloads_graphlite| image:: https://img.shields.io/conda/dn/bioconda/graphlite.svg?style=flat
   :target: https://anaconda.org/bioconda/graphlite
   :alt:   (downloads)
.. |docker_graphlite| image:: https://quay.io/repository/biocontainers/graphlite/status
   :target: https://quay.io/repository/biocontainers/graphlite
.. _`graphlite/tags`: https://quay.io/repository/biocontainers/graphlite?tab=tags


.. raw:: html

    <script>
        var package = "graphlite";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphlite/README.html