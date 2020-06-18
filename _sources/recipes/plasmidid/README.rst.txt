:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidid'
.. highlight: bash

plasmidid
=========

.. conda:recipe:: plasmidid
   :replaces_section_title:
   :noindex:

   Pipeline for plasmid identification and reconstruction

   :homepage: https://github.com/BU-ISCIII/plasmidID
   :license: GPLv3
   :recipe: /`plasmidid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidid/meta.yaml>`_

   PlasmidID is a mapping\-based\, assembly\-assisted plasmid identification tool that analyzes and gives graphic solution for plasmid identification.


.. conda:package:: plasmidid

   |downloads_plasmidid| |docker_plasmidid|

   :versions:
      
      

      ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.5.2-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends circos: 
   :depends gawk: 
   :depends mash: ``>=2``
   :depends numpy: 
   :depends pandas: 
   :depends prokka: 
   :depends python: ``3.6.*``
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends spades: 
   :depends tabulate: 
   :depends trimmomatic: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plasmidid

   and update with::

      conda update plasmidid

   or use the docker container::

      docker pull quay.io/biocontainers/plasmidid:<tag>

   (see `plasmidid/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidid| image:: https://img.shields.io/conda/dn/bioconda/plasmidid.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidid
   :alt:   (downloads)
.. |docker_plasmidid| image:: https://quay.io/repository/biocontainers/plasmidid/status
   :target: https://quay.io/repository/biocontainers/plasmidid
.. _`plasmidid/tags`: https://quay.io/repository/biocontainers/plasmidid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidid/README.html