:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phables'
.. highlight: bash

phables
=======

.. conda:recipe:: phables
   :replaces_section_title:
   :noindex:

   Phables\: from fragmented assemblies to high\-quality bacteriophage genomes

   :homepage: https://github.com/Vini2/phables
   :documentation: https://phables.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`phables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phables/meta.yaml>`_

   Phables resolves bacteriophage genomes using phage bubbles in viral metagenomic data.



.. conda:package:: phables

   |downloads_phables| |docker_phables|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.1.0b7-0``

      

   
   :depends click: ``>=8.1.3``
   :depends jinja2: ``>=3.0.2``
   :depends mamba: ``<1.4.2``
   :depends metasnek: ``>=0.0.5``
   :depends python: ``>=3.9``
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

      mamba install phables

   and update with::

      mamba update phables

  To create a new environment, run::

      mamba create --name myenvname phables

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phables:<tag>

   (see `phables/tags`_ for valid values for ``<tag>``)


.. |downloads_phables| image:: https://img.shields.io/conda/dn/bioconda/phables.svg?style=flat
   :target: https://anaconda.org/bioconda/phables
   :alt:   (downloads)
.. |docker_phables| image:: https://quay.io/repository/biocontainers/phables/status
   :target: https://quay.io/repository/biocontainers/phables
.. _`phables/tags`: https://quay.io/repository/biocontainers/phables?tab=tags


.. raw:: html

    <script>
        var package = "phables";
        var versions = ["1.2.1","1.2.0","1.1.0","1.0.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phables/README.html