:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'patholive'
.. highlight: bash

patholive
=========

.. conda:recipe:: patholive
   :replaces_section_title:
   :noindex:

   A real\-time pathogen diagnostics tool for metagenomic Illumina sequencing data.

   :homepage: https://gitlab.com/SimonHTausch/PathoLive
   :license: BSD / BSD 3-Clause
   :recipe: /`patholive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patholive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patholive/meta.yaml>`_

   


.. conda:package:: patholive

   |downloads_patholive| |docker_patholive|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends argparse: 
   :depends hilive2: 
   :depends matplotlib: 
   :depends numpy: ``>=1.11``
   :depends pysam: 
   :depends python: ``>=3``
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

      mamba install patholive

   and update with::

      mamba update patholive

  To create a new environment, run::

      mamba create --name myenvname patholive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/patholive:<tag>

   (see `patholive/tags`_ for valid values for ``<tag>``)


.. |downloads_patholive| image:: https://img.shields.io/conda/dn/bioconda/patholive.svg?style=flat
   :target: https://anaconda.org/bioconda/patholive
   :alt:   (downloads)
.. |docker_patholive| image:: https://quay.io/repository/biocontainers/patholive/status
   :target: https://quay.io/repository/biocontainers/patholive
.. _`patholive/tags`: https://quay.io/repository/biocontainers/patholive?tab=tags


.. raw:: html

    <script>
        var package = "patholive";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/patholive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/patholive/README.html