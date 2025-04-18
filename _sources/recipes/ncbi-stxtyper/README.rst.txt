:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-stxtyper'
.. highlight: bash

ncbi-stxtyper
=============

.. conda:recipe:: ncbi-stxtyper
   :replaces_section_title:
   :noindex:

   StxTyper identifies and types Stx operons from assembled genomic sequence.

   :homepage: https://github.com/ncbi/stxtyper
   :license: Public Domain
   :recipe: /`ncbi-stxtyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-stxtyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-stxtyper/meta.yaml>`_

   This software and the included database use a standardized algorithm to accurately type both known and unknown Shiga toxin operons from assembled genomic sequence



.. conda:package:: ncbi-stxtyper

   |downloads_ncbi-stxtyper| |docker_ncbi-stxtyper|

   :versions:
      
      

      ``1.0.42-0``,  ``1.0.40-0``,  ``1.0.31-1``,  ``1.0.31-0``,  ``1.0.27-0``,  ``1.0.25-0``,  ``1.0.24-0``

      

   
   :depends blast: ``>=2.9``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ncbi-stxtyper

   and update with::

      mamba update ncbi-stxtyper

  To create a new environment, run::

      mamba create --name myenvname ncbi-stxtyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbi-stxtyper:<tag>

   (see `ncbi-stxtyper/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-stxtyper| image:: https://img.shields.io/conda/dn/bioconda/ncbi-stxtyper.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-stxtyper
   :alt:   (downloads)
.. |docker_ncbi-stxtyper| image:: https://quay.io/repository/biocontainers/ncbi-stxtyper/status
   :target: https://quay.io/repository/biocontainers/ncbi-stxtyper
.. _`ncbi-stxtyper/tags`: https://quay.io/repository/biocontainers/ncbi-stxtyper?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-stxtyper";
        var versions = ["1.0.42","1.0.40","1.0.31","1.0.31","1.0.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-stxtyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-stxtyper/README.html