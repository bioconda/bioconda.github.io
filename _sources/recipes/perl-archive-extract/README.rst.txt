:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-extract'
.. highlight: bash

perl-archive-extract
====================

.. conda:recipe:: perl-archive-extract
   :replaces_section_title:
   :noindex:

   Generic archive extracting mechanism

   :homepage: http://metacpan.org/pod/Archive::Extract
   :license: perl_5
   :recipe: /`perl-archive-extract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-extract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-extract/meta.yaml>`_

   


.. conda:package:: perl-archive-extract

   |downloads_perl-archive-extract| |docker_perl-archive-extract|

   :versions:
      
      

      ``0.88-0``,  ``0.80-1``,  ``0.80-0``,  ``0.76-4``,  ``0.76-3``,  ``0.76-2``,  ``0.76-1``,  ``0.76-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-path: 
   :depends perl-ipc-cmd: 
   :depends perl-locale-maketext-simple: 
   :depends perl-module-load-conditional: 
   :depends perl-params-check: ``>=0.07``
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

      mamba install perl-archive-extract

   and update with::

      mamba update perl-archive-extract

  To create a new environment, run::

      mamba create --name myenvname perl-archive-extract

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-archive-extract:<tag>

   (see `perl-archive-extract/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-archive-extract| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-extract.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-archive-extract
   :alt:   (downloads)
.. |docker_perl-archive-extract| image:: https://quay.io/repository/biocontainers/perl-archive-extract/status
   :target: https://quay.io/repository/biocontainers/perl-archive-extract
.. _`perl-archive-extract/tags`: https://quay.io/repository/biocontainers/perl-archive-extract?tab=tags


.. raw:: html

    <script>
        var package = "perl-archive-extract";
        var versions = ["0.88","0.80","0.80","0.76","0.76"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-extract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-extract/README.html