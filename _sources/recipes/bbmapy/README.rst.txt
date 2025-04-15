:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbmapy'
.. highlight: bash

bbmapy
======

.. conda:recipe:: bbmapy
   :replaces_section_title:
   :noindex:

   A Python wrapper for BBTools.

   :homepage: https://github.com/urineri/bbmapy
   :license: Custom
   :recipe: /`bbmapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmapy/meta.yaml>`_

   bbmapy is a Python wrapper for BBTools\, a suite of bioinformatics tools.
   It provides a convenient interface to use BBTools from Python scripts.



.. conda:package:: bbmapy

   |downloads_bbmapy| |docker_bbmapy|

   :versions:
      
      

      ``0.0.46-0``

      

   
   :depends install-jdk: 
   :depends python: ``>=3.9``
   :depends rich: 
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

      mamba install bbmapy

   and update with::

      mamba update bbmapy

  To create a new environment, run::

      mamba create --name myenvname bbmapy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bbmapy:<tag>

   (see `bbmapy/tags`_ for valid values for ``<tag>``)


.. |downloads_bbmapy| image:: https://img.shields.io/conda/dn/bioconda/bbmapy.svg?style=flat
   :target: https://anaconda.org/bioconda/bbmapy
   :alt:   (downloads)
.. |docker_bbmapy| image:: https://quay.io/repository/biocontainers/bbmapy/status
   :target: https://quay.io/repository/biocontainers/bbmapy
.. _`bbmapy/tags`: https://quay.io/repository/biocontainers/bbmapy?tab=tags


.. raw:: html

    <script>
        var package = "bbmapy";
        var versions = ["0.0.46"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbmapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbmapy/README.html