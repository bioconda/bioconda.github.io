:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamobilepicker'
.. highlight: bash

metamobilepicker
================

.. conda:recipe:: metamobilepicker
   :replaces_section_title:
   :noindex:

   MetaMobilePicker\: identification of MGEs and ARGs based in metagenomic samples

   :homepage: https://gitlab.com/jkerkvliet/metamobilepicker
   :documentation: https://metamobilepicker.nl
   
   :license: MIT
   :recipe: /`metamobilepicker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamobilepicker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamobilepicker/meta.yaml>`_

   


.. conda:package:: metamobilepicker

   |downloads_metamobilepicker| |docker_metamobilepicker|

   :versions:
      
      

      ``0.7.3-0``,  ``0.7.2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends mamba: 
   :depends python: ``>=3.10``
   :depends pyyaml: 
   :depends rich: 
   :depends setuptools: 
   :depends setuptools_scm_git_archive: 
   :depends snakemake: ``7.8.5``
   :depends tabulate: ``0.8.10``
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

      mamba install metamobilepicker

   and update with::

      mamba update metamobilepicker

  To create a new environment, run::

      mamba create --name myenvname metamobilepicker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metamobilepicker:<tag>

   (see `metamobilepicker/tags`_ for valid values for ``<tag>``)


.. |downloads_metamobilepicker| image:: https://img.shields.io/conda/dn/bioconda/metamobilepicker.svg?style=flat
   :target: https://anaconda.org/bioconda/metamobilepicker
   :alt:   (downloads)
.. |docker_metamobilepicker| image:: https://quay.io/repository/biocontainers/metamobilepicker/status
   :target: https://quay.io/repository/biocontainers/metamobilepicker
.. _`metamobilepicker/tags`: https://quay.io/repository/biocontainers/metamobilepicker?tab=tags


.. raw:: html

    <script>
        var package = "metamobilepicker";
        var versions = ["0.7.3","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamobilepicker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamobilepicker/README.html