:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'core-snp-filter'
.. highlight: bash

core-snp-filter
===============

.. conda:recipe:: core-snp-filter
   :replaces_section_title:
   :noindex:

   Filtering sites \(i.e. columns\) in a FASTA\-format whole\-genome pseudo\-alignment.

   :homepage: https://github.com/rrwick/Core-SNP-filter
   :license: GPL / GPLv3
   :recipe: /`core-snp-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/core-snp-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/core-snp-filter/meta.yaml>`_

   


.. conda:package:: core-snp-filter

   |downloads_core-snp-filter| |docker_core-snp-filter|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.6``
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

      mamba install core-snp-filter

   and update with::

      mamba update core-snp-filter

  To create a new environment, run::

      mamba create --name myenvname core-snp-filter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/core-snp-filter:<tag>

   (see `core-snp-filter/tags`_ for valid values for ``<tag>``)


.. |downloads_core-snp-filter| image:: https://img.shields.io/conda/dn/bioconda/core-snp-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/core-snp-filter
   :alt:   (downloads)
.. |docker_core-snp-filter| image:: https://quay.io/repository/biocontainers/core-snp-filter/status
   :target: https://quay.io/repository/biocontainers/core-snp-filter
.. _`core-snp-filter/tags`: https://quay.io/repository/biocontainers/core-snp-filter?tab=tags


.. raw:: html

    <script>
        var package = "core-snp-filter";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/core-snp-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/core-snp-filter/README.html