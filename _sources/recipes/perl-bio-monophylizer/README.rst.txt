:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-monophylizer'
.. highlight: bash

perl-bio-monophylizer
=====================

.. conda:recipe:: perl-bio-monophylizer
   :replaces_section_title:
   :noindex:

   A web and command line tool to assess monophyly

   :homepage: https://metacpan.org/pod/Bio::Monophylizer
   :license: Perl_5
   :recipe: /`perl-bio-monophylizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-monophylizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-monophylizer/meta.yaml>`_

   


.. conda:package:: perl-bio-monophylizer

   |downloads_perl-bio-monophylizer| |docker_perl-bio-monophylizer|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends perl-bio-phylo: 
   :depends perl-cgi: 
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

      mamba install perl-bio-monophylizer

   and update with::

      mamba update perl-bio-monophylizer

  To create a new environment, run::

      mamba create --name myenvname perl-bio-monophylizer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-monophylizer:<tag>

   (see `perl-bio-monophylizer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-monophylizer| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-monophylizer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-monophylizer
   :alt:   (downloads)
.. |docker_perl-bio-monophylizer| image:: https://quay.io/repository/biocontainers/perl-bio-monophylizer/status
   :target: https://quay.io/repository/biocontainers/perl-bio-monophylizer
.. _`perl-bio-monophylizer/tags`: https://quay.io/repository/biocontainers/perl-bio-monophylizer?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-monophylizer";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-monophylizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-monophylizer/README.html