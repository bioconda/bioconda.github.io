:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-ansitable'
.. highlight: bash

perl-text-ansitable
===================

.. conda:recipe:: perl-text-ansitable/0.48
   :replaces_section_title:
   :noindex:

   Create nice formatted tables using extended ASCII and ANSI colors

   :homepage: https://metacpan.org/release/Text-ANSITable
   :license: perl_5
   :recipe: /`perl-text-ansitable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-ansitable>`_/`0.48 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-ansitable/0.48>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-ansitable/0.48/meta.yaml>`_

   


.. conda:package:: perl-text-ansitable

   |downloads_perl-text-ansitable| |docker_perl-text-ansitable|

   :versions:
      
      

      ``0.48-2``,  ``0.48-1``,  ``0.48-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-border-style: 
   :depends perl-color-theme: 
   :depends perl-extutils-makemaker: 
   :depends perl-json-maybexs: 
   :depends perl-module-load: 
   :depends perl-moo: 
   :depends perl-namespace-clean: 
   :depends perl-perl-osnames: 
   :depends perl-perlio: 
   :depends perl-term-app-roles: 
   :depends perl-test-exception: 
   :depends perl-test-more: 
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

      mamba install perl-text-ansitable

   and update with::

      mamba update perl-text-ansitable

  To create a new environment, run::

      mamba create --name myenvname perl-text-ansitable

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-ansitable:<tag>

   (see `perl-text-ansitable/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-ansitable| image:: https://img.shields.io/conda/dn/bioconda/perl-text-ansitable.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-ansitable
   :alt:   (downloads)
.. |docker_perl-text-ansitable| image:: https://quay.io/repository/biocontainers/perl-text-ansitable/status
   :target: https://quay.io/repository/biocontainers/perl-text-ansitable
.. _`perl-text-ansitable/tags`: https://quay.io/repository/biocontainers/perl-text-ansitable?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-ansitable";
        var versions = ["0.48","0.48","0.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-ansitable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-ansitable/README.html