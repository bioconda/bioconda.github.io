:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'frag_gene_scan_rs'
.. highlight: bash

frag_gene_scan_rs
=================

.. conda:recipe:: frag_gene_scan_rs
   :replaces_section_title:
   :noindex:

   Rust implementation of the gene prediction model for short and error\-prone reads

   :homepage: https://github.com/unipept/FragGeneScanRs
   :license: GPL-3.0-or-later
   :recipe: /`frag_gene_scan_rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frag_gene_scan_rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frag_gene_scan_rs/meta.yaml>`_

   


.. conda:package:: frag_gene_scan_rs

   |downloads_frag_gene_scan_rs| |docker_frag_gene_scan_rs|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install frag_gene_scan_rs

   and update with::

      mamba update frag_gene_scan_rs

  To create a new environment, run::

      mamba create --name myenvname frag_gene_scan_rs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/frag_gene_scan_rs:<tag>

   (see `frag_gene_scan_rs/tags`_ for valid values for ``<tag>``)


.. |downloads_frag_gene_scan_rs| image:: https://img.shields.io/conda/dn/bioconda/frag_gene_scan_rs.svg?style=flat
   :target: https://anaconda.org/bioconda/frag_gene_scan_rs
   :alt:   (downloads)
.. |docker_frag_gene_scan_rs| image:: https://quay.io/repository/biocontainers/frag_gene_scan_rs/status
   :target: https://quay.io/repository/biocontainers/frag_gene_scan_rs
.. _`frag_gene_scan_rs/tags`: https://quay.io/repository/biocontainers/frag_gene_scan_rs?tab=tags


.. raw:: html

    <script>
        var package = "frag_gene_scan_rs";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frag_gene_scan_rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frag_gene_scan_rs/README.html