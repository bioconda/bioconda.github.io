:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geomloss'
.. highlight: bash

geomloss
========

.. conda:recipe:: geomloss
   :replaces_section_title:
   :noindex:

   Geometric loss functions between point clouds\, images and volumes.

   :homepage: https://github.com/jeanfeydy/geomloss
   :license: MIT
   :recipe: /`geomloss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geomloss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geomloss/meta.yaml>`_

   


.. conda:package:: geomloss

   |downloads_geomloss| |docker_geomloss|

   :versions:
      
      

      ``0.2.6-0``

      

   
   :depends numpy: 
   :depends python: 
   :depends pytorch: 
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

      mamba install geomloss

   and update with::

      mamba update geomloss

  To create a new environment, run::

      mamba create --name myenvname geomloss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/geomloss:<tag>

   (see `geomloss/tags`_ for valid values for ``<tag>``)


.. |downloads_geomloss| image:: https://img.shields.io/conda/dn/bioconda/geomloss.svg?style=flat
   :target: https://anaconda.org/bioconda/geomloss
   :alt:   (downloads)
.. |docker_geomloss| image:: https://quay.io/repository/biocontainers/geomloss/status
   :target: https://quay.io/repository/biocontainers/geomloss
.. _`geomloss/tags`: https://quay.io/repository/biocontainers/geomloss?tab=tags


.. raw:: html

    <script>
        var package = "geomloss";
        var versions = ["0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geomloss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geomloss/README.html