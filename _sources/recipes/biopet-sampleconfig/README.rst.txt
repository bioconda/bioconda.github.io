:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-sampleconfig'
.. highlight: bash

biopet-sampleconfig
===================

.. conda:recipe:: biopet-sampleconfig
   :replaces_section_title:
   :noindex:

   \#\#\#\# Tools \- ExtractTsv  This mean can extract samples\, libraries and readgroups from a sample config file.

   :homepage: https://github.com/biopet/sampleconfig
   :license: MIT
   :recipe: /`biopet-sampleconfig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-sampleconfig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-sampleconfig/meta.yaml>`_

   \#\#\#\# Tools \- ExtractTsv

   This mean can extract samples\, libraries and readgroups from a sample config file. This meant as a supporting tool inside wdl pipelines.
   It can also output a single layer as tsv file.


   \#\#\#\# Tools \- ReadFromTsv

   This tool enables a user to create a full sample sheet in JSON format or
   YAML format\, suitable for all Biopet Queue pipelines\, from TSV file\(s\).


   \#\#\#\# Tools \- CromwellArrays

   This tool will convert the sample configs to a array based format that can be used inside wdl pipelines.
   This tool is only to support biowdl pipelines.


   \#\#\#\# Tools \- CaseControl

    This tool will extract the case\-control pairs from a sample config file.
    It will read the headers of the bam files to confirm that samples do exist.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/sampleconfig



.. conda:package:: biopet-sampleconfig

   |downloads_biopet-sampleconfig| |docker_biopet-sampleconfig|

   :versions:
      
      

      ``0.3-1``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biopet-sampleconfig

   and update with::

      mamba update biopet-sampleconfig

  To create a new environment, run::

      mamba create --name myenvname biopet-sampleconfig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-sampleconfig:<tag>

   (see `biopet-sampleconfig/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-sampleconfig| image:: https://img.shields.io/conda/dn/bioconda/biopet-sampleconfig.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-sampleconfig
   :alt:   (downloads)
.. |docker_biopet-sampleconfig| image:: https://quay.io/repository/biocontainers/biopet-sampleconfig/status
   :target: https://quay.io/repository/biocontainers/biopet-sampleconfig
.. _`biopet-sampleconfig/tags`: https://quay.io/repository/biocontainers/biopet-sampleconfig?tab=tags


.. raw:: html

    <script>
        var package = "biopet-sampleconfig";
        var versions = ["0.3","0.3","0.2","0.2","0.1"];
    </script>





Notes
-----
biopet\-sampleconfig is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-sampleconfig\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-sampleconfig \-Xms512m \-Xmx1g\'.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-sampleconfig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-sampleconfig/README.html