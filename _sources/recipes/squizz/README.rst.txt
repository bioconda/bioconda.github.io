:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squizz'
.. highlight: bash

squizz
======

.. conda:recipe:: squizz
   :replaces_section_title:

   Squizz is a sequence\/alignment format checker\, but it has some conversion capabilities too.

   :homepage: http://ftp.pasteur.fr/pub/gensoft/projects/squizz/
   :license: GPL 2
   :recipe: /`squizz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squizz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squizz/meta.yaml>`_

   


.. conda:package:: squizz

   |downloads_squizz| |docker_squizz|

   :versions: 0.99d-1, 0.99d-0
   
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install squizz

   and update with::

      conda update squizz

   or use the docker container::

      docker pull quay.io/biocontainers/squizz:<tag>

   (see `squizz/tags`_ for valid values for ``<tag>``)


.. |downloads_squizz| image:: https://img.shields.io/conda/dn/bioconda/squizz.svg?style=flat
   :target: https://anaconda.org/bioconda/squizz
   :alt:   (downloads)
.. |docker_squizz| image:: https://quay.io/repository/biocontainers/squizz/status
   :target: https://quay.io/repository/biocontainers/squizz
.. _`squizz/tags`: https://quay.io/repository/biocontainers/squizz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squizz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squizz/README.html