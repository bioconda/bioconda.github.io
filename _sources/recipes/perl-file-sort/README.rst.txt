:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-sort'
.. highlight: bash

perl-file-sort
==============

.. conda:recipe:: perl-file-sort
   :replaces_section_title:
   :noindex:

   Sort a file or merge sort multiple files

   :homepage: http://metacpan.org/pod/File-Sort
   :license: unknown
   :recipe: /`perl-file-sort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sort/meta.yaml>`_

   


.. conda:package:: perl-file-sort

   |downloads_perl-file-sort| |docker_perl-file-sort|

   :versions:
      
      

      ``1.01-3``,  ``1.01-2``,  ``1.01-1``,  ``1.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-file-sort

   and update with::

      mamba update perl-file-sort

  To create a new environment, run::

      mamba create --name myenvname perl-file-sort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-sort:<tag>

   (see `perl-file-sort/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-sort| image:: https://img.shields.io/conda/dn/bioconda/perl-file-sort.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-sort
   :alt:   (downloads)
.. |docker_perl-file-sort| image:: https://quay.io/repository/biocontainers/perl-file-sort/status
   :target: https://quay.io/repository/biocontainers/perl-file-sort
.. _`perl-file-sort/tags`: https://quay.io/repository/biocontainers/perl-file-sort?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-sort";
        var versions = ["1.01","1.01","1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-sort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-sort/README.html