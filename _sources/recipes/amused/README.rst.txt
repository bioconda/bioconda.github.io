:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amused'
.. highlight: bash

amused
======

.. conda:recipe:: amused
   :replaces_section_title:
   :noindex:

   Auditing Motifs Using Statistical Enrichment \& Depletion

   :homepage: https://github.com/Carldeboer/AMUSED
   :license: GPL-2.0
   :recipe: /`amused <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amused>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amused/meta.yaml>`_

   


.. conda:package:: amused

   |downloads_amused| |docker_amused|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends jemalloc: 
   :depends ruby: ``>=2.4``
   :depends ruby-dna-tools: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install amused

   and update with::

      mamba update amused

  To create a new environment, run::

      mamba create --name myenvname amused

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amused:<tag>

   (see `amused/tags`_ for valid values for ``<tag>``)


.. |downloads_amused| image:: https://img.shields.io/conda/dn/bioconda/amused.svg?style=flat
   :target: https://anaconda.org/bioconda/amused
   :alt:   (downloads)
.. |docker_amused| image:: https://quay.io/repository/biocontainers/amused/status
   :target: https://quay.io/repository/biocontainers/amused
.. _`amused/tags`: https://quay.io/repository/biocontainers/amused?tab=tags


.. raw:: html

    <script>
        var package = "amused";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amused/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amused/README.html