:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'karyopype'
.. highlight: bash

karyopype
=========

.. conda:recipe:: karyopype
   :replaces_section_title:

   Chromosomal visualization in Python.

   :homepage: http://github.com/jakevc/karyopype
   :license: MIT / MIT
   :recipe: /`karyopype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karyopype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karyopype/meta.yaml>`_

   


.. conda:package:: karyopype

   |downloads_karyopype| |docker_karyopype|

   :versions: 0.1.6-0
   
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install karyopype

   and update with::

      conda update karyopype

   or use the docker container::

      docker pull quay.io/biocontainers/karyopype:<tag>

   (see `karyopype/tags`_ for valid values for ``<tag>``)


.. |downloads_karyopype| image:: https://img.shields.io/conda/dn/bioconda/karyopype.svg?style=flat
   :target: https://anaconda.org/bioconda/karyopype
   :alt:   (downloads)
.. |docker_karyopype| image:: https://quay.io/repository/biocontainers/karyopype/status
   :target: https://quay.io/repository/biocontainers/karyopype
.. _`karyopype/tags`: https://quay.io/repository/biocontainers/karyopype?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/karyopype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/karyopype/README.html