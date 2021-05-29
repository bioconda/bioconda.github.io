:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rfplasmid'
.. highlight: bash

rfplasmid
=========

.. conda:recipe:: rfplasmid
   :replaces_section_title:
   :noindex:

   RFPlasmid predicts plasmid contigs from assemblies using single copy marker genes\, plasmid genes\, and kmers.

   :homepage: https://github.com/aldertzomer/RFPlasmid
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`rfplasmid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfplasmid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfplasmid/meta.yaml>`_

   


.. conda:package:: rfplasmid

   |downloads_rfplasmid| |docker_rfplasmid|

   :versions:
      
      

      ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``

      

   
   :depends biopython: 
   :depends checkm-genome: 
   :depends diamond: 
   :depends kmer-jellyfish: 
   :depends pandas: 
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.6``
   :depends r-randomforest: 
   :depends wget: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rfplasmid

   and update with::

      conda update rfplasmid

   or use the docker container::

      docker pull quay.io/biocontainers/rfplasmid:<tag>

   (see `rfplasmid/tags`_ for valid values for ``<tag>``)


.. |downloads_rfplasmid| image:: https://img.shields.io/conda/dn/bioconda/rfplasmid.svg?style=flat
   :target: https://anaconda.org/bioconda/rfplasmid
   :alt:   (downloads)
.. |docker_rfplasmid| image:: https://quay.io/repository/biocontainers/rfplasmid/status
   :target: https://quay.io/repository/biocontainers/rfplasmid
.. _`rfplasmid/tags`: https://quay.io/repository/biocontainers/rfplasmid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rfplasmid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rfplasmid/README.html