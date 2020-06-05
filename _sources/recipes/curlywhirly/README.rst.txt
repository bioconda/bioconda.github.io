:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curlywhirly'
.. highlight: bash

curlywhirly
===========

.. conda:recipe:: curlywhirly
   :replaces_section_title:
   :noindex:

   CurlyWhirly is an application for viewing multi\-dimensional data\, with a particular focus on the outputs of Principle Coordinate Analysis and Principal Components Analysis

   :homepage: https://ics.hutton.ac.uk/curlywhirly
   :license: BSD-2-Clause
   :recipe: /`curlywhirly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curlywhirly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curlywhirly/meta.yaml>`_

   


.. conda:package:: curlywhirly

   |downloads_curlywhirly| |docker_curlywhirly|

   :versions:
      
      

      ``1.17.08.31-1``,  ``1.17.08.31-0``

      

   
   :depends openjdk: ``>=8,<9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install curlywhirly

   and update with::

      conda update curlywhirly

   or use the docker container::

      docker pull quay.io/biocontainers/curlywhirly:<tag>

   (see `curlywhirly/tags`_ for valid values for ``<tag>``)


.. |downloads_curlywhirly| image:: https://img.shields.io/conda/dn/bioconda/curlywhirly.svg?style=flat
   :target: https://anaconda.org/bioconda/curlywhirly
   :alt:   (downloads)
.. |docker_curlywhirly| image:: https://quay.io/repository/biocontainers/curlywhirly/status
   :target: https://quay.io/repository/biocontainers/curlywhirly
.. _`curlywhirly/tags`: https://quay.io/repository/biocontainers/curlywhirly?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curlywhirly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curlywhirly/README.html