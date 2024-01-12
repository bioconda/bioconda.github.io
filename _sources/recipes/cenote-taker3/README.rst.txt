:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cenote-taker3'
.. highlight: bash

cenote-taker3
=============

.. conda:recipe:: cenote-taker3
   :replaces_section_title:
   :noindex:

   Cenote\-Taker 3\: Discover and annotate the virome

   :homepage: https://github.com/mtisza1/Cenote-Taker3
   :license: MIT
   :recipe: /`cenote-taker3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenote-taker3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenote-taker3/meta.yaml>`_

   


.. conda:package:: cenote-taker3

   |downloads_cenote-taker3| |docker_cenote-taker3|

   :versions:
      
      

      ``3.2.0-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends coreutils: 
   :depends findutils: 
   :depends grep: 
   :depends hhsuite: 
   :depends minimap2: 
   :depends mmseqs2: 
   :depends phanotate: 
   :depends prodigal: 
   :depends pyhmmer: 
   :depends pyrodigal-gv: ``>=0.3.1``
   :depends python: ``>=3.10``
   :depends samtools: 
   :depends sed: 
   :depends seqkit: 
   :depends tbl2asn-forever: 
   :depends trnascan-se: 
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

      mamba install cenote-taker3

   and update with::

      mamba update cenote-taker3

  To create a new environment, run::

      mamba create --name myenvname cenote-taker3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cenote-taker3:<tag>

   (see `cenote-taker3/tags`_ for valid values for ``<tag>``)


.. |downloads_cenote-taker3| image:: https://img.shields.io/conda/dn/bioconda/cenote-taker3.svg?style=flat
   :target: https://anaconda.org/bioconda/cenote-taker3
   :alt:   (downloads)
.. |docker_cenote-taker3| image:: https://quay.io/repository/biocontainers/cenote-taker3/status
   :target: https://quay.io/repository/biocontainers/cenote-taker3
.. _`cenote-taker3/tags`: https://quay.io/repository/biocontainers/cenote-taker3?tab=tags


.. raw:: html

    <script>
        var package = "cenote-taker3";
        var versions = ["3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cenote-taker3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cenote-taker3/README.html