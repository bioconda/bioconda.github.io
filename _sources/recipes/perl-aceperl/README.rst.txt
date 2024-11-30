:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-aceperl'
.. highlight: bash

perl-aceperl
============

.. conda:recipe:: perl-aceperl
   :replaces_section_title:
   :noindex:

   Object\-Oriented Access to ACEDB Databases

   :homepage: http://metacpan.org/pod/AcePerl
   :license: unknown
   :recipe: /`perl-aceperl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aceperl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aceperl/meta.yaml>`_

   


.. conda:package:: perl-aceperl

   |downloads_perl-aceperl| |docker_perl-aceperl|

   :versions:
      
      

      ``1.92-5``,  ``1.92-4``,  ``1.92-3``,  ``1.92-2``,  ``1.92-1``,  ``1.92-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-cache-cache: 
   :depends perl-digest-md5: 
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

      mamba install perl-aceperl

   and update with::

      mamba update perl-aceperl

  To create a new environment, run::

      mamba create --name myenvname perl-aceperl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-aceperl:<tag>

   (see `perl-aceperl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-aceperl| image:: https://img.shields.io/conda/dn/bioconda/perl-aceperl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-aceperl
   :alt:   (downloads)
.. |docker_perl-aceperl| image:: https://quay.io/repository/biocontainers/perl-aceperl/status
   :target: https://quay.io/repository/biocontainers/perl-aceperl
.. _`perl-aceperl/tags`: https://quay.io/repository/biocontainers/perl-aceperl?tab=tags


.. raw:: html

    <script>
        var package = "perl-aceperl";
        var versions = ["1.92","1.92","1.92","1.92","1.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-aceperl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-aceperl/README.html