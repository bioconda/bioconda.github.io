:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-blib'
.. highlight: bash

perl-blib
=========

.. conda:recipe:: perl-blib/1.06
   :replaces_section_title:
   :noindex:

   Use MakeMaker\'s uninstalled version of a package

   :homepage: http://metacpan.org/pod/blib
   :license: perl_5
   :recipe: /`perl-blib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-blib>`_/`1.06 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-blib/1.06>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-blib/1.06/meta.yaml>`_

   


.. conda:package:: perl-blib

   |downloads_perl-blib| |docker_perl-blib|

   :versions:
      
      

      ``1.06-2``,  ``1.06-1``,  ``1.06-0``

      

   
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

      mamba install perl-blib

   and update with::

      mamba update perl-blib

  To create a new environment, run::

      mamba create --name myenvname perl-blib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-blib:<tag>

   (see `perl-blib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-blib| image:: https://img.shields.io/conda/dn/bioconda/perl-blib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-blib
   :alt:   (downloads)
.. |docker_perl-blib| image:: https://quay.io/repository/biocontainers/perl-blib/status
   :target: https://quay.io/repository/biocontainers/perl-blib
.. _`perl-blib/tags`: https://quay.io/repository/biocontainers/perl-blib?tab=tags


.. raw:: html

    <script>
        var package = "perl-blib";
        var versions = ["1.06","1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-blib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-blib/README.html