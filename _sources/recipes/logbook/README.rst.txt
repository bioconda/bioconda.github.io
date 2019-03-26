:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'logbook'
.. highlight: bash

logbook
=======

.. conda:recipe:: logbook
   :replaces_section_title:

   A logging replacement for Python

   :homepage: http://logbook.pocoo.org/
   :license: BSD
   :recipe: /`logbook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logbook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logbook/meta.yaml>`_

   


.. conda:package:: logbook

   |downloads_logbook| |docker_logbook|

   :versions: 1.4.3-0, 1.4.1-0, 1.0.0-1, 1.0.0-0, 0.12.2-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install logbook

   and update with::

      conda update logbook

   or use the docker container::

      docker pull quay.io/biocontainers/logbook:<tag>

   (see `logbook/tags`_ for valid values for ``<tag>``)


.. |downloads_logbook| image:: https://img.shields.io/conda/dn/bioconda/logbook.svg?style=flat
   :alt:   (downloads)
.. |docker_logbook| image:: https://quay.io/repository/biocontainers/logbook/status
   :target: https://quay.io/repository/biocontainers/logbook
.. _`logbook/tags`: https://quay.io/repository/biocontainers/logbook?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/logbook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/logbook/README.html