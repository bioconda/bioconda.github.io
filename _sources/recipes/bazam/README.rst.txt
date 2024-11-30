:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bazam'
.. highlight: bash

bazam
=====

.. conda:recipe:: bazam
   :replaces_section_title:
   :noindex:

   A tool to extract paired reads in FASTQ format from coordinate sorted BAM files

   :homepage: https://github.com/ssadedin/bazam
   :license: LGPL v2.1
   :recipe: /`bazam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bazam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bazam/meta.yaml>`_

   


.. conda:package:: bazam

   |downloads_bazam| |docker_bazam|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends openjdk: 
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

      mamba install bazam

   and update with::

      mamba update bazam

  To create a new environment, run::

      mamba create --name myenvname bazam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bazam:<tag>

   (see `bazam/tags`_ for valid values for ``<tag>``)


.. |downloads_bazam| image:: https://img.shields.io/conda/dn/bioconda/bazam.svg?style=flat
   :target: https://anaconda.org/bioconda/bazam
   :alt:   (downloads)
.. |docker_bazam| image:: https://quay.io/repository/biocontainers/bazam/status
   :target: https://quay.io/repository/biocontainers/bazam
.. _`bazam/tags`: https://quay.io/repository/biocontainers/bazam?tab=tags


.. raw:: html

    <script>
        var package = "bazam";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bazam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bazam/README.html