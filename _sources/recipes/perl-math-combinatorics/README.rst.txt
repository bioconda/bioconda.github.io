:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-combinatorics'
.. highlight: bash

perl-math-combinatorics
=======================

.. conda:recipe:: perl-math-combinatorics
   :replaces_section_title:
   :noindex:

   Perform combinations and permutations on lists

   :homepage: http://metacpan.org/pod/Math-Combinatorics
   :license: unknown
   :recipe: /`perl-math-combinatorics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-combinatorics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-combinatorics/meta.yaml>`_

   


.. conda:package:: perl-math-combinatorics

   |downloads_perl-math-combinatorics| |docker_perl-math-combinatorics|

   :versions:
      
      

      ``0.09-2``,  ``0.09-1``,  ``0.09-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-math-combinatorics

   and update with::

      mamba update perl-math-combinatorics

  To create a new environment, run::

      mamba create --name myenvname perl-math-combinatorics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-combinatorics:<tag>

   (see `perl-math-combinatorics/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-combinatorics| image:: https://img.shields.io/conda/dn/bioconda/perl-math-combinatorics.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-combinatorics
   :alt:   (downloads)
.. |docker_perl-math-combinatorics| image:: https://quay.io/repository/biocontainers/perl-math-combinatorics/status
   :target: https://quay.io/repository/biocontainers/perl-math-combinatorics
.. _`perl-math-combinatorics/tags`: https://quay.io/repository/biocontainers/perl-math-combinatorics?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-combinatorics";
        var versions = ["0.09","0.09","0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-combinatorics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-combinatorics/README.html