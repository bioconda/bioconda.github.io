:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanolyse'
.. highlight: bash

nanolyse
========

.. conda:recipe:: nanolyse
   :replaces_section_title:

   Removing lambda DNA control reads from fastq dataset

   :homepage: https://github.com/wdecoster/NanoLyse
   :license: MIT / MIT License
   :recipe: /`nanolyse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanolyse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanolyse/meta.yaml>`_

   


.. conda:package:: nanolyse

   |downloads_nanolyse| |docker_nanolyse|

   :versions: 1.1.0-1, 1.1.0-0, 1.0.0-0, 0.5.1-0, 0.4.0-0, 0.2.0-0
   
   :depends biopython: 
   
   :depends mappy: >=2.2
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanolyse

   and update with::

      conda update nanolyse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanolyse:<tag>

   (see `nanolyse/tags`_ for valid values for ``<tag>``)


.. |downloads_nanolyse| image:: https://img.shields.io/conda/dn/bioconda/nanolyse.svg?style=flat
   :alt:   (downloads)
.. |docker_nanolyse| image:: https://quay.io/repository/biocontainers/nanolyse/status
   :target: https://quay.io/repository/biocontainers/nanolyse
.. _`nanolyse/tags`: https://quay.io/repository/biocontainers/nanolyse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanolyse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanolyse/README.html