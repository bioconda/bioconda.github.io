:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samblaster'
.. highlight: bash

samblaster
==========

.. conda:recipe:: samblaster
   :replaces_section_title:

   Mark duplicates in and extract discordant and split reads from SAM files.

   :homepage: https://github.com/GregoryFaust/samblaster
   :license: MIT
   :recipe: /`samblaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samblaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samblaster/meta.yaml>`_

   


.. conda:package:: samblaster

   |downloads_samblaster| |docker_samblaster|

   :versions: 0.1.26-0, 0.1.25-0, 0.1.24-3, 0.1.24-2, 0.1.24-1, 0.1.24-0, 0.1.23-0, 0.1.22-0, 0.1.20-0
   
   :depends libgcc-ng: >=7.5.0
   :depends libstdcxx-ng: >=7.5.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samblaster

   and update with::

      conda update samblaster

   or use the docker container::

      docker pull quay.io/biocontainers/samblaster:<tag>

   (see `samblaster/tags`_ for valid values for ``<tag>``)


.. |downloads_samblaster| image:: https://img.shields.io/conda/dn/bioconda/samblaster.svg?style=flat
   :target: https://anaconda.org/bioconda/samblaster
   :alt:   (downloads)
.. |docker_samblaster| image:: https://quay.io/repository/biocontainers/samblaster/status
   :target: https://quay.io/repository/biocontainers/samblaster
.. _`samblaster/tags`: https://quay.io/repository/biocontainers/samblaster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samblaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samblaster/README.html