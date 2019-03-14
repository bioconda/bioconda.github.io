:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stamp'
.. highlight: bash

stamp
=====

.. conda:recipe:: stamp
   :replaces_section_title:

   A graphical software package for analyzing taxonomic and functional profiles.

   :homepage: http://pypi.python.org/pypi/stamp/
   :license: GPL-3.0
   :recipe: /`stamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stamp/meta.yaml>`_

   


.. conda:package:: stamp

   |downloads_stamp| |docker_stamp|

   :versions: 2.1.3-1, 2.1.3-0
   
   :depends biom-format: >=2.0.1
   
   :depends matplotlib: >=1.4.2
   
   :depends numpy: >=1.9.1
   
   :depends pyqi: >=0.3.2
   
   :depends pyqt: 4.*
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: >=0.15.1
   
   :depends six: >=1.3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stamp

   and update with::

      conda update stamp

   or use the docker container::

      docker pull quay.io/biocontainers/stamp:<tag>

   (see `stamp/tags`_ for valid values for ``<tag>``)


.. |downloads_stamp| image:: https://img.shields.io/conda/dn/bioconda/stamp.svg?style=flat
   :alt:   (downloads)
.. |docker_stamp| image:: https://quay.io/repository/biocontainers/stamp/status
   :target: https://quay.io/repository/biocontainers/stamp
.. _`stamp/tags`: https://quay.io/repository/biocontainers/stamp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stamp/README.html