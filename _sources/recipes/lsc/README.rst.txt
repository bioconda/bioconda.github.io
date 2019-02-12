:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lsc'
.. highlight: bash

lsc
===

.. conda:recipe:: lsc
   :replaces_section_title:

   LSC is a long read error correction tool that offers fast correction with high sensitivity and good accuracy.

   :homepage: https://www.healthcare.uiowa.edu/labs/au/LSC/
   :license: Apache 2.0
   :recipe: /`lsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsc/meta.yaml>`_

   


.. conda:package:: lsc

   |downloads_lsc| |docker_lsc|

   :versions: 2.0-0
   
   :depends bowtie2: 
   
   :depends perl: 5.22.0*
   
   :depends python: 2.7*
   
   :depends samtools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lsc

   and update with::

      conda update lsc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lsc:<tag>

   (see `lsc/tags`_ for valid values for ``<tag>``)


.. |downloads_lsc| image:: https://img.shields.io/conda/dn/bioconda/lsc.svg?style=flat
   :alt:   (downloads)
.. |docker_lsc| image:: https://quay.io/repository/biocontainers/lsc/status
   :target: https://quay.io/repository/biocontainers/lsc
.. _`lsc/tags`: https://quay.io/repository/biocontainers/lsc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lsc/README.html