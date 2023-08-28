:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flippyr'
.. highlight: bash

flippyr
=======

.. conda:recipe:: flippyr
   :replaces_section_title:
   :noindex:

   This package is designed to align a PLINK fileset with a FASTA reference genome.

   :homepage: https://github.com/BEFH/flippyr
   :license: MIT / MIT
   :recipe: /`flippyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flippyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flippyr/meta.yaml>`_

   Flippy is a simple\, fast script to ensure that PLINK filesets are aligned to
   a reference genome in FASTA format. It identifies and fixes strand flipping\,
   and reversed alleles. It removes ambiguous \(palindromic\) alleles and sites
   that do not match the reference genome. It also recognizes and removes multi\-
   allelic sites and indels by default. Instructions and more details can be
   found on GitHub.



.. conda:package:: flippyr

   |downloads_flippyr| |docker_flippyr|

   :versions:
      
      

      ``0.5.3-0``,  ``0.4.0-0``

      

   
   :depends pandas: 
   :depends pyfaidx: 
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

      mamba install flippyr

   and update with::

      mamba update flippyr

  To create a new environment, run::

      mamba create --name myenvname flippyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flippyr:<tag>

   (see `flippyr/tags`_ for valid values for ``<tag>``)


.. |downloads_flippyr| image:: https://img.shields.io/conda/dn/bioconda/flippyr.svg?style=flat
   :target: https://anaconda.org/bioconda/flippyr
   :alt:   (downloads)
.. |docker_flippyr| image:: https://quay.io/repository/biocontainers/flippyr/status
   :target: https://quay.io/repository/biocontainers/flippyr
.. _`flippyr/tags`: https://quay.io/repository/biocontainers/flippyr?tab=tags


.. raw:: html

    <script>
        var package = "flippyr";
        var versions = ["0.5.3","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flippyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flippyr/README.html