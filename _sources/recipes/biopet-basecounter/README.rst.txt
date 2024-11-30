:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-basecounter'
.. highlight: bash

biopet-basecounter
==================

.. conda:recipe:: biopet-basecounter
   :replaces_section_title:
   :noindex:

   BaseCounter counts the bases from genes and transcripts and outputs information on the counts in exonic and intronic regions as well as information on the counts on the sense and antisense strands.

   :homepage: https://github.com/biopet/basecounter
   :license: MIT
   :recipe: /`biopet-basecounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-basecounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-basecounter/meta.yaml>`_

   BaseCounter counts the bases from genes and transcripts and
   outputs information on the counts in exonic and intronic
   regions as well as information on the counts on the sense
   and antisense strands.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/basecounter


.. conda:package:: biopet-basecounter

   |downloads_biopet-basecounter| |docker_biopet-basecounter|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biopet-basecounter

   and update with::

      mamba update biopet-basecounter

  To create a new environment, run::

      mamba create --name myenvname biopet-basecounter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-basecounter:<tag>

   (see `biopet-basecounter/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-basecounter| image:: https://img.shields.io/conda/dn/bioconda/biopet-basecounter.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-basecounter
   :alt:   (downloads)
.. |docker_biopet-basecounter| image:: https://quay.io/repository/biocontainers/biopet-basecounter/status
   :target: https://quay.io/repository/biocontainers/biopet-basecounter
.. _`biopet-basecounter/tags`: https://quay.io/repository/biocontainers/biopet-basecounter?tab=tags


.. raw:: html

    <script>
        var package = "biopet-basecounter";
        var versions = ["0.1","0.1"];
    </script>





Notes
-----
biopet\-basecounter is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-basecounter\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-basecounter \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-basecounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-basecounter/README.html