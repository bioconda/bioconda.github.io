:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-go-perl'
.. highlight: bash

perl-go-perl
============

.. conda:recipe:: perl-go-perl
   :replaces_section_title:
   :noindex:

   perl modules for GO and other OBO ontologies

   :homepage: http://metacpan.org/pod/go-perl
   :license: BSD-3-Clause
   :recipe: /`perl-go-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-go-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-go-perl/meta.yaml>`_

   


.. conda:package:: perl-go-perl

   |downloads_perl-go-perl| |docker_perl-go-perl|

   :versions:
      
      

      ``0.15-4``,  ``0.15-3``,  ``0.15-1``,  ``0.15-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-dumper: 
   :depends perl-data-stag: ``>=0.07``
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

      mamba install perl-go-perl

   and update with::

      mamba update perl-go-perl

  To create a new environment, run::

      mamba create --name myenvname perl-go-perl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-go-perl:<tag>

   (see `perl-go-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-go-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-go-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-go-perl
   :alt:   (downloads)
.. |docker_perl-go-perl| image:: https://quay.io/repository/biocontainers/perl-go-perl/status
   :target: https://quay.io/repository/biocontainers/perl-go-perl
.. _`perl-go-perl/tags`: https://quay.io/repository/biocontainers/perl-go-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-go-perl";
        var versions = ["0.15","0.15","0.15","0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-go-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-go-perl/README.html