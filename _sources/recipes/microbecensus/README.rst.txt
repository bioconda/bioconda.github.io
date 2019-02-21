:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microbecensus'
.. highlight: bash

microbecensus
=============

.. conda:recipe:: microbecensus
   :replaces_section_title:

   A command\-line tool for estimating average genome size from shotgun sequence data

   :homepage: https://github.com/snayfach/MicrobeCensus
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`microbecensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbecensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbecensus/meta.yaml>`_

   


.. conda:package:: microbecensus

   |downloads_microbecensus| |docker_microbecensus|

   :versions: 1.1.1-1, 1.1.1-0, 1.1.0-0
   
   :depends biopython: 
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install microbecensus

   and update with::

      conda update microbecensus

   or use the docker container::

      docker pull quay.io/biocontainers/microbecensus:<tag>

   (see `microbecensus/tags`_ for valid values for ``<tag>``)


.. |downloads_microbecensus| image:: https://img.shields.io/conda/dn/bioconda/microbecensus.svg?style=flat
   :alt:   (downloads)
.. |docker_microbecensus| image:: https://quay.io/repository/biocontainers/microbecensus/status
   :target: https://quay.io/repository/biocontainers/microbecensus
.. _`microbecensus/tags`: https://quay.io/repository/biocontainers/microbecensus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microbecensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microbecensus/README.html