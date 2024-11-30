:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-detect-software'
.. highlight: bash

perl-term-detect-software
=========================

.. conda:recipe:: perl-term-detect-software
   :replaces_section_title:
   :noindex:

   Detect terminal \(emulator\) software and its capabilities

   :homepage: https://metacpan.org/release/Term-Detect-Software
   :license: perl_5
   :recipe: /`perl-term-detect-software <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-detect-software>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-detect-software/meta.yaml>`_

   


.. conda:package:: perl-term-detect-software

   |downloads_perl-term-detect-software| |docker_perl-term-detect-software|

   :versions:
      
      

      ``0.223-0``,  ``0.21-3``,  ``0.21-2``,  ``0.21-1``,  ``0.21-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-experimental: 
   :depends perl-file-which: 
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

      mamba install perl-term-detect-software

   and update with::

      mamba update perl-term-detect-software

  To create a new environment, run::

      mamba create --name myenvname perl-term-detect-software

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-term-detect-software:<tag>

   (see `perl-term-detect-software/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-detect-software| image:: https://img.shields.io/conda/dn/bioconda/perl-term-detect-software.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-detect-software
   :alt:   (downloads)
.. |docker_perl-term-detect-software| image:: https://quay.io/repository/biocontainers/perl-term-detect-software/status
   :target: https://quay.io/repository/biocontainers/perl-term-detect-software
.. _`perl-term-detect-software/tags`: https://quay.io/repository/biocontainers/perl-term-detect-software?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-detect-software";
        var versions = ["0.223","0.21","0.21","0.21","0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-detect-software/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-detect-software/README.html