:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-inline-c'
.. highlight: bash

perl-inline-c
=============

.. conda:recipe:: perl-inline-c
   :replaces_section_title:
   :noindex:

   C Language Support for Inline

   :homepage: https://github.com/ingydotnet/inline-c-pm
   :license: perl_5
   :recipe: /`perl-inline-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline-c/meta.yaml>`_

   


.. conda:package:: perl-inline-c

   |downloads_perl-inline-c| |docker_perl-inline-c|

   :versions:
      
      

      ``0.81-2``,  ``0.81-1``,  ``0.81-0``,  ``0.78-1``,  ``0.78-0``,  ``0.76-1``,  ``0.76-0``

      

   
   :depends gcc_linux-64: ``12.*``
   :depends libgcc-ng: ``>=12``
   :depends make: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-extutils-makemaker: 
   :depends perl-inline: 
   :depends perl-parse-recdescent: 
   :depends perl-pegex: 
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

      mamba install perl-inline-c

   and update with::

      mamba update perl-inline-c

  To create a new environment, run::

      mamba create --name myenvname perl-inline-c

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-inline-c:<tag>

   (see `perl-inline-c/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-inline-c| image:: https://img.shields.io/conda/dn/bioconda/perl-inline-c.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-inline-c
   :alt:   (downloads)
.. |docker_perl-inline-c| image:: https://quay.io/repository/biocontainers/perl-inline-c/status
   :target: https://quay.io/repository/biocontainers/perl-inline-c
.. _`perl-inline-c/tags`: https://quay.io/repository/biocontainers/perl-inline-c?tab=tags


.. raw:: html

    <script>
        var package = "perl-inline-c";
        var versions = ["0.81","0.81","0.81","0.78","0.78"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-inline-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-inline-c/README.html