:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iva'
.. highlight: bash

iva
===

.. conda:recipe:: iva
   :replaces_section_title:

   Iterative Virus Assembler

   :homepage: https://github.com/sanger-pathogens/iva
   :license: GPL / GPLv3
   :recipe: /`iva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iva/meta.yaml>`_

   


.. conda:package:: iva

   |downloads_iva| |docker_iva|

   :versions: 1.0.9-1, 1.0.9-0, 1.0.7-0, 1.0.6-0
   
   :depends kmc: 
   
   :depends mummer: 
   
   :depends networkx: >=1.7
   
   :depends pyfastaq: >=3.10.0
   
   :depends pysam: >=0.8.1
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends samtools: 
   
   :depends smalt: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iva

   and update with::

      conda update iva

   or use the docker container::

      docker pull quay.io/repository/biocontainers/iva:<tag>

   (see `iva/tags`_ for valid values for ``<tag>``)


.. |downloads_iva| image:: https://img.shields.io/conda/dn/bioconda/iva.svg?style=flat
   :alt:   (downloads)
.. |docker_iva| image:: https://quay.io/repository/biocontainers/iva/status
   :target: https://quay.io/repository/biocontainers/iva
.. _`iva/tags`: https://quay.io/repository/biocontainers/iva?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iva/README.html