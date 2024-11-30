:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orientationpy'
.. highlight: bash

orientationpy
=============

.. conda:recipe:: orientationpy
   :replaces_section_title:
   :noindex:

   OrientationPy is the pythonic successor to the well\-loved OrientationJ Fiji Plugin. It is a library that takes in 2D images or 3D volumes and computes the orientation of the greylevels.

   :homepage: https://pypi.org/project/orientationpy
   :documentation: https://epfl-center-for-imaging.gitlab.io/orientationpy/introduction.html
   
   :developer docs: https://gitlab.com/epfl-center-for-imaging/orientationpy
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`orientationpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orientationpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orientationpy/meta.yaml>`_

   


.. conda:package:: orientationpy

   |downloads_orientationpy| |docker_orientationpy|

   :versions:
      
      

      ``0.2.0.4-0``

      

   
   :depends matplotlib-base: ``>=3.1.3``
   :depends numba: 
   :depends numba-progress: 
   :depends numpy: 
   :depends python: ``>=3.8``
   :depends scipy: 
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

      mamba install orientationpy

   and update with::

      mamba update orientationpy

  To create a new environment, run::

      mamba create --name myenvname orientationpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orientationpy:<tag>

   (see `orientationpy/tags`_ for valid values for ``<tag>``)


.. |downloads_orientationpy| image:: https://img.shields.io/conda/dn/bioconda/orientationpy.svg?style=flat
   :target: https://anaconda.org/bioconda/orientationpy
   :alt:   (downloads)
.. |docker_orientationpy| image:: https://quay.io/repository/biocontainers/orientationpy/status
   :target: https://quay.io/repository/biocontainers/orientationpy
.. _`orientationpy/tags`: https://quay.io/repository/biocontainers/orientationpy?tab=tags


.. raw:: html

    <script>
        var package = "orientationpy";
        var versions = ["0.2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orientationpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orientationpy/README.html