:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cansnper'
.. highlight: bash

cansnper
========

.. conda:recipe:: cansnper
   :replaces_section_title:

   A hierarchical genotype classifier of clonal pathogens.

   :homepage: https://github.com/adrlar/CanSNPer/
   :license: GPLv3
   :recipe: /`cansnper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansnper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansnper/meta.yaml>`_

   


.. conda:package:: cansnper

   |downloads_cansnper| |docker_cansnper|

   :versions: 1.0.10-1, 1.0.10-0, 1.0.8-1, 1.0.8-0
   
   :depends ete2: 
   :depends numpy: 
   :depends progressivemauve: 
   :depends pyqt: 4.*
   :depends python: <3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cansnper

   and update with::

      conda update cansnper

   or use the docker container::

      docker pull quay.io/biocontainers/cansnper:<tag>

   (see `cansnper/tags`_ for valid values for ``<tag>``)


.. |downloads_cansnper| image:: https://img.shields.io/conda/dn/bioconda/cansnper.svg?style=flat
   :target: https://anaconda.org/bioconda/cansnper
   :alt:   (downloads)
.. |docker_cansnper| image:: https://quay.io/repository/biocontainers/cansnper/status
   :target: https://quay.io/repository/biocontainers/cansnper
.. _`cansnper/tags`: https://quay.io/repository/biocontainers/cansnper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cansnper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cansnper/README.html