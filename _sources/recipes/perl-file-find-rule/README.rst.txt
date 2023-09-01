:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-find-rule'
.. highlight: bash

perl-file-find-rule
===================

.. conda:recipe:: perl-file-find-rule
   :replaces_section_title:
   :noindex:

   Alternative interface to File\:\:Find

   :homepage: http://metacpan.org/pod/File::Find::Rule
   :license: perl_5
   :recipe: /`perl-file-find-rule <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find-rule>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find-rule/meta.yaml>`_

   


.. conda:package:: perl-file-find-rule

   |downloads_perl-file-find-rule| |docker_perl-file-find-rule|

   :versions:
      
      

      ``0.34-6``,  ``0.34-5``,  ``0.34-4``,  ``0.34-3``,  ``0.34-2``,  ``0.34-1``,  ``0.34-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-number-compare: 
   :depends perl-text-glob: 
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

      mamba install perl-file-find-rule

   and update with::

      mamba update perl-file-find-rule

  To create a new environment, run::

      mamba create --name myenvname perl-file-find-rule

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-find-rule:<tag>

   (see `perl-file-find-rule/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-find-rule| image:: https://img.shields.io/conda/dn/bioconda/perl-file-find-rule.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-find-rule
   :alt:   (downloads)
.. |docker_perl-file-find-rule| image:: https://quay.io/repository/biocontainers/perl-file-find-rule/status
   :target: https://quay.io/repository/biocontainers/perl-file-find-rule
.. _`perl-file-find-rule/tags`: https://quay.io/repository/biocontainers/perl-file-find-rule?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-find-rule";
        var versions = ["0.34","0.34","0.34","0.34","0.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-find-rule/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-find-rule/README.html