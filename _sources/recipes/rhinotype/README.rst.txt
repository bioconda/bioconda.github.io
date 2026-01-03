:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rhinotype'
.. highlight: bash

rhinotype
=========

.. conda:recipe:: rhinotype
   :replaces_section_title:
   :noindex:

   A python tool used to automatically genotype rhinovirus.

   :homepage: https://github.com/omicscodeathon/rhinotype
   :license: MIT / MIT
   :recipe: /`rhinotype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhinotype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhinotype/meta.yaml>`_

   


.. conda:package:: rhinotype

   |downloads_rhinotype| |docker_rhinotype|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends biopython: ``>=1.84``
   :depends mafft: ``>=7.0``
   :depends matplotlib-base: ``>=3.8``
   :depends numpy: ``>=2.2``
   :depends pandas: ``>=2.2``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.15``
   :depends seaborn: ``>=0.13``
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

      mamba install rhinotype

   and update with::

      mamba update rhinotype

  To create a new environment, run::

      mamba create --name myenvname rhinotype

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rhinotype:<tag>

   (see `rhinotype/tags`_ for valid values for ``<tag>``)


.. |downloads_rhinotype| image:: https://img.shields.io/conda/dn/bioconda/rhinotype.svg?style=flat
   :target: https://anaconda.org/bioconda/rhinotype
   :alt:   (downloads)
.. |docker_rhinotype| image:: https://quay.io/repository/biocontainers/rhinotype/status
   :target: https://quay.io/repository/biocontainers/rhinotype
.. _`rhinotype/tags`: https://quay.io/repository/biocontainers/rhinotype?tab=tags


.. raw:: html

    <script>
        var package = "rhinotype";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rhinotype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rhinotype/README.html