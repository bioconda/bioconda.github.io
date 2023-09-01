:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consensusfixer'
.. highlight: bash

consensusfixer
==============

.. conda:recipe:: consensusfixer
   :replaces_section_title:
   :noindex:

   Computes a consensus sequence with wobbles\, ambiguous bases\, and in\-frame insertions\, from a NGS read alignment.

   :homepage: https://github.com/cbg-ethz/ConsensusFixer
   :license: GPL / GPL-3.0
   :recipe: /`consensusfixer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consensusfixer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consensusfixer/meta.yaml>`_

   


.. conda:package:: consensusfixer

   |downloads_consensusfixer| |docker_consensusfixer|

   :versions:
      
      

      ``0.4-3``,  ``0.4-2``,  ``0.4-0``,  ``0.3.1-0``

      

   
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

      mamba install consensusfixer

   and update with::

      mamba update consensusfixer

  To create a new environment, run::

      mamba create --name myenvname consensusfixer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/consensusfixer:<tag>

   (see `consensusfixer/tags`_ for valid values for ``<tag>``)


.. |downloads_consensusfixer| image:: https://img.shields.io/conda/dn/bioconda/consensusfixer.svg?style=flat
   :target: https://anaconda.org/bioconda/consensusfixer
   :alt:   (downloads)
.. |docker_consensusfixer| image:: https://quay.io/repository/biocontainers/consensusfixer/status
   :target: https://quay.io/repository/biocontainers/consensusfixer
.. _`consensusfixer/tags`: https://quay.io/repository/biocontainers/consensusfixer?tab=tags


.. raw:: html

    <script>
        var package = "consensusfixer";
        var versions = ["0.4","0.4","0.4","0.3.1"];
    </script>





Notes
-----
ConsensusFixer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"ConsensusFixer\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"ConsensusFixer \-Xms512m \-Xmx1G\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consensusfixer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consensusfixer/README.html