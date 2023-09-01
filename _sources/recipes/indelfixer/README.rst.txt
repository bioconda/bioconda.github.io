:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'indelfixer'
.. highlight: bash

indelfixer
==========

.. conda:recipe:: indelfixer
   :replaces_section_title:
   :noindex:

   A sensitive aligner for 454\, Illumina and PacBio data\, employing a full Smith\-Waterman alignment against a reference.

   :homepage: https://github.com/cbg-ethz/InDelFixer
   :license: GNU General Public License v3.0
   :recipe: /`indelfixer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/indelfixer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/indelfixer/meta.yaml>`_

   


.. conda:package:: indelfixer

   |downloads_indelfixer| |docker_indelfixer|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends openjdk: 
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

      mamba install indelfixer

   and update with::

      mamba update indelfixer

  To create a new environment, run::

      mamba create --name myenvname indelfixer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/indelfixer:<tag>

   (see `indelfixer/tags`_ for valid values for ``<tag>``)


.. |downloads_indelfixer| image:: https://img.shields.io/conda/dn/bioconda/indelfixer.svg?style=flat
   :target: https://anaconda.org/bioconda/indelfixer
   :alt:   (downloads)
.. |docker_indelfixer| image:: https://quay.io/repository/biocontainers/indelfixer/status
   :target: https://quay.io/repository/biocontainers/indelfixer
.. _`indelfixer/tags`: https://quay.io/repository/biocontainers/indelfixer?tab=tags


.. raw:: html

    <script>
        var package = "indelfixer";
        var versions = ["1.1","1.1","1.1"];
    </script>





Notes
-----
InDelFixer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"InDelFixer\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"InDelFixer \-Xms512m \-Xmx1G\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/indelfixer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/indelfixer/README.html