:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'figtree'
.. highlight: bash

figtree
=======

.. conda:recipe:: figtree
   :replaces_section_title:
   :noindex:

   FigTree is designed as a graphical viewer of phylogenetic trees and as a program for producing publication\-ready figures.

   :homepage: https://github.com/rambaut/figtree
   :license: GPL / GPLv2
   :recipe: /`figtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/figtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/figtree/meta.yaml>`_

   


.. conda:package:: figtree

   |downloads_figtree| |docker_figtree|

   :versions:
      
      

      ``1.4.4-1``,  ``1.4.4-0``

      

   
   :depends openjdk: ``>=5``
   :depends python: 
   :depends xorg-libxtst: 
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

      mamba install figtree

   and update with::

      mamba update figtree

  To create a new environment, run::

      mamba create --name myenvname figtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/figtree:<tag>

   (see `figtree/tags`_ for valid values for ``<tag>``)


.. |downloads_figtree| image:: https://img.shields.io/conda/dn/bioconda/figtree.svg?style=flat
   :target: https://anaconda.org/bioconda/figtree
   :alt:   (downloads)
.. |docker_figtree| image:: https://quay.io/repository/biocontainers/figtree/status
   :target: https://quay.io/repository/biocontainers/figtree
.. _`figtree/tags`: https://quay.io/repository/biocontainers/figtree?tab=tags


.. raw:: html

    <script>
        var package = "figtree";
        var versions = ["1.4.4","1.4.4"];
    </script>





Notes
-----
FigTree is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"figtree\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"figtree \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/figtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/figtree/README.html