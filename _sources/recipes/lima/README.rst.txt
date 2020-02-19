:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lima'
.. highlight: bash

lima
====

.. conda:recipe:: lima
   :replaces_section_title:

   lima \- The PacBio Barcode Demultiplexer

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`lima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lima/meta.yaml>`_

   


.. conda:package:: lima

   |downloads_lima| |docker_lima|

   :versions: 1.11.0-0, 1.10.0-0, 1.9.0-0, 1.8.0-0, 1.7.1-1, 1.7.1-0, 1.7.0-0, 1.6.2-0, 1.6.1-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lima

   and update with::

      conda update lima

   or use the docker container::

      docker pull quay.io/biocontainers/lima:<tag>

   (see `lima/tags`_ for valid values for ``<tag>``)


.. |downloads_lima| image:: https://img.shields.io/conda/dn/bioconda/lima.svg?style=flat
   :target: https://anaconda.org/bioconda/lima
   :alt:   (downloads)
.. |docker_lima| image:: https://quay.io/repository/biocontainers/lima/status
   :target: https://quay.io/repository/biocontainers/lima
.. _`lima/tags`: https://quay.io/repository/biocontainers/lima?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lima/README.html