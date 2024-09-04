:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit'
.. highlight: bash

jvarkit
=======

.. conda:recipe:: jvarkit
   :replaces_section_title:
   :noindex:

   Java utilities for Bioinformatics.

   :homepage: https://github.com/lindenb/jvarkit
   :license: MIT / MIT License
   :recipe: /`jvarkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit/meta.yaml>`_
   :links: biotools: :biotools:`jvarkit`, doi: :doi:`10.6084/m9.figshare.1425030`

   


.. conda:package:: jvarkit

   |downloads_jvarkit| |docker_jvarkit|

   :versions:
      
      

      ``2024.08.25-1``,  ``2024.08.25-0``,  ``2024.08.01-0``,  ``2024.04.20-0``,  ``2023.09.07-0``

      

   
   :depends bcftools: ``>=1.20``
   :depends openjdk: ``>=11``
   :depends samtools: ``>=1.20``
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

      mamba install jvarkit

   and update with::

      mamba update jvarkit

  To create a new environment, run::

      mamba create --name myenvname jvarkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jvarkit:<tag>

   (see `jvarkit/tags`_ for valid values for ``<tag>``)


.. |downloads_jvarkit| image:: https://img.shields.io/conda/dn/bioconda/jvarkit.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit
   :alt:   (downloads)
.. |docker_jvarkit| image:: https://quay.io/repository/biocontainers/jvarkit/status
   :target: https://quay.io/repository/biocontainers/jvarkit
.. _`jvarkit/tags`: https://quay.io/repository/biocontainers/jvarkit?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit";
        var versions = ["2024.08.25","2024.08.25","2024.08.01","2024.04.20","2023.09.07"];
    </script>





Notes
-----
jvarkit is Java program that comes with a custom wrapper shell script. This shell wrapper is called \"jvarkit\" and is on \$PATH by default. By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can specify these values directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \"jvarkit \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit/README.html