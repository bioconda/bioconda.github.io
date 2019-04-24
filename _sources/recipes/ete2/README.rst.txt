:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ete2'
.. highlight: bash

ete2
====

.. conda:recipe:: ete2
   :replaces_section_title:

   Phylogenetic tree analyses and exploration

   :homepage: http://etetoolkit.org/
   :license: GPLv3
   :recipe: /`ete2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete2/meta.yaml>`_

   


.. conda:package:: ete2

   |downloads_ete2| |docker_ete2|

   :versions: 2.3.10-3, 2.3.10-2, 2.3.10-1, 2.3.10-0, 2.2.1072-2
   
   :depends lxml: 
   :depends mysql-python: 
   :depends numpy: 
   :depends pyqt: >=4.11.4,<4.12.0a0
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ete2

   and update with::

      conda update ete2

   or use the docker container::

      docker pull quay.io/biocontainers/ete2:<tag>

   (see `ete2/tags`_ for valid values for ``<tag>``)


.. |downloads_ete2| image:: https://img.shields.io/conda/dn/bioconda/ete2.svg?style=flat
   :alt:   (downloads)
.. |docker_ete2| image:: https://quay.io/repository/biocontainers/ete2/status
   :target: https://quay.io/repository/biocontainers/ete2
.. _`ete2/tags`: https://quay.io/repository/biocontainers/ete2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ete2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ete2/README.html