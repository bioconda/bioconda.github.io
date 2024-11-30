:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merqury'
.. highlight: bash

merqury
=======

.. conda:recipe:: merqury
   :replaces_section_title:
   :noindex:

   Evaluate genome assemblies with k\-mers and more.

   :homepage: https://github.com/marbl/merqury
   :license: PUBLIC DOMAIN
   :recipe: /`merqury <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merqury>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merqury/meta.yaml>`_

   Often\, genome assembly projects have illumina whole genome sequencing reads available for the assembled individual. The k\-mer spectrum of this read set can be used for independently evaluating assembly quality without the need of a high quality reference. Merqury provides a set of tools for this purpose.


.. conda:package:: merqury

   |downloads_merqury| |docker_merqury|

   :versions:
      
      

      ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``v1.0-0``

      

   
   :depends bedtools: ``>=2.29.2``
   :depends gawk: 
   :depends meryl: ``1.3.*``
   :depends mscorefonts: 
   :depends openjdk: ``>=11.0.1``
   :depends r-argparse: ``>=2.0.1``
   :depends r-base: ``>=4``
   :depends r-ggplot2: ``>=3.3.2,<=3.3.6``
   :depends r-scales: ``>=1.1.1``
   :depends samtools: ``>=1.10``
   :depends sed: 
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

      mamba install merqury

   and update with::

      mamba update merqury

  To create a new environment, run::

      mamba create --name myenvname merqury

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/merqury:<tag>

   (see `merqury/tags`_ for valid values for ``<tag>``)


.. |downloads_merqury| image:: https://img.shields.io/conda/dn/bioconda/merqury.svg?style=flat
   :target: https://anaconda.org/bioconda/merqury
   :alt:   (downloads)
.. |docker_merqury| image:: https://quay.io/repository/biocontainers/merqury/status
   :target: https://quay.io/repository/biocontainers/merqury
.. _`merqury/tags`: https://quay.io/repository/biocontainers/merqury?tab=tags


.. raw:: html

    <script>
        var package = "merqury";
        var versions = ["1.3","1.3","1.3","1.3","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merqury/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merqury/README.html