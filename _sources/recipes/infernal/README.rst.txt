:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'infernal'
.. highlight: bash

infernal
========

.. conda:recipe:: infernal
   :replaces_section_title:

   Infernal \(\"INFERence of RNA ALignment\"\) is for searching DNA sequence databases for RNA structure and sequence similarities.

   :homepage: http://infernal.janelia.org/
   :license: 3-Clause BSD
   :recipe: /`infernal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/infernal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/infernal/meta.yaml>`_

   


.. conda:package:: infernal

   |downloads_infernal| |docker_infernal|

   :versions: 1.1.2-2, 1.1.2-1, 1.1.2-0, 1.1.1-0, 1.0.2-0
   
   :depends libgcc-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install infernal

   and update with::

      conda update infernal

   or use the docker container::

      docker pull quay.io/biocontainers/infernal:<tag>

   (see `infernal/tags`_ for valid values for ``<tag>``)


.. |downloads_infernal| image:: https://img.shields.io/conda/dn/bioconda/infernal.svg?style=flat
   :alt:   (downloads)
.. |docker_infernal| image:: https://quay.io/repository/biocontainers/infernal/status
   :target: https://quay.io/repository/biocontainers/infernal
.. _`infernal/tags`: https://quay.io/repository/biocontainers/infernal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/infernal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/infernal/README.html