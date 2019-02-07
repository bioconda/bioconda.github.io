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

   :versions: 1.2.0, 1.1.5, 1.1.4, 1.1.2, 1.0.0, 0.2.2, 0.2.1

   :depends: :conda:package:`future`  :conda:package:`h5py` >2.2.0 :conda:package:`hdf5`  :conda:package:`python` 2.7* :conda:package:`watchdog`  

   :required~by: |required_by_picopore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install picopore

   and update with::

      conda update picopore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/picopore


.. |required_by_picopore| conda:required_by:: picopore
.. |downloads_picopore| image:: https://img.shields.io/conda/dn/bioconda/picopore.svg?style=flat
   :alt:   (downloads)
.. |docker_picopore| image:: https://quay.io/repository/biocontainers/picopore/status
   :target: https://quay.io/repository/biocontainers/picopore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picopore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picopore/README.html

