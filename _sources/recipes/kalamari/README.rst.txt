:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kalamari'
.. highlight: bash

kalamari
========

.. conda:recipe:: kalamari
   :replaces_section_title:
   :noindex:

   A curated database of completed assemblies with taxonomy IDs

   :homepage: https://github.com/lskatz/kalamari
   :documentation: https://github.com/lskatz/Kalamari/blob/master/README.md
   
   :developer docs: https://github.com/lskatz/Kalamari
   :license: CC / Creative Commons 4.0
   :recipe: /`kalamari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalamari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalamari/meta.yaml>`_

   Kalamari is a curated database of assemblies and taxonomies.
   These assemblies are curated mainly for foodborne bacteria but have other taxa
   such as SARS\-CoV\-2 and Crytposporidium.
   Taxonomy has been modified from NCBI Taxonomy and has been minimalized to
   just what is needed here.



.. conda:package:: kalamari

   |downloads_kalamari| |docker_kalamari|

   :versions:
      
      

      ``5.3.2-0``,  ``5.2.1-0``

      

   
   :depends entrez-direct: 
   :depends kraken: ``>=1,<2``
   :depends kraken2: 
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-module-build: ``0.4234.*``
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

      mamba install kalamari

   and update with::

      mamba update kalamari

  To create a new environment, run::

      mamba create --name myenvname kalamari

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kalamari:<tag>

   (see `kalamari/tags`_ for valid values for ``<tag>``)


.. |downloads_kalamari| image:: https://img.shields.io/conda/dn/bioconda/kalamari.svg?style=flat
   :target: https://anaconda.org/bioconda/kalamari
   :alt:   (downloads)
.. |docker_kalamari| image:: https://quay.io/repository/biocontainers/kalamari/status
   :target: https://quay.io/repository/biocontainers/kalamari
.. _`kalamari/tags`: https://quay.io/repository/biocontainers/kalamari?tab=tags


.. raw:: html

    <script>
        var package = "kalamari";
        var versions = ["5.3.2","5.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kalamari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kalamari/README.html