:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmblast'
.. highlight: bash

rmblast
=======

.. conda:recipe:: rmblast
   :replaces_section_title:
   :noindex:

   RMBlast is a RepeatMasker compatible version of the standard NCBI BLAST\+ suite.

   :homepage: https://www.repeatmasker.org/rmblast/
   :license: OSL-2.1
   :recipe: /`rmblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmblast/meta.yaml>`_
   :links: biotools: :biotools:`rmblast`

   


.. conda:package:: rmblast

   |downloads_rmblast| |docker_rmblast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-2</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.13.0-1</code>,  <code>2.13.0-0</code>,  <code>2.11.0-0</code>,  <code>2.10.0-0</code>,  <code>2.9.0-0</code>,  <code>2.6.0-0</code>,  </span></summary>
      

      ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.13.0-1``,  ``2.13.0-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.6.0-0``,  ``2.2.28-4``,  ``2.2.28-3``,  ``2.2.28-2``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends entrez-direct: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends perl: 
   :depends perl-archive-tar: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends zlib: 
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

      mamba install rmblast

   and update with::

      mamba update rmblast

  To create a new environment, run::

      mamba create --name myenvname rmblast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rmblast:<tag>

   (see `rmblast/tags`_ for valid values for ``<tag>``)


.. |downloads_rmblast| image:: https://img.shields.io/conda/dn/bioconda/rmblast.svg?style=flat
   :target: https://anaconda.org/bioconda/rmblast
   :alt:   (downloads)
.. |docker_rmblast| image:: https://quay.io/repository/biocontainers/rmblast/status
   :target: https://quay.io/repository/biocontainers/rmblast
.. _`rmblast/tags`: https://quay.io/repository/biocontainers/rmblast?tab=tags


.. raw:: html

    <script>
        var package = "rmblast";
        var versions = ["2.14.0","2.14.0","2.14.0","2.13.0","2.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmblast/README.html