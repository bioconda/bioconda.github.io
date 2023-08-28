:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-easel'
.. highlight: bash

perl-bio-easel
==============

.. conda:recipe:: perl-bio-easel
   :replaces_section_title:
   :noindex:

   Perl modules and scripts for interfacing with Sean Eddy\'s C easel sequence analysis library using Perl\'s Inline.

   :homepage: https://github.com/nawrockie/Bio-Easel
   :license: BSD
   :recipe: /`perl-bio-easel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-easel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-easel/meta.yaml>`_

   


.. conda:package:: perl-bio-easel

   |downloads_perl-bio-easel| |docker_perl-bio-easel|

   :versions:
      
      

      ``0.16-1``,  ``0.16-0``,  ``0.15-2``,  ``0.15-1``,  ``0.15-0``,  ``0.14-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-inline: 
   :depends perl-inline-c: 
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

      mamba install perl-bio-easel

   and update with::

      mamba update perl-bio-easel

  To create a new environment, run::

      mamba create --name myenvname perl-bio-easel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-easel:<tag>

   (see `perl-bio-easel/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-easel| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-easel.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-easel
   :alt:   (downloads)
.. |docker_perl-bio-easel| image:: https://quay.io/repository/biocontainers/perl-bio-easel/status
   :target: https://quay.io/repository/biocontainers/perl-bio-easel
.. _`perl-bio-easel/tags`: https://quay.io/repository/biocontainers/perl-bio-easel?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-easel";
        var versions = ["0.16","0.16","0.15","0.15","0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-easel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-easel/README.html