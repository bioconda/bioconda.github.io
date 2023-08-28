:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-find'
.. highlight: bash

perl-file-find
==============

.. conda:recipe:: perl-file-find/1.27
   :replaces_section_title:
   :noindex:

   Traverse a directory tree.

   :homepage: http://metacpan.org/pod/File::Find
   :license: perl_5
   :recipe: /`perl-file-find <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find>`_/`1.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find/1.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find/1.27/meta.yaml>`_

   


.. conda:package:: perl-file-find

   |downloads_perl-file-find| |docker_perl-file-find|

   :versions:
      
      

      ``1.27-2``,  ``1.27-1``,  ``1.27-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-file-find

   and update with::

      mamba update perl-file-find

  To create a new environment, run::

      mamba create --name myenvname perl-file-find

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-find:<tag>

   (see `perl-file-find/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-find| image:: https://img.shields.io/conda/dn/bioconda/perl-file-find.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-find
   :alt:   (downloads)
.. |docker_perl-file-find| image:: https://quay.io/repository/biocontainers/perl-file-find/status
   :target: https://quay.io/repository/biocontainers/perl-file-find
.. _`perl-file-find/tags`: https://quay.io/repository/biocontainers/perl-file-find?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-find";
        var versions = ["1.27","1.27","1.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-find/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-find/README.html