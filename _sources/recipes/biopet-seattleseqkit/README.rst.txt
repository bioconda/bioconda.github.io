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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biopet-seattleseqkit

   and update with::

      mamba update biopet-seattleseqkit

  To create a new environment, run::

      mamba create --name myenvname biopet-seattleseqkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-seattleseqkit:<tag>

   (see `biopet-seattleseqkit/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-seattleseqkit| image:: https://img.shields.io/conda/dn/bioconda/biopet-seattleseqkit.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-seattleseqkit
   :alt:   (downloads)
.. |docker_biopet-seattleseqkit| image:: https://quay.io/repository/biocontainers/biopet-seattleseqkit/status
   :target: https://quay.io/repository/biocontainers/biopet-seattleseqkit
.. _`biopet-seattleseqkit/tags`: https://quay.io/repository/biocontainers/biopet-seattleseqkit?tab=tags


.. raw:: html

    <script>
        var package = "biopet-seattleseqkit";
        var versions = ["0.2","0.2","0.1","0.1"];
    </script>





Notes
-----
biopet\-seattleseqkit is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-seattleseqkit\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-seattleseqkit \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-seattleseqkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-seattleseqkit/README.html