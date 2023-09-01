:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathwaymatcher'
.. highlight: bash

pathwaymatcher
==============

.. conda:recipe:: pathwaymatcher
   :replaces_section_title:
   :noindex:

   PathwayMatcher is a software tool writen in Java to search for pathways related to a list of proteins in Reactome.


   :homepage: https://github.com/PathwayAnalysisPlatform/PathwayMatcher
   :license: Apache License, Version 2.0
   :recipe: /`pathwaymatcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathwaymatcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathwaymatcher/meta.yaml>`_

   


.. conda:package:: pathwaymatcher

   |downloads_pathwaymatcher| |docker_pathwaymatcher|

   :versions:
      
      

      ``1.9.1-3``,  ``1.9.1-2``,  ``1.9.1-1``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8-1``,  ``1.7-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install pathwaymatcher

   and update with::

      mamba update pathwaymatcher

  To create a new environment, run::

      mamba create --name myenvname pathwaymatcher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pathwaymatcher:<tag>

   (see `pathwaymatcher/tags`_ for valid values for ``<tag>``)


.. |downloads_pathwaymatcher| image:: https://img.shields.io/conda/dn/bioconda/pathwaymatcher.svg?style=flat
   :target: https://anaconda.org/bioconda/pathwaymatcher
   :alt:   (downloads)
.. |docker_pathwaymatcher| image:: https://quay.io/repository/biocontainers/pathwaymatcher/status
   :target: https://quay.io/repository/biocontainers/pathwaymatcher
.. _`pathwaymatcher/tags`: https://quay.io/repository/biocontainers/pathwaymatcher?tab=tags


.. raw:: html

    <script>
        var package = "pathwaymatcher";
        var versions = ["1.9.1","1.9.1","1.9.1","1.8.1","1.8.1"];
    </script>





Notes
-----
PathwayMatcher is Java program that comes with a custom wrapper shell script.
By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"java \-Xms512m \-Xmx1g \-jar PathwayMatcher.jar\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathwaymatcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathwaymatcher/README.html