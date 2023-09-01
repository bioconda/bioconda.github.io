:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-cigar'
.. highlight: bash

perl-bio-cigar
==============

.. conda:recipe:: perl-bio-cigar
   :replaces_section_title:
   :noindex:

   Parse CIGAR strings and translate coordinates to\/from reference\/query

   :homepage: https://github.com/MullinsLab/Bio-Cigar
   :license: gpl_2
   :recipe: /`perl-bio-cigar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-cigar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-cigar/meta.yaml>`_
   :links: biotools: :biotools:`bio-cigar`

   


.. conda:package:: perl-bio-cigar

   |downloads_perl-bio-cigar| |docker_perl-bio-cigar|

   :versions:
      
      

      ``1.01-7``,  ``1.01-6``,  ``1.01-5``,  ``1.01-4``,  ``1.01-3``,  ``1.01-2``,  ``1.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-moo: 
   :depends perl-namespace-clean: 
   :depends perl-type-tiny: 
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

      mamba install perl-bio-cigar

   and update with::

      mamba update perl-bio-cigar

  To create a new environment, run::

      mamba create --name myenvname perl-bio-cigar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-cigar:<tag>

   (see `perl-bio-cigar/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-cigar| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-cigar.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-cigar
   :alt:   (downloads)
.. |docker_perl-bio-cigar| image:: https://quay.io/repository/biocontainers/perl-bio-cigar/status
   :target: https://quay.io/repository/biocontainers/perl-bio-cigar
.. _`perl-bio-cigar/tags`: https://quay.io/repository/biocontainers/perl-bio-cigar?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-cigar";
        var versions = ["1.01","1.01","1.01","1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-cigar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-cigar/README.html