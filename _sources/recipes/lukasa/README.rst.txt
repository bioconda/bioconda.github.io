:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lukasa'
.. highlight: bash

lukasa
======

.. conda:recipe:: lukasa
   :replaces_section_title:
   :noindex:

   Fast and accurate mapping of proteins against eukaryotic genomes

   :homepage: https://github.com/pvanheus/lukasa
   :license: GPL / GPL-3.0
   :recipe: /`lukasa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lukasa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lukasa/meta.yaml>`_

   Lukasa combines MetaEUK and spaln to rapidly identify matches between proteins and genomic contigs and
   accurately map the proteins to the identified regions. The output is GFF3\, suitable for use in 
   eukaryotic genome annotation.


.. conda:package:: lukasa

   |downloads_lukasa| |docker_lukasa|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends cwltool: 
   :depends metaeuk: 
   :depends python: 
   :depends samtools: 
   :depends spaln: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lukasa

   and update with::

      conda update lukasa

   or use the docker container::

      docker pull quay.io/biocontainers/lukasa:<tag>

   (see `lukasa/tags`_ for valid values for ``<tag>``)


.. |downloads_lukasa| image:: https://img.shields.io/conda/dn/bioconda/lukasa.svg?style=flat
   :target: https://anaconda.org/bioconda/lukasa
   :alt:   (downloads)
.. |docker_lukasa| image:: https://quay.io/repository/biocontainers/lukasa/status
   :target: https://quay.io/repository/biocontainers/lukasa
.. _`lukasa/tags`: https://quay.io/repository/biocontainers/lukasa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lukasa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lukasa/README.html