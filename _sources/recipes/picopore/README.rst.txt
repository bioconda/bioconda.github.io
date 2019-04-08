:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picopore'
.. highlight: bash

picopore
========

.. conda:recipe:: picopore
   :replaces_section_title:

   A tool for reducing the size of Oxford Nanopore Technologies\' datasets without losing information.

   :homepage: https://github.com/scottgigante/picopore
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`picopore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picopore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picopore/meta.yaml>`_

   


.. conda:package:: picopore

   |downloads_picopore| |docker_picopore|

   :versions: 1.2.0-1, 1.2.0-0, 1.1.5-0, 1.1.4-0, 1.1.2-0, 1.0.0-0, 0.2.2-0, 0.2.1-0
   
   :depends future: 
   :depends h5py: >2.2.0
   :depends hdf5: >=1.10.2,<1.10.3.0a0
   :depends python: 
   :depends watchdog: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install picopore

   and update with::

      conda update picopore

   or use the docker container::

      docker pull quay.io/biocontainers/picopore:<tag>

   (see `picopore/tags`_ for valid values for ``<tag>``)


.. |downloads_picopore| image:: https://img.shields.io/conda/dn/bioconda/picopore.svg?style=flat
   :alt:   (downloads)
.. |docker_picopore| image:: https://quay.io/repository/biocontainers/picopore/status
   :target: https://quay.io/repository/biocontainers/picopore
.. _`picopore/tags`: https://quay.io/repository/biocontainers/picopore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picopore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picopore/README.html