:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refgenie'
.. highlight: bash

refgenie
========

.. conda:recipe:: refgenie
   :replaces_section_title:

   Refgenie creates a standardized folder structure for reference genome files and indexes. You can download pre\-built genomes or build your own for any fasta file

   :homepage: http://refgenie.databio.org
   :license: BSD / BSD-2-Clause
   :recipe: /`refgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenie/meta.yaml>`_

   


.. conda:package:: refgenie

   |downloads_refgenie| |docker_refgenie|

   :versions: 0.8.2-0, 0.8.1-0, 0.8.0-0, 0.7.2-0
   
   :depends logmuse: >=0.2
   :depends piper: >=0.12.1
   :depends pyfaidx: >=0.5.5.2
   :depends python: >=3
   :depends refgenconf: >=0.5.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install refgenie

   and update with::

      conda update refgenie

   or use the docker container::

      docker pull quay.io/biocontainers/refgenie:<tag>

   (see `refgenie/tags`_ for valid values for ``<tag>``)


.. |downloads_refgenie| image:: https://img.shields.io/conda/dn/bioconda/refgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/refgenie
   :alt:   (downloads)
.. |docker_refgenie| image:: https://quay.io/repository/biocontainers/refgenie/status
   :target: https://quay.io/repository/biocontainers/refgenie
.. _`refgenie/tags`: https://quay.io/repository/biocontainers/refgenie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refgenie/README.html