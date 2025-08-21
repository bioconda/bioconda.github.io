:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bird_tool_utils_python'
.. highlight: bash

bird_tool_utils_python
======================

.. conda:recipe:: bird_tool_utils_python
   :replaces_section_title:
   :noindex:

   Python utilities used as part of the bird suite of bioinformatic tools.

   :homepage: https://github.com/wwood/bird_tool_utils-python
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bird_tool_utils_python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bird_tool_utils_python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bird_tool_utils_python/meta.yaml>`_

   


.. conda:package:: bird_tool_utils_python

   |downloads_bird_tool_utils_python| |docker_bird_tool_utils_python|

   :versions:
      
      

      ``0.5.1-0``,  ``0.4.1-0``,  ``0.3.6-0``,  ``0.2.17-0``

      

   
   :depends argparse-manpage-birdtools: ``>=1.7.0``
   :depends python: ``>=3.7``
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

      mamba install bird_tool_utils_python

   and update with::

      mamba update bird_tool_utils_python

  To create a new environment, run::

      mamba create --name myenvname bird_tool_utils_python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bird_tool_utils_python:<tag>

   (see `bird_tool_utils_python/tags`_ for valid values for ``<tag>``)


.. |downloads_bird_tool_utils_python| image:: https://img.shields.io/conda/dn/bioconda/bird_tool_utils_python.svg?style=flat
   :target: https://anaconda.org/bioconda/bird_tool_utils_python
   :alt:   (downloads)
.. |docker_bird_tool_utils_python| image:: https://quay.io/repository/biocontainers/bird_tool_utils_python/status
   :target: https://quay.io/repository/biocontainers/bird_tool_utils_python
.. _`bird_tool_utils_python/tags`: https://quay.io/repository/biocontainers/bird_tool_utils_python?tab=tags


.. raw:: html

    <script>
        var package = "bird_tool_utils_python";
        var versions = ["0.5.1","0.4.1","0.3.6","0.2.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bird_tool_utils_python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bird_tool_utils_python/README.html