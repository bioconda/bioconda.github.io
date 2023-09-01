:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meningotype'
.. highlight: bash

meningotype
===========

.. conda:recipe:: meningotype
   :replaces_section_title:
   :noindex:

   In silico serotyping and finetyping \(porA and fetA\) of Neisseria meningitidis

   :homepage: https://github.com/MDU-PHL/meningotype
   :license: GPL-3.0
   :recipe: /`meningotype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meningotype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meningotype/meta.yaml>`_

   


.. conda:package:: meningotype

   |downloads_meningotype| |docker_meningotype|

   :versions:
      
      

      ``0.8.5-1``,  ``0.8.5-0``,  ``0.8.4-1``,  ``0.8.4-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends ispcr: 
   :depends mlst: ``>=2.12``
   :depends python: ``>=3.6``
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

      mamba install meningotype

   and update with::

      mamba update meningotype

  To create a new environment, run::

      mamba create --name myenvname meningotype

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meningotype:<tag>

   (see `meningotype/tags`_ for valid values for ``<tag>``)


.. |downloads_meningotype| image:: https://img.shields.io/conda/dn/bioconda/meningotype.svg?style=flat
   :target: https://anaconda.org/bioconda/meningotype
   :alt:   (downloads)
.. |docker_meningotype| image:: https://quay.io/repository/biocontainers/meningotype/status
   :target: https://quay.io/repository/biocontainers/meningotype
.. _`meningotype/tags`: https://quay.io/repository/biocontainers/meningotype?tab=tags


.. raw:: html

    <script>
        var package = "meningotype";
        var versions = ["0.8.5","0.8.5","0.8.4","0.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meningotype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meningotype/README.html