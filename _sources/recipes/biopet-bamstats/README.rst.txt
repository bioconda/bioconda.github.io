:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-bamstats'
.. highlight: bash

biopet-bamstats
===============

.. conda:recipe:: biopet-bamstats
   :replaces_section_title:

   BamStats is a package that contains tools to generate stats from a BAM file\, merge those stats for multiple samples\, and validate the generated stats files.

   :homepage: https://github.com/biopet/bamstats
   :license: MIT
   :recipe: /`biopet-bamstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-bamstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-bamstats/meta.yaml>`_

   BamStats is a package that contains tools
   to generate stats from a BAM file\,
   merge those stats for multiple samples\,
   and validate the generated stats files.


   \#\#\#\# Mode \- Generate

   Generate reports clipping stats\, flag stats\, insert size and mapping quality on a BAM file. It outputs
   a JSON file\, but can optionally also output in TSV format.

   The output of the JSON file is organized in a sample \- library \- readgroup tree structure.
   If readgroups in the BAM file are not annotated with sample \(\`SM\`\) and library \(\`LB\`\) tags
   an error will be thrown.
   This can be fixed by using \`samtools addreplacerg\` or \`picard AddOrReplaceReadGroups\`.


   \#\#\#\# Mode \- Merge

   This module will merge bamstats files together and keep the sample\/library\/readgroup structure.
   Values for the same readgroups will be added.
   It will also validate the resulting file.


   \#\#\#\# Mode \- Validate

   Validates a BamStats file.
   If aggregation values can not be regenerated the file is considered corrupt.
   This should only happen when the file has been manually edited.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/bamstats



.. conda:package:: biopet-bamstats

   |downloads_biopet-bamstats| |docker_biopet-bamstats|

   :versions: 1.0.1-0, 1.0-0
   
   :depends openjdk: >=8,<9
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet-bamstats

   and update with::

      conda update biopet-bamstats

   or use the docker container::

      docker pull quay.io/biocontainers/biopet-bamstats:<tag>

   (see `biopet-bamstats/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-bamstats| image:: https://img.shields.io/conda/dn/bioconda/biopet-bamstats.svg?style=flat
   :alt:   (downloads)
.. |docker_biopet-bamstats| image:: https://quay.io/repository/biocontainers/biopet-bamstats/status
   :target: https://quay.io/repository/biocontainers/biopet-bamstats
.. _`biopet-bamstats/tags`: https://quay.io/repository/biocontainers/biopet-bamstats?tab=tags






Notes
-----
biopet\-bamstats is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-bamstats\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-bamstats \-Xms512m \-Xmx1g\'.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-bamstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-bamstats/README.html