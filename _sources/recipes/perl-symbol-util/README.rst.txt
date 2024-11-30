:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-symbol-util'
.. highlight: bash

perl-symbol-util
================

.. conda:recipe:: perl-symbol-util/0.0203
   :replaces_section_title:
   :noindex:

   Additional utils for Perl symbols manipulation

   :homepage: http://metacpan.org/pod/Symbol::Util
   :license: perl_5
   :recipe: /`perl-symbol-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol-util>`_/`0.0203 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol-util/0.0203>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol-util/0.0203/meta.yaml>`_

   


.. conda:package:: perl-symbol-util

   |downloads_perl-symbol-util| |docker_perl-symbol-util|

   :versions:
      
      

      ``0.0203-2``,  ``0.0203-1``,  ``0.0203-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
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

      mamba install perl-symbol-util

   and update with::

      mamba update perl-symbol-util

  To create a new environment, run::

      mamba create --name myenvname perl-symbol-util

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-symbol-util:<tag>

   (see `perl-symbol-util/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-symbol-util| image:: https://img.shields.io/conda/dn/bioconda/perl-symbol-util.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-symbol-util
   :alt:   (downloads)
.. |docker_perl-symbol-util| image:: https://quay.io/repository/biocontainers/perl-symbol-util/status
   :target: https://quay.io/repository/biocontainers/perl-symbol-util
.. _`perl-symbol-util/tags`: https://quay.io/repository/biocontainers/perl-symbol-util?tab=tags


.. raw:: html

    <script>
        var package = "perl-symbol-util";
        var versions = ["0.0203","0.0203","0.0203"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-symbol-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-symbol-util/README.html