:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'progressivemauve'
.. highlight: bash

progressivemauve
================

.. conda:recipe:: progressivemauve
   :replaces_section_title:

   progressiveMauve computes multiple genome alignment with gene gain\, loss and rearrangement

   :homepage: http://darlinglab.org/mauve/user-guide/progressivemauve.html
   :license: GNU General Public License version 2.0 (GPLv2)
   :recipe: /`progressivemauve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/progressivemauve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/progressivemauve/meta.yaml>`_

   


.. conda:package:: progressivemauve

   |downloads_progressivemauve| |docker_progressivemauve|

   :versions: snapshot_2015_02_13-2, snapshot_2015_02_13-1, snapshot_2015_02_13-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install progressivemauve

   and update with::

      conda update progressivemauve

   or use the docker container::

      docker pull quay.io/biocontainers/progressivemauve:<tag>

   (see `progressivemauve/tags`_ for valid values for ``<tag>``)


.. |downloads_progressivemauve| image:: https://img.shields.io/conda/dn/bioconda/progressivemauve.svg?style=flat
   :alt:   (downloads)
.. |docker_progressivemauve| image:: https://quay.io/repository/biocontainers/progressivemauve/status
   :target: https://quay.io/repository/biocontainers/progressivemauve
.. _`progressivemauve/tags`: https://quay.io/repository/biocontainers/progressivemauve?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/progressivemauve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/progressivemauve/README.html