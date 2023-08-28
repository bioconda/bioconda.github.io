:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-scatterregions'
.. highlight: bash

biopet-scatterregions
=====================

.. conda:recipe:: biopet-scatterregions
   :replaces_section_title:
   :noindex:

   This tool breaks a reference or bed file into smaller scatter regions of equal size.

   :homepage: https://github.com/biopet/scatterregions
   :license: MIT
   :recipe: /`biopet-scatterregions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-scatterregions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-scatterregions/meta.yaml>`_

   This tool breaks a reference or bed file into smaller scatter regions of equal size. This can be used for processing inside a pipeline.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/scatterregions



.. conda:package:: biopet-scatterregions

   |downloads_biopet-scatterregions| |docker_biopet-scatterregions|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
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

      mamba install biopet-scatterregions

   and update with::

      mamba update biopet-scatterregions

  To create a new environment, run::

      mamba create --name myenvname biopet-scatterregions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-scatterregions:<tag>

   (see `biopet-scatterregions/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-scatterregions| image:: https://img.shields.io/conda/dn/bioconda/biopet-scatterregions.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-scatterregions
   :alt:   (downloads)
.. |docker_biopet-scatterregions| image:: https://quay.io/repository/biocontainers/biopet-scatterregions/status
   :target: https://quay.io/repository/biocontainers/biopet-scatterregions
.. _`biopet-scatterregions/tags`: https://quay.io/repository/biocontainers/biopet-scatterregions?tab=tags


.. raw:: html

    <script>
        var package = "biopet-scatterregions";
        var versions = ["0.2","0.2","0.1","0.1"];
    </script>





Notes
-----
biopet\-scatterregions is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-scatterregions\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-scatterregions \-Xms512m \-Xmx1g\'.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-scatterregions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-scatterregions/README.html