:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpgenie'
.. highlight: bash

snpgenie
========

.. conda:recipe:: snpgenie
   :replaces_section_title:
   :noindex:

   Program for estimating πN\/πS\, dN\/dS\, and other diversity measures from next\-generation sequencing data

   :homepage: https://github.com/chasewnelson/SNPGenie
   :license: GPL / GPL-3.0
   :recipe: /`snpgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpgenie/meta.yaml>`_

   


.. conda:package:: snpgenie

   |downloads_snpgenie| |docker_snpgenie|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends perl: 
   :depends perl-data-dumper: 
   :depends perl-file-temp: 
   :depends perl-io-handle: 
   :depends perl-list-util: 
   :depends perl-parallel-forkmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snpgenie

   and update with::

      conda update snpgenie

   or use the docker container::

      docker pull quay.io/biocontainers/snpgenie:<tag>

   (see `snpgenie/tags`_ for valid values for ``<tag>``)


.. |downloads_snpgenie| image:: https://img.shields.io/conda/dn/bioconda/snpgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/snpgenie
   :alt:   (downloads)
.. |docker_snpgenie| image:: https://quay.io/repository/biocontainers/snpgenie/status
   :target: https://quay.io/repository/biocontainers/snpgenie
.. _`snpgenie/tags`: https://quay.io/repository/biocontainers/snpgenie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpgenie/README.html