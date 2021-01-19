:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imsindel'
.. highlight: bash

imsindel
========

.. conda:recipe:: imsindel
   :replaces_section_title:
   :noindex:

   An accurate intermediate\-size indel detection tool incorporating de novo assembly and gapped global\-local alignment with split read analysis

   :homepage: https://github.com/NCGG-MGC/IMSindel
   :license: MIT
   :recipe: /`imsindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imsindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imsindel/meta.yaml>`_

   


.. conda:package:: imsindel

   |downloads_imsindel| |docker_imsindel|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends fasta3: 
   :depends mafft: 
   :depends rb-bio: 
   :depends ruby: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install imsindel

   and update with::

      conda update imsindel

   or use the docker container::

      docker pull quay.io/biocontainers/imsindel:<tag>

   (see `imsindel/tags`_ for valid values for ``<tag>``)


.. |downloads_imsindel| image:: https://img.shields.io/conda/dn/bioconda/imsindel.svg?style=flat
   :target: https://anaconda.org/bioconda/imsindel
   :alt:   (downloads)
.. |docker_imsindel| image:: https://quay.io/repository/biocontainers/imsindel/status
   :target: https://quay.io/repository/biocontainers/imsindel
.. _`imsindel/tags`: https://quay.io/repository/biocontainers/imsindel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imsindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imsindel/README.html