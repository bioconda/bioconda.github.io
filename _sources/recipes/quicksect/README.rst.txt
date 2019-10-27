:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quicksect'
.. highlight: bash

quicksect
=========

.. conda:recipe:: quicksect
   :replaces_section_title:

   A cythonized\, extended version of the interval search tree in bx

   :homepage: https://github.com/brentp/quicksect
   :license: MIT / MIT
   :recipe: /`quicksect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksect/meta.yaml>`_

   


.. conda:package:: quicksect

   |downloads_quicksect| |docker_quicksect|

   :versions: 0.2.2-1, 0.2.2-0, 0.2.0-2, 0.2.0-1, 0.1.0-1, 0.1.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quicksect

   and update with::

      conda update quicksect

   or use the docker container::

      docker pull quay.io/biocontainers/quicksect:<tag>

   (see `quicksect/tags`_ for valid values for ``<tag>``)


.. |downloads_quicksect| image:: https://img.shields.io/conda/dn/bioconda/quicksect.svg?style=flat
   :target: https://anaconda.org/bioconda/quicksect
   :alt:   (downloads)
.. |docker_quicksect| image:: https://quay.io/repository/biocontainers/quicksect/status
   :target: https://quay.io/repository/biocontainers/quicksect
.. _`quicksect/tags`: https://quay.io/repository/biocontainers/quicksect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quicksect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quicksect/README.html