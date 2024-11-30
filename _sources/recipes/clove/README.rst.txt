:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clove'
.. highlight: bash

clove
=====

.. conda:recipe:: clove
   :replaces_section_title:
   :noindex:

   CLOVE\: Classification of genomic fusions into structural variation events.

   :homepage: https://github.com/PapenfussLab/clove
   :license: GPL-2.0
   :recipe: /`clove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clove/meta.yaml>`_

   


.. conda:package:: clove

   |downloads_clove| |docker_clove|

   :versions:
      
      

      ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install clove

   and update with::

      mamba update clove

  To create a new environment, run::

      mamba create --name myenvname clove

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clove:<tag>

   (see `clove/tags`_ for valid values for ``<tag>``)


.. |downloads_clove| image:: https://img.shields.io/conda/dn/bioconda/clove.svg?style=flat
   :target: https://anaconda.org/bioconda/clove
   :alt:   (downloads)
.. |docker_clove| image:: https://quay.io/repository/biocontainers/clove/status
   :target: https://quay.io/repository/biocontainers/clove
.. _`clove/tags`: https://quay.io/repository/biocontainers/clove?tab=tags


.. raw:: html

    <script>
        var package = "clove";
        var versions = ["0.17","0.17","0.17"];
    </script>





Notes
-----
Clove is a Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"clove\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"clove \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clove/README.html