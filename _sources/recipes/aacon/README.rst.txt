:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aacon'
.. highlight: bash

aacon
=====

.. conda:recipe:: aacon
   :replaces_section_title:
   :noindex:

   AACon\: A Fast Amino Acid Conservation Calculation Service

   :homepage: https://www.compbio.dundee.ac.uk/aacon/
   :developer docs: https://github.com/bartongroup/aacon
   :license: Apache-2.0
   :recipe: /`aacon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aacon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aacon/meta.yaml>`_
   :links: biotools: :biotools:`aacon`

   AACon is a set of tools implementing 17 different conservation scores reviewed by Valdar as well as the more complex SMERFS algorithm for predicting protein functional sites. AACon has been written with efficiency in mind and takes less than a second to calculate conservation by all 18 methods for an alignment of 500 sequences 350 residues long on a single CPU. AACon exploits parallelism for the more demanding methods and to allow multiple methods to run simultaneously. The parallel code gives close to linear speedup with the number of processors\, thus making it suitable for server applications or other demanding environments.


.. conda:package:: aacon

   |downloads_aacon| |docker_aacon|

   :versions:
      
      

      ``1.1-0``

      

   
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

      mamba install aacon

   and update with::

      mamba update aacon

  To create a new environment, run::

      mamba create --name myenvname aacon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aacon:<tag>

   (see `aacon/tags`_ for valid values for ``<tag>``)


.. |downloads_aacon| image:: https://img.shields.io/conda/dn/bioconda/aacon.svg?style=flat
   :target: https://anaconda.org/bioconda/aacon
   :alt:   (downloads)
.. |docker_aacon| image:: https://quay.io/repository/biocontainers/aacon/status
   :target: https://quay.io/repository/biocontainers/aacon
.. _`aacon/tags`: https://quay.io/repository/biocontainers/aacon?tab=tags


.. raw:: html

    <script>
        var package = "aacon";
        var versions = ["1.1"];
    </script>





Notes
-----
AACon is a Java program that comes with a custom wrapper shell script. The shell wrapper is called \"aacon\" and is present on \$PATH by default. The Java program is executed with java specified by the \$JAVA\_HOME variable. Otherwise\, a \"java\" program from the current environment is used.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aacon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aacon/README.html