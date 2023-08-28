:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unitas'
.. highlight: bash

unitas
======

.. conda:recipe:: unitas
   :replaces_section_title:
   :noindex:

   unitas is a convenient tool for efficient annotation of small non\-coding RNA sequence datasets produced by Next Generation Sequencing.

   :homepage: http://www.smallrnagroup.uni-mainz.de/software.html
   :license: Creative Commons Attribution Non-Commercial License V2.0
   :recipe: /`unitas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitas/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1186/s12864-017-4031-9`

   


.. conda:package:: unitas

   |downloads_unitas| |docker_unitas|

   :versions:
      
      

      ``1.6.1-2``,  ``1.6.1-1``,  ``1.6.1-0``

      

   
   :depends dnapi: 
   :depends perl: 
   :depends perl-archive-extract: 
   :depends perl-file-path: 
   :depends perl-getopt-long: 
   :depends perl-lwp-simple: 
   :depends perl-statistics-distributions: 
   :depends seqmap: 
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

      mamba install unitas

   and update with::

      mamba update unitas

  To create a new environment, run::

      mamba create --name myenvname unitas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unitas:<tag>

   (see `unitas/tags`_ for valid values for ``<tag>``)


.. |downloads_unitas| image:: https://img.shields.io/conda/dn/bioconda/unitas.svg?style=flat
   :target: https://anaconda.org/bioconda/unitas
   :alt:   (downloads)
.. |docker_unitas| image:: https://quay.io/repository/biocontainers/unitas/status
   :target: https://quay.io/repository/biocontainers/unitas
.. _`unitas/tags`: https://quay.io/repository/biocontainers/unitas?tab=tags


.. raw:: html

    <script>
        var package = "unitas";
        var versions = ["1.6.1","1.6.1","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitas/README.html