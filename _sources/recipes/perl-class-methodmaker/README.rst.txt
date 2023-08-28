:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-methodmaker'
.. highlight: bash

perl-class-methodmaker
======================

.. conda:recipe:: perl-class-methodmaker
   :replaces_section_title:
   :noindex:

   Create generic methods for OO Perl

   :homepage: http://search.cpan.org/~schwigon/Class-MethodMaker-2.24/
   :license: perl_5
   :recipe: /`perl-class-methodmaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-methodmaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-methodmaker/meta.yaml>`_

   


.. conda:package:: perl-class-methodmaker

   |downloads_perl-class-methodmaker| |docker_perl-class-methodmaker|

   :versions:
      
      

      ``2.24-4``,  ``2.24-3``,  ``2.24-2``,  ``2.24-1``,  ``2.24-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-getopt-long: 
   :depends perl-pod-escapes: 
   :depends perl-test: 
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

      mamba install perl-class-methodmaker

   and update with::

      mamba update perl-class-methodmaker

  To create a new environment, run::

      mamba create --name myenvname perl-class-methodmaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-class-methodmaker:<tag>

   (see `perl-class-methodmaker/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-methodmaker| image:: https://img.shields.io/conda/dn/bioconda/perl-class-methodmaker.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-methodmaker
   :alt:   (downloads)
.. |docker_perl-class-methodmaker| image:: https://quay.io/repository/biocontainers/perl-class-methodmaker/status
   :target: https://quay.io/repository/biocontainers/perl-class-methodmaker
.. _`perl-class-methodmaker/tags`: https://quay.io/repository/biocontainers/perl-class-methodmaker?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-methodmaker";
        var versions = ["2.24","2.24","2.24","2.24","2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-methodmaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-methodmaker/README.html