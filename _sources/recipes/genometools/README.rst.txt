:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometools'
.. highlight: bash

genometools
===========

.. conda:recipe:: genometools
   :replaces_section_title:

   GenomeTools\: Scripts and Classes For Working With Genomic Data.

   :homepage: https://github.com/flo-compbio/genometools
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`genometools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometools/meta.yaml>`_

   


.. conda:package:: genometools

   |downloads_genometools| |docker_genometools|

   :versions: 1.2.1-0
   
   :depends ftputil: 
   
   :depends numpy: 
   
   :depends python: 2.7*
   
   :depends requests: 
   
   :depends unicodecsv: 
   
   :depends xmltodict: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genometools

   and update with::

      conda update genometools

   or use the docker container::

      docker pull quay.io/biocontainers/genometools:<tag>

   (see `genometools/tags`_ for valid values for ``<tag>``)


.. |downloads_genometools| image:: https://img.shields.io/conda/dn/bioconda/genometools.svg?style=flat
   :alt:   (downloads)
.. |docker_genometools| image:: https://quay.io/repository/biocontainers/genometools/status
   :target: https://quay.io/repository/biocontainers/genometools
.. _`genometools/tags`: https://quay.io/repository/biocontainers/genometools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometools/README.html