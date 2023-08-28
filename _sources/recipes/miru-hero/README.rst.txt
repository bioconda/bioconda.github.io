:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miru-hero'
.. highlight: bash

miru-hero
=========

.. conda:recipe:: miru-hero
   :replaces_section_title:
   :noindex:

   Compute MIRU and Spoligotype from a M. tuberculosis genome

   :homepage: https://gitlab.com/LPCDRP/miru-hero
   :license: GPL / GPL-3.0-or-later
   :recipe: /`miru-hero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miru-hero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miru-hero/meta.yaml>`_

   Calculate the number and position of MIRU and Spoligotype sequences from a FASTA file\, output results 
   to a file\, and print octal Spoligotype results\, MIRU results\, and lineage results to screen



.. conda:package:: miru-hero

   |downloads_miru-hero| |docker_miru-hero|

   :versions:
      
      

      ``0.10.0-0``

      

   
   :depends biopython: ``<1.79``
   :depends blast: 
   :depends python: 
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

      mamba install miru-hero

   and update with::

      mamba update miru-hero

  To create a new environment, run::

      mamba create --name myenvname miru-hero

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/miru-hero:<tag>

   (see `miru-hero/tags`_ for valid values for ``<tag>``)


.. |downloads_miru-hero| image:: https://img.shields.io/conda/dn/bioconda/miru-hero.svg?style=flat
   :target: https://anaconda.org/bioconda/miru-hero
   :alt:   (downloads)
.. |docker_miru-hero| image:: https://quay.io/repository/biocontainers/miru-hero/status
   :target: https://quay.io/repository/biocontainers/miru-hero
.. _`miru-hero/tags`: https://quay.io/repository/biocontainers/miru-hero?tab=tags


.. raw:: html

    <script>
        var package = "miru-hero";
        var versions = ["0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miru-hero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miru-hero/README.html