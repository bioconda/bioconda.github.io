:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomath'
.. highlight: bash

nanomath
========

.. conda:recipe:: nanomath
   :replaces_section_title:

   A few simple math function for other Oxford Nanopore processing scripts

   :homepage: https://github.com/wdecoster/nanomath
   :license: MIT / MIT License
   :recipe: /`nanomath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomath/meta.yaml>`_

   


.. conda:package:: nanomath

   |downloads_nanomath| |docker_nanomath|

   :versions: 0.23.1-1, 0.23.1-0, 0.22.0-1, 0.22.0-0, 0.21.0-2, 0.21.0-0, 0.20.0-0, 0.18.1-0, 0.16.2-0, 0.14.2-0, 0.12.5-0
   
   :depends numpy: >1.8
   :depends pandas: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanomath

   and update with::

      conda update nanomath

   or use the docker container::

      docker pull quay.io/biocontainers/nanomath:<tag>

   (see `nanomath/tags`_ for valid values for ``<tag>``)


.. |downloads_nanomath| image:: https://img.shields.io/conda/dn/bioconda/nanomath.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomath
   :alt:   (downloads)
.. |docker_nanomath| image:: https://quay.io/repository/biocontainers/nanomath/status
   :target: https://quay.io/repository/biocontainers/nanomath
.. _`nanomath/tags`: https://quay.io/repository/biocontainers/nanomath?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomath/README.html