:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-bamstats'
.. highlight: bash

biopet-bamstats
===============

.. conda:recipe:: biopet-bamstats
   :replaces_section_title:
   :noindex:

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

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biopet-bamstats

   and update with::

      mamba update biopet-bamstats

  To create a new environment, run::

      mamba create --name myenvname biopet-bamstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-bamstats:<tag>

   (see `biopet-bamstats/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-bamstats| image:: https://img.shields.io/conda/dn/bioconda/biopet-bamstats.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-bamstats
   :alt:   (downloads)
.. |docker_biopet-bamstats| image:: https://quay.io/repository/biocontainers/biopet-bamstats/status
   :target: https://quay.io/repository/biocontainers/biopet-bamstats
.. _`biopet-bamstats/tags`: https://quay.io/repository/biocontainers/biopet-bamstats?tab=tags


.. raw:: html

    <script>
        var package = "biopet-bamstats";
        var versions = ["1.0.1","1.0.1","1.0","1.0"];
    </script>





Notes
-----
biopet\-bamstats is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-bamstats\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-bamstats \-Xms512m \-Xmx1g\'.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-bamstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-bamstats/README.html