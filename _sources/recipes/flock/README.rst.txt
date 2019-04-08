:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flock'
.. highlight: bash

flock
=====

.. conda:recipe:: flock
   :replaces_section_title:

   FLOCK \- Flow Cytometry Clustering without K.

   :homepage: https://sourceforge.net/projects/immportflock/
   :license: unknown
   :recipe: /`flock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flock/meta.yaml>`_

   


.. conda:package:: flock

   |downloads_flock| |docker_flock|

   :versions: 1.0-2, 1.0-0
   
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flock

   and update with::

      conda update flock

   or use the docker container::

      docker pull quay.io/biocontainers/flock:<tag>

   (see `flock/tags`_ for valid values for ``<tag>``)


.. |downloads_flock| image:: https://img.shields.io/conda/dn/bioconda/flock.svg?style=flat
   :alt:   (downloads)
.. |docker_flock| image:: https://quay.io/repository/biocontainers/flock/status
   :target: https://quay.io/repository/biocontainers/flock
.. _`flock/tags`: https://quay.io/repository/biocontainers/flock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flock/README.html