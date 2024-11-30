:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepgenome'
.. highlight: bash

pepgenome
=========

.. conda:recipe:: pepgenome
   :replaces_section_title:
   :noindex:

   A java tool to map peptide and peptidoform evideces to ENSEMBL Genome Coordinates

   :homepage: https://github.com/bigbio/pgatk/
   :license: Apache / Apache-2.0
   :recipe: /`pepgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepgenome/meta.yaml>`_

   


.. conda:package:: pepgenome

   |downloads_pepgenome| |docker_pepgenome|

   :versions:
      
      

      ``1.1.beta-1``,  ``1.1.beta-0``,  ``1.0.beta-0``

      

   
   :depends openjdk: ``>=6``
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

      mamba install pepgenome

   and update with::

      mamba update pepgenome

  To create a new environment, run::

      mamba create --name myenvname pepgenome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pepgenome:<tag>

   (see `pepgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_pepgenome| image:: https://img.shields.io/conda/dn/bioconda/pepgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/pepgenome
   :alt:   (downloads)
.. |docker_pepgenome| image:: https://quay.io/repository/biocontainers/pepgenome/status
   :target: https://quay.io/repository/biocontainers/pepgenome
.. _`pepgenome/tags`: https://quay.io/repository/biocontainers/pepgenome?tab=tags


.. raw:: html

    <script>
        var package = "pepgenome";
        var versions = ["1.1.beta","1.1.beta","1.0.beta"];
    </script>





Notes
-----
PepGenome is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"PepGenome \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepgenome/README.html