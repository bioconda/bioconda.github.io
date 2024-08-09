:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-ncbitaxonomy'
.. highlight: bash

rust-ncbitaxonomy
=================

.. conda:recipe:: rust-ncbitaxonomy
   :replaces_section_title:
   :noindex:

   A Rust crate for working with a local copy of the NCBI Taxonomy database\, which provides utilities for taxonomic filtering.


   :homepage: https://github.com/pvanheus/ncbitaxonomy
   :documentation: https://docs.rs/crate/ncbitaxonomy/1.0.7
   
   :license: MIT
   :recipe: /`rust-ncbitaxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-ncbitaxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-ncbitaxonomy/meta.yaml>`_

   


.. conda:package:: rust-ncbitaxonomy

   |downloads_rust-ncbitaxonomy| |docker_rust-ncbitaxonomy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-5</code>,  <code>1.0.7-4</code>,  <code>1.0.7-3</code>,  <code>1.0.7-2</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  <code>1.0.5-0</code>,  <code>1.0.3-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``1.0.7-5``,  ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``0.3.0-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.46.0,<4.0a0``
   :depends sqlite: 
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

      mamba install rust-ncbitaxonomy

   and update with::

      mamba update rust-ncbitaxonomy

  To create a new environment, run::

      mamba create --name myenvname rust-ncbitaxonomy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rust-ncbitaxonomy:<tag>

   (see `rust-ncbitaxonomy/tags`_ for valid values for ``<tag>``)


.. |downloads_rust-ncbitaxonomy| image:: https://img.shields.io/conda/dn/bioconda/rust-ncbitaxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-ncbitaxonomy
   :alt:   (downloads)
.. |docker_rust-ncbitaxonomy| image:: https://quay.io/repository/biocontainers/rust-ncbitaxonomy/status
   :target: https://quay.io/repository/biocontainers/rust-ncbitaxonomy
.. _`rust-ncbitaxonomy/tags`: https://quay.io/repository/biocontainers/rust-ncbitaxonomy?tab=tags


.. raw:: html

    <script>
        var package = "rust-ncbitaxonomy";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-ncbitaxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-ncbitaxonomy/README.html