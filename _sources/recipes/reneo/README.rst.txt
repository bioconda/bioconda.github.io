:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reneo'
.. highlight: bash

reneo
=====

.. conda:recipe:: reneo
   :replaces_section_title:
   :noindex:

   Reneo\: Unraveling Viral Genomes from Metagenomes

   :homepage: https://github.com/Vini2/phables
   :documentation: https://github.com/Vini2/reneo
   
   :developer docs: https://github.com/Vini2/reneo
   :license: MIT / MIT
   :recipe: /`reneo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reneo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reneo/meta.yaml>`_

   Reneo recovers high\-quality genomes from viral communities \(including both prokaryotic and eukaryotic viruses\) found within metagenomes.



.. conda:package:: reneo

   |downloads_reneo| |docker_reneo|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends click: ``>=8.1.3``
   :depends jinja2: ``>=3.0.2``
   :depends mamba: ``<1.4.2``
   :depends metasnek: ``>=0.0.5``
   :depends python: ``<3.11``
   :depends pyyaml: ``>=6.0``
   :depends snakemake-minimal: ``>=7.14.0``
   :depends snaketool-utils: ``>=0.0.3``
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

      mamba install reneo

   and update with::

      mamba update reneo

  To create a new environment, run::

      mamba create --name myenvname reneo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reneo:<tag>

   (see `reneo/tags`_ for valid values for ``<tag>``)


.. |downloads_reneo| image:: https://img.shields.io/conda/dn/bioconda/reneo.svg?style=flat
   :target: https://anaconda.org/bioconda/reneo
   :alt:   (downloads)
.. |docker_reneo| image:: https://quay.io/repository/biocontainers/reneo/status
   :target: https://quay.io/repository/biocontainers/reneo
.. _`reneo/tags`: https://quay.io/repository/biocontainers/reneo?tab=tags


.. raw:: html

    <script>
        var package = "reneo";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reneo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reneo/README.html