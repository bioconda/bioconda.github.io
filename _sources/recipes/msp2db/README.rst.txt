:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msp2db'
.. highlight: bash

msp2db
======

.. conda:recipe:: msp2db
   :replaces_section_title:

   Python package to create an SQLite database from a collection of MSP mass spectromertry spectra files. Currently works with MSP files formated as MassBank records or as MoNA records. The resulting SQLite database can be used for spectral matching with msPurity Bioconductor R package\,

   :homepage: https://github.com/computational-metabolomics/msp2db
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`msp2db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msp2db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msp2db/meta.yaml>`_

   


.. conda:package:: msp2db

   |downloads_msp2db| |docker_msp2db|

   :versions: 0.0.6-0
   
   :depends pubchempy: 
   
   :depends python: 
   
   :depends six: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msp2db

   and update with::

      conda update msp2db

   or use the docker container::

      docker pull quay.io/biocontainers/msp2db:<tag>

   (see `msp2db/tags`_ for valid values for ``<tag>``)


.. |downloads_msp2db| image:: https://img.shields.io/conda/dn/bioconda/msp2db.svg?style=flat
   :alt:   (downloads)
.. |docker_msp2db| image:: https://quay.io/repository/biocontainers/msp2db/status
   :target: https://quay.io/repository/biocontainers/msp2db
.. _`msp2db/tags`: https://quay.io/repository/biocontainers/msp2db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msp2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msp2db/README.html