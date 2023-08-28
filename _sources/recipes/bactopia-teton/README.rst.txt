:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-teton'
.. highlight: bash

bactopia-teton
==============

.. conda:recipe:: bactopia-teton
   :replaces_section_title:
   :noindex:

   Methods used by Bactopia for taxonomic classification

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia-teton/
   :license: MIT
   :recipe: /`bactopia-teton <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-teton>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-teton/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia-teton

   |downloads_bactopia-teton| |docker_bactopia-teton|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bracken: ``>=2.8``
   :depends coreutils: 
   :depends fastq-scan: ``>=1.0.1``
   :depends gsl: ``2.6.*``
   :depends kraken2: ``>=2.1.3``
   :depends krakentools: ``>=1.2``
   :depends krona: ``>=2.8.1``
   :depends pandas: 
   :depends pigz: 
   :depends python: ``>=3.6,<3.11``
   :depends sed: 
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

      mamba install bactopia-teton

   and update with::

      mamba update bactopia-teton

  To create a new environment, run::

      mamba create --name myenvname bactopia-teton

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bactopia-teton:<tag>

   (see `bactopia-teton/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia-teton| image:: https://img.shields.io/conda/dn/bioconda/bactopia-teton.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-teton
   :alt:   (downloads)
.. |docker_bactopia-teton| image:: https://quay.io/repository/biocontainers/bactopia-teton/status
   :target: https://quay.io/repository/biocontainers/bactopia-teton
.. _`bactopia-teton/tags`: https://quay.io/repository/biocontainers/bactopia-teton?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-teton";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-teton/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-teton/README.html