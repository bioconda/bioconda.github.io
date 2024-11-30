:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-slurp-tiny'
.. highlight: bash

perl-file-slurp-tiny
====================

.. conda:recipe:: perl-file-slurp-tiny
   :replaces_section_title:
   :noindex:

   A simple\, sane and efficient file slurper \[DISCOURAGED\]

   :homepage: http://metacpan.org/pod/File-Slurp-Tiny
   :license: perl_5
   :recipe: /`perl-file-slurp-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurp-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurp-tiny/meta.yaml>`_

   


.. conda:package:: perl-file-slurp-tiny

   |downloads_perl-file-slurp-tiny| |docker_perl-file-slurp-tiny|

   :versions:
      
      

      ``0.004-2``,  ``0.004-1``,  ``0.004-0``

      

   
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

      mamba install perl-file-slurp-tiny

   and update with::

      mamba update perl-file-slurp-tiny

  To create a new environment, run::

      mamba create --name myenvname perl-file-slurp-tiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-slurp-tiny:<tag>

   (see `perl-file-slurp-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-slurp-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-file-slurp-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-slurp-tiny
   :alt:   (downloads)
.. |docker_perl-file-slurp-tiny| image:: https://quay.io/repository/biocontainers/perl-file-slurp-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-file-slurp-tiny
.. _`perl-file-slurp-tiny/tags`: https://quay.io/repository/biocontainers/perl-file-slurp-tiny?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-slurp-tiny";
        var versions = ["0.004","0.004","0.004"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-slurp-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-slurp-tiny/README.html