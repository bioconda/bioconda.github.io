:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacompass'
.. highlight: bash

metacompass
===========

.. conda:recipe:: metacompass
   :replaces_section_title:
   :noindex:

   MetaCompass\: Reference\-guided Assembly of Metagenomes.

   :homepage: https://github.com/marbl/MetaCompass
   :documentation: https://github.com/marbl/MetaCompass/wiki
   
   :license: Artistic-License-2.0
   :recipe: /`metacompass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacompass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacompass/meta.yaml>`_
   :links: biotools: :biotools:`MetaCompass`, doi: :doi:`10.1101/212506`

   


.. conda:package:: metacompass

   |downloads_metacompass| |docker_metacompass|

   :versions:
      
      

      ``1.12-0``

      

   
   :depends blast: ``>=2.4.0``
   :depends bowtie2: ``>=2.2.5``
   :depends libcxx: ``>=18``
   :depends megahit: ``>=1.0.6``
   :depends openjdk: ``>=7``
   :depends perl: ``>=5.16``
   :depends python: ``>=3.1``
   :depends samtools: ``>=1.12``
   :depends snakemake-minimal: ``>=3.7.1``
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

      mamba install metacompass

   and update with::

      mamba update metacompass

  To create a new environment, run::

      mamba create --name myenvname metacompass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metacompass:<tag>

   (see `metacompass/tags`_ for valid values for ``<tag>``)


.. |downloads_metacompass| image:: https://img.shields.io/conda/dn/bioconda/metacompass.svg?style=flat
   :target: https://anaconda.org/bioconda/metacompass
   :alt:   (downloads)
.. |docker_metacompass| image:: https://quay.io/repository/biocontainers/metacompass/status
   :target: https://quay.io/repository/biocontainers/metacompass
.. _`metacompass/tags`: https://quay.io/repository/biocontainers/metacompass?tab=tags


.. raw:: html

    <script>
        var package = "metacompass";
        var versions = ["1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacompass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacompass/README.html