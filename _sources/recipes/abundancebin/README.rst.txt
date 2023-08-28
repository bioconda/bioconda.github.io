:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abundancebin'
.. highlight: bash

abundancebin
============

.. conda:recipe:: abundancebin
   :replaces_section_title:
   :noindex:

   Abundance\-based tool for binning metagenomic sequences

   :homepage: http://omics.informatics.indiana.edu/AbundanceBin/
   :license: copyright
   :recipe: /`abundancebin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abundancebin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abundancebin/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-642-12683-3_35`

   AbundanceBin is an abundance\-based tool for binning metagenomic sequences\,
   such that the reads classified in a bin belong to species of identical or
   very similar abundances. AbundanceBin also gives estimations of species
   abundances and their genome sizes — two important characteristic parameters
   for a microbial community.



.. conda:package:: abundancebin

   |downloads_abundancebin| |docker_abundancebin|

   :versions:
      
      

      ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install abundancebin

   and update with::

      mamba update abundancebin

  To create a new environment, run::

      mamba create --name myenvname abundancebin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abundancebin:<tag>

   (see `abundancebin/tags`_ for valid values for ``<tag>``)


.. |downloads_abundancebin| image:: https://img.shields.io/conda/dn/bioconda/abundancebin.svg?style=flat
   :target: https://anaconda.org/bioconda/abundancebin
   :alt:   (downloads)
.. |docker_abundancebin| image:: https://quay.io/repository/biocontainers/abundancebin/status
   :target: https://quay.io/repository/biocontainers/abundancebin
.. _`abundancebin/tags`: https://quay.io/repository/biocontainers/abundancebin?tab=tags


.. raw:: html

    <script>
        var package = "abundancebin";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abundancebin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abundancebin/README.html