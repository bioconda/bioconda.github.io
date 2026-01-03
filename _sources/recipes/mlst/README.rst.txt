:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlst'
.. highlight: bash

mlst
====

.. conda:recipe:: mlst
   :replaces_section_title:
   :noindex:

   Scan contig files against PubMLST typing schemes

   :homepage: https://github.com/tseemann/mlst
   :license: GPL / GPL-2.0
   :recipe: /`mlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst/meta.yaml>`_
   :links: biotools: :biotools:`mlst`

   


.. conda:package:: mlst

   |downloads_mlst| |docker_mlst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.2-0</code>,  <code>2.28.1-0</code>,  <code>2.25.0-0</code>,  <code>2.23.0-1</code>,  <code>2.23.0-0</code>,  <code>2.22.1-0</code>,  <code>2.22.0-0</code>,  <code>2.19.0-1</code>,  <code>2.19.0-0</code>,  </span></summary>
      

      ``2.32.2-0``,  ``2.28.1-0``,  ``2.25.0-0``,  ``2.23.0-1``,  ``2.23.0-0``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.19.0-1``,  ``2.19.0-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.6-1``,  ``2.17.6-0``,  ``2.16.4-0``,  ``2.16.2-1``,  ``2.16.2-0``,  ``2.16.1-0``,  ``2.16-0``,  ``2.15.2-0``,  ``2.15.1-0``,  ``2.15-0``,  ``2.14-0``,  ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-1``,  ``2.10-0``,  ``2.9-6``,  ``2.9-5``,  ``2.9-4``,  ``2.9-3``,  ``2.9-2``,  ``2.9-1``,  ``2.9-0``,  ``2.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends any2fasta: 
   :depends blast: ``>=2.16.0``
   :depends perl: 
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-file-which: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-moo: 
   :depends zlib: 
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

      mamba install mlst

   and update with::

      mamba update mlst

  To create a new environment, run::

      mamba create --name myenvname mlst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mlst:<tag>

   (see `mlst/tags`_ for valid values for ``<tag>``)


.. |downloads_mlst| image:: https://img.shields.io/conda/dn/bioconda/mlst.svg?style=flat
   :target: https://anaconda.org/bioconda/mlst
   :alt:   (downloads)
.. |docker_mlst| image:: https://quay.io/repository/biocontainers/mlst/status
   :target: https://quay.io/repository/biocontainers/mlst
.. _`mlst/tags`: https://quay.io/repository/biocontainers/mlst?tab=tags


.. raw:: html

    <script>
        var package = "mlst";
        var versions = ["2.32.2","2.28.1","2.25.0","2.23.0","2.23.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlst/README.html