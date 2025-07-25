:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blastbesties'
.. highlight: bash

blastbesties
============

.. conda:recipe:: blastbesties
   :replaces_section_title:
   :noindex:

   Rapid discovery of reciprocal best blast pairs from BLAST output files.

   :homepage: https://github.com/Adamtaranto/blast-besties
   :license: MIT / MIT
   :recipe: /`blastbesties <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastbesties>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastbesties/meta.yaml>`_

   


.. conda:package:: blastbesties

   |downloads_blastbesties| |docker_blastbesties|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-0``

      

   
   :depends argparse-tui: 
   :depends python: ``>=3.8``
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

      mamba install blastbesties

   and update with::

      mamba update blastbesties

  To create a new environment, run::

      mamba create --name myenvname blastbesties

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blastbesties:<tag>

   (see `blastbesties/tags`_ for valid values for ``<tag>``)


.. |downloads_blastbesties| image:: https://img.shields.io/conda/dn/bioconda/blastbesties.svg?style=flat
   :target: https://anaconda.org/bioconda/blastbesties
   :alt:   (downloads)
.. |docker_blastbesties| image:: https://quay.io/repository/biocontainers/blastbesties/status
   :target: https://quay.io/repository/biocontainers/blastbesties
.. _`blastbesties/tags`: https://quay.io/repository/biocontainers/blastbesties?tab=tags


.. raw:: html

    <script>
        var package = "blastbesties";
        var versions = ["1.2.0","1.1.2","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastbesties/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastbesties/README.html