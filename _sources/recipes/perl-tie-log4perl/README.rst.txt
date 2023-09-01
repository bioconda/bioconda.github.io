:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-log4perl'
.. highlight: bash

perl-tie-log4perl
=================

.. conda:recipe:: perl-tie-log4perl
   :replaces_section_title:
   :noindex:

   Tie a filehandle to log via Log4perl

   :homepage: http://metacpan.org/pod/Tie::Log4perl
   :license: perl_5
   :recipe: /`perl-tie-log4perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-log4perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-log4perl/meta.yaml>`_

   


.. conda:package:: perl-tie-log4perl

   |downloads_perl-tie-log4perl| |docker_perl-tie-log4perl|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-log-log4perl: 
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

      mamba install perl-tie-log4perl

   and update with::

      mamba update perl-tie-log4perl

  To create a new environment, run::

      mamba create --name myenvname perl-tie-log4perl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-tie-log4perl:<tag>

   (see `perl-tie-log4perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-log4perl| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-log4perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-log4perl
   :alt:   (downloads)
.. |docker_perl-tie-log4perl| image:: https://quay.io/repository/biocontainers/perl-tie-log4perl/status
   :target: https://quay.io/repository/biocontainers/perl-tie-log4perl
.. _`perl-tie-log4perl/tags`: https://quay.io/repository/biocontainers/perl-tie-log4perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-log4perl";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-log4perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-log4perl/README.html