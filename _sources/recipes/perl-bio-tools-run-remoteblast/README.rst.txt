:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-tools-run-remoteblast'
.. highlight: bash

perl-bio-tools-run-remoteblast
==============================

.. conda:recipe:: perl-bio-tools-run-remoteblast/1.7.3
   :replaces_section_title:
   :noindex:

   Object for remote execution of the NCBI Blast via HTTP

   :homepage: https://metacpan.org/release/Bio-Tools-Run-RemoteBlast
   :license: perl_5
   :recipe: /`perl-bio-tools-run-remoteblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-remoteblast>`_/`1.7.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-remoteblast/1.7.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-remoteblast/1.7.3/meta.yaml>`_

   


.. conda:package:: perl-bio-tools-run-remoteblast

   |downloads_perl-bio-tools-run-remoteblast| |docker_perl-bio-tools-run-remoteblast|

   :versions:
      
      

      ``1.7.3-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: 
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

      mamba install perl-bio-tools-run-remoteblast

   and update with::

      mamba update perl-bio-tools-run-remoteblast

  To create a new environment, run::

      mamba create --name myenvname perl-bio-tools-run-remoteblast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-tools-run-remoteblast:<tag>

   (see `perl-bio-tools-run-remoteblast/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-tools-run-remoteblast| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-tools-run-remoteblast.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-tools-run-remoteblast
   :alt:   (downloads)
.. |docker_perl-bio-tools-run-remoteblast| image:: https://quay.io/repository/biocontainers/perl-bio-tools-run-remoteblast/status
   :target: https://quay.io/repository/biocontainers/perl-bio-tools-run-remoteblast
.. _`perl-bio-tools-run-remoteblast/tags`: https://quay.io/repository/biocontainers/perl-bio-tools-run-remoteblast?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-tools-run-remoteblast";
        var versions = ["1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-tools-run-remoteblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-tools-run-remoteblast/README.html