:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-heap-simple-perl'
.. highlight: bash

perl-heap-simple-perl
=====================

.. conda:recipe:: perl-heap-simple-perl
   :replaces_section_title:
   :noindex:

   A pure perl implementation of the Heap\:\:Simple interface

   :homepage: http://metacpan.org/pod/Heap::Simple::Perl
   :license: unknown
   :recipe: /`perl-heap-simple-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple-perl/meta.yaml>`_

   


.. conda:package:: perl-heap-simple-perl

   |downloads_perl-heap-simple-perl| |docker_perl-heap-simple-perl|

   :versions:
      
      

      ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
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

      mamba install perl-heap-simple-perl

   and update with::

      mamba update perl-heap-simple-perl

  To create a new environment, run::

      mamba create --name myenvname perl-heap-simple-perl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-heap-simple-perl:<tag>

   (see `perl-heap-simple-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-heap-simple-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-heap-simple-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-heap-simple-perl
   :alt:   (downloads)
.. |docker_perl-heap-simple-perl| image:: https://quay.io/repository/biocontainers/perl-heap-simple-perl/status
   :target: https://quay.io/repository/biocontainers/perl-heap-simple-perl
.. _`perl-heap-simple-perl/tags`: https://quay.io/repository/biocontainers/perl-heap-simple-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-heap-simple-perl";
        var versions = ["0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap-simple-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap-simple-perl/README.html