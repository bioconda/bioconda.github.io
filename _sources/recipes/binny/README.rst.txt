:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binny'
.. highlight: bash

binny
=====

.. conda:recipe:: binny
   :replaces_section_title:
   :noindex:

   An automated binning algorithm to recover high\-quality genomes from complex metagenomic datasets. Note\: This is a development version.

   :homepage: https://github.com/a-h-b/binny
   :license: GPL / GPL-3.0-or-later
   :recipe: /`binny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binny/meta.yaml>`_

   


.. conda:package:: binny

   |downloads_binny| |docker_binny|

   :versions:
      
      

      ``2.2.18-0``

      

   
   :depends bedtools: ``2.31.0.*``
   :depends gcc_linux-64: 
   :depends git: 
   :depends hdbscan: ``0.8.33.*``
   :depends mantis_pfa: ``1.5.5.*``
   :depends networkx: ``3.1.0.*``
   :depends opentsne: ``1.0.0.*``
   :depends pyarrow: ``12.0.1.*``
   :depends python: ``>=3.6,<3.11``
   :depends scikit-bio: ``0.5.9.*``
   :depends seqkit: ``2.5.1.*``
   :depends singularity: ``3.8.6.*``
   :depends snakemake: ``7.19.0.*``
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

      mamba install binny

   and update with::

      mamba update binny

  To create a new environment, run::

      mamba create --name myenvname binny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/binny:<tag>

   (see `binny/tags`_ for valid values for ``<tag>``)


.. |downloads_binny| image:: https://img.shields.io/conda/dn/bioconda/binny.svg?style=flat
   :target: https://anaconda.org/bioconda/binny
   :alt:   (downloads)
.. |docker_binny| image:: https://quay.io/repository/biocontainers/binny/status
   :target: https://quay.io/repository/biocontainers/binny
.. _`binny/tags`: https://quay.io/repository/biocontainers/binny?tab=tags


.. raw:: html

    <script>
        var package = "binny";
        var versions = ["2.2.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binny/README.html