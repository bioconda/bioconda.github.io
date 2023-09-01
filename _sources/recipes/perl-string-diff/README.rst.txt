:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-diff'
.. highlight: bash

perl-string-diff
================

.. conda:recipe:: perl-string-diff
   :replaces_section_title:
   :noindex:

   Simple diff to String

   :homepage: https://github.com/yappo/p5-String-Diff
   :license: perl_5
   :recipe: /`perl-string-diff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-diff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-diff/meta.yaml>`_

   


.. conda:package:: perl-string-diff

   |downloads_perl-string-diff| |docker_perl-string-diff|

   :versions:
      
      

      ``0.07-1``,  ``0.07-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-algorithm-diff: 
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

      mamba install perl-string-diff

   and update with::

      mamba update perl-string-diff

  To create a new environment, run::

      mamba create --name myenvname perl-string-diff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-string-diff:<tag>

   (see `perl-string-diff/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-diff| image:: https://img.shields.io/conda/dn/bioconda/perl-string-diff.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-diff
   :alt:   (downloads)
.. |docker_perl-string-diff| image:: https://quay.io/repository/biocontainers/perl-string-diff/status
   :target: https://quay.io/repository/biocontainers/perl-string-diff
.. _`perl-string-diff/tags`: https://quay.io/repository/biocontainers/perl-string-diff?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-diff";
        var versions = ["0.07","0.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-diff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-diff/README.html