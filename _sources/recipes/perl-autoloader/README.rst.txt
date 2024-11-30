:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-autoloader'
.. highlight: bash

perl-autoloader
===============

.. conda:recipe:: perl-autoloader/5.74
   :replaces_section_title:
   :noindex:

   load subroutines only on demand

   :homepage: http://metacpan.org/pod/AutoLoader
   :license: perl_5
   :recipe: /`perl-autoloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autoloader>`_/`5.74 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autoloader/5.74>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autoloader/5.74/meta.yaml>`_

   


.. conda:package:: perl-autoloader

   |downloads_perl-autoloader| |docker_perl-autoloader|

   :versions:
      
      

      ``5.74-3``,  ``5.74-2``,  ``5.74-1``,  ``5.74-0``

      

   
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

      mamba install perl-autoloader

   and update with::

      mamba update perl-autoloader

  To create a new environment, run::

      mamba create --name myenvname perl-autoloader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-autoloader:<tag>

   (see `perl-autoloader/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-autoloader| image:: https://img.shields.io/conda/dn/bioconda/perl-autoloader.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-autoloader
   :alt:   (downloads)
.. |docker_perl-autoloader| image:: https://quay.io/repository/biocontainers/perl-autoloader/status
   :target: https://quay.io/repository/biocontainers/perl-autoloader
.. _`perl-autoloader/tags`: https://quay.io/repository/biocontainers/perl-autoloader?tab=tags


.. raw:: html

    <script>
        var package = "perl-autoloader";
        var versions = ["5.74","5.74","5.74","5.74"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-autoloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-autoloader/README.html