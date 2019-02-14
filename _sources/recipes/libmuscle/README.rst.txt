:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libmuscle'
.. highlight: bash

libmuscle
=========

.. conda:recipe:: libmuscle
   :replaces_section_title:

   libMuscle header files.

   :homepage: http://darlinglab.org/mauve/
   :license: GPLv2
   :recipe: /`libmuscle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmuscle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmuscle/meta.yaml>`_

   


.. conda:package:: libmuscle

   |downloads_libmuscle| |docker_libmuscle|

   :versions: 3.7-1, 3.7-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libmuscle

   and update with::

      conda update libmuscle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/libmuscle:<tag>

   (see `libmuscle/tags`_ for valid values for ``<tag>``)


.. |downloads_libmuscle| image:: https://img.shields.io/conda/dn/bioconda/libmuscle.svg?style=flat
   :alt:   (downloads)
.. |docker_libmuscle| image:: https://quay.io/repository/biocontainers/libmuscle/status
   :target: https://quay.io/repository/biocontainers/libmuscle
.. _`libmuscle/tags`: https://quay.io/repository/biocontainers/libmuscle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libmuscle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libmuscle/README.html