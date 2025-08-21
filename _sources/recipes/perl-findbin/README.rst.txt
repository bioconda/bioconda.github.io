:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-findbin'
.. highlight: bash

perl-findbin
============

.. conda:recipe:: perl-findbin
   :replaces_section_title:
   :noindex:

   Locate directory of original perl script.

   :homepage: https://metacpan.org/pod/FindBin
   :license: Perl_5
   :recipe: /`perl-findbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin/meta.yaml>`_

   


.. conda:package:: perl-findbin

   |downloads_perl-findbin| |docker_perl-findbin|

   :versions:
      
      

      ``1.54-0``,  ``1.51-3``,  ``1.51-2``,  ``1.51-1``,  ``1.51-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-findbin

   and update with::

      mamba update perl-findbin

  To create a new environment, run::

      mamba create --name myenvname perl-findbin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-findbin:<tag>

   (see `perl-findbin/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-findbin| image:: https://img.shields.io/conda/dn/bioconda/perl-findbin.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-findbin
   :alt:   (downloads)
.. |docker_perl-findbin| image:: https://quay.io/repository/biocontainers/perl-findbin/status
   :target: https://quay.io/repository/biocontainers/perl-findbin
.. _`perl-findbin/tags`: https://quay.io/repository/biocontainers/perl-findbin?tab=tags


.. raw:: html

    <script>
        var package = "perl-findbin";
        var versions = ["1.54","1.51","1.51","1.51","1.51"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-findbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-findbin/README.html