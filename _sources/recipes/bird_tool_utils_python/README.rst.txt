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
   :license: GPL / GPL-3.0-or-later
   :recipe: /`bird_tool_utils_python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bird_tool_utils_python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bird_tool_utils_python/meta.yaml>`_

   


.. conda:package:: bird_tool_utils_python

   |downloads_bird_tool_utils_python| |docker_bird_tool_utils_python|

   :versions:
      
      

      ``0.3.6-0``,  ``0.2.17-0``

      

   
   :depends argparse-manpage-birdtools: ``>=1.6``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bird_tool_utils_python

   and update with::

      conda update bird_tool_utils_python

   or use the docker container::

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
        var versions = ["0.3.6","0.2.17"];
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