:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'je-suite'
.. highlight: bash

je-suite
========

.. conda:recipe:: je-suite
   :replaces_section_title:
   :noindex:

   Je is a suite to handle barcoded fastq files with \(or without\) Unique Molecule Identifiers \(UMIs\) and filter
   read duplicates using these UMIs


   :homepage: https://gbcs.embl.de/Je
   :license: MIT / MIT License
   :recipe: /`je-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/je-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/je-suite/meta.yaml>`_

   


.. conda:package:: je-suite

   |downloads_je-suite| |docker_je-suite|

   :versions:
      
      

      ``2.0.RC-0``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install je-suite

   and update with::

      mamba update je-suite

  To create a new environment, run::

      mamba create --name myenvname je-suite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/je-suite:<tag>

   (see `je-suite/tags`_ for valid values for ``<tag>``)


.. |downloads_je-suite| image:: https://img.shields.io/conda/dn/bioconda/je-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/je-suite
   :alt:   (downloads)
.. |docker_je-suite| image:: https://quay.io/repository/biocontainers/je-suite/status
   :target: https://quay.io/repository/biocontainers/je-suite
.. _`je-suite/tags`: https://quay.io/repository/biocontainers/je-suite?tab=tags


.. raw:: html

    <script>
        var package = "je-suite";
        var versions = ["2.0.RC","1.2","1.2","1.2"];
    </script>





Notes
-----
Je is Java program that comes with a wrapper shell script.
By default \"\-Xmx4G \-Xms256m\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"je \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/je-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/je-suite/README.html