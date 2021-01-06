:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spatyper'
.. highlight: bash

spatyper
========

.. conda:recipe:: spatyper
   :replaces_section_title:
   :noindex:

   Computational method for finding spa types.

   :homepage: https://github.com/HCGB-IGTP/spaTyper
   :license: LGPL-3
   :recipe: /`spatyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spatyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spatyper/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4063625`

   


.. conda:package:: spatyper

   |downloads_spatyper| |docker_spatyper|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spatyper

   and update with::

      conda update spatyper

   or use the docker container::

      docker pull quay.io/biocontainers/spatyper:<tag>

   (see `spatyper/tags`_ for valid values for ``<tag>``)


.. |downloads_spatyper| image:: https://img.shields.io/conda/dn/bioconda/spatyper.svg?style=flat
   :target: https://anaconda.org/bioconda/spatyper
   :alt:   (downloads)
.. |docker_spatyper| image:: https://quay.io/repository/biocontainers/spatyper/status
   :target: https://quay.io/repository/biocontainers/spatyper
.. _`spatyper/tags`: https://quay.io/repository/biocontainers/spatyper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spatyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spatyper/README.html