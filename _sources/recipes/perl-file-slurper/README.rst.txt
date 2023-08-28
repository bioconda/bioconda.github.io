:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-slurper'
.. highlight: bash

perl-file-slurper
=================

.. conda:recipe:: perl-file-slurper
   :replaces_section_title:
   :noindex:

   A simple\, sane and efficient module to slurp a file

   :homepage: http://metacpan.org/pod/File-Slurper
   :license: perl_5
   :recipe: /`perl-file-slurper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurper/meta.yaml>`_

   


.. conda:package:: perl-file-slurper

   |downloads_perl-file-slurper| |docker_perl-file-slurper|

   :versions:
      
      

      ``0.014-0``,  ``0.013-0``,  ``0.012-1``,  ``0.012-0``,  ``0.008-2``,  ``0.008-1``,  ``0.008-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-encode: 
   :depends perl-exporter: 
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

      mamba install perl-file-slurper

   and update with::

      mamba update perl-file-slurper

  To create a new environment, run::

      mamba create --name myenvname perl-file-slurper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-slurper:<tag>

   (see `perl-file-slurper/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-slurper| image:: https://img.shields.io/conda/dn/bioconda/perl-file-slurper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-slurper
   :alt:   (downloads)
.. |docker_perl-file-slurper| image:: https://quay.io/repository/biocontainers/perl-file-slurper/status
   :target: https://quay.io/repository/biocontainers/perl-file-slurper
.. _`perl-file-slurper/tags`: https://quay.io/repository/biocontainers/perl-file-slurper?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-slurper";
        var versions = ["0.014","0.013","0.012","0.012","0.008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-slurper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-slurper/README.html