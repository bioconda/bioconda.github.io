:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nomnom'
.. highlight: bash

nomnom
======

.. conda:recipe:: nomnom
   :replaces_section_title:
   :noindex:

   A tool for converting genomic data tables into hierarchical YAML files

   :homepage: https://github.com/diegomics/NomNom
   :license: MIT / MIT
   :recipe: /`nomnom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nomnom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nomnom/meta.yaml>`_

   


.. conda:package:: nomnom

   |downloads_nomnom| |docker_nomnom|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends numbers-parser: ``>=4.16``
   :depends numpy: ``>=2.3``
   :depends odfpy: ``>=1.4``
   :depends openpyxl: ``>=3.1``
   :depends pandas: ``>=2.3``
   :depends python: ``>=3.11``
   :depends pyyaml: ``>=6.0``
   :depends xlrd: ``>=2.0``
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

      mamba install nomnom

   and update with::

      mamba update nomnom

  To create a new environment, run::

      mamba create --name myenvname nomnom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nomnom:<tag>

   (see `nomnom/tags`_ for valid values for ``<tag>``)


.. |downloads_nomnom| image:: https://img.shields.io/conda/dn/bioconda/nomnom.svg?style=flat
   :target: https://anaconda.org/bioconda/nomnom
   :alt:   (downloads)
.. |docker_nomnom| image:: https://quay.io/repository/biocontainers/nomnom/status
   :target: https://quay.io/repository/biocontainers/nomnom
.. _`nomnom/tags`: https://quay.io/repository/biocontainers/nomnom?tab=tags


.. raw:: html

    <script>
        var package = "nomnom";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nomnom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nomnom/README.html