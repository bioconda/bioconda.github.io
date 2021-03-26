:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-seattleseqkit'
.. highlight: bash

biopet-seattleseqkit
====================

.. conda:recipe:: biopet-seattleseqkit
   :replaces_section_title:
   :noindex:

   \#\#\#\# Tool \- Filter  This tool can filter a seattle seq file.

   :homepage: https://github.com/biopet/seattleseqkit
   :license: MIT
   :recipe: /`biopet-seattleseqkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-seattleseqkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-seattleseqkit/meta.yaml>`_

   \#\#\#\# Tool \- Filter

   This tool can filter a seattle seq file.
   A given bed file will only select variants inside this regions.
   Filtering on specific fields is also possible.
       
           

   \#\#\#\# Tool \- MergeGenes

   This tool can merge gene counts from the filter step into 1 combined matrix. Genes that are not there will be filled with 0.
       
           

   \#\#\#\# Tool \- MultiFilter

   This tool can filter a seattle seq file.
   A given bed file will only select variants inside this regions.
   Filtering on specific fields is also possible.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/seattleseqkit


.. conda:package:: biopet-seattleseqkit

   |downloads_biopet-seattleseqkit| |docker_biopet-seattleseqkit|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet-seattleseqkit

   and update with::

      conda update biopet-seattleseqkit

   or use the docker container::

      docker pull quay.io/biocontainers/biopet-seattleseqkit:<tag>

   (see `biopet-seattleseqkit/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-seattleseqkit| image:: https://img.shields.io/conda/dn/bioconda/biopet-seattleseqkit.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-seattleseqkit
   :alt:   (downloads)
.. |docker_biopet-seattleseqkit| image:: https://quay.io/repository/biocontainers/biopet-seattleseqkit/status
   :target: https://quay.io/repository/biocontainers/biopet-seattleseqkit
.. _`biopet-seattleseqkit/tags`: https://quay.io/repository/biocontainers/biopet-seattleseqkit?tab=tags






Notes
-----
biopet\-seattleseqkit is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-seattleseqkit\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-seattleseqkit \-Xms512m \-Xmx1g\'. 


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-seattleseqkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-seattleseqkit/README.html