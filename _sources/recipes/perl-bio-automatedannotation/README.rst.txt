:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-automatedannotation'
.. highlight: bash

perl-bio-automatedannotation
============================

.. conda:recipe:: perl-bio-automatedannotation
   :replaces_section_title:
   :noindex:

   Automated annotation of assemblies

   :homepage: http://www.sanger.ac.uk/
   :license: open_source
   :recipe: /`perl-bio-automatedannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-automatedannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-automatedannotation/meta.yaml>`_

   


.. conda:package:: perl-bio-automatedannotation

   |downloads_perl-bio-automatedannotation| |docker_perl-bio-automatedannotation|

   :versions:
      
      

      ``2021.01.04.08.19.58.619-0``,  ``1.182770-1``,  ``1.182770-0``

      

   
   :depends blast: 
   :depends hmmer: 
   :depends parallel: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-procedural: 
   :depends perl-bioperl: 
   :depends perl-bioperl-run: 
   :depends perl-class-load: 
   :depends perl-devel-globaldestruction: 
   :depends perl-devel-overloadinfo: 
   :depends perl-eval-closure: 
   :depends perl-exception-class: 
   :depends perl-file-slurper: 
   :depends perl-file-temp: 
   :depends perl-getopt-long: 
   :depends perl-module-runtime: 
   :depends perl-moose: 
   :depends perl-mro-compat: 
   :depends perl-package-deprecationmanager: 
   :depends perl-text-csv: 
   :depends perl-time-piece: 
   :depends perl-xml-simple: 
   :depends prodigal: 
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

      mamba install perl-bio-automatedannotation

   and update with::

      mamba update perl-bio-automatedannotation

  To create a new environment, run::

      mamba create --name myenvname perl-bio-automatedannotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-automatedannotation:<tag>

   (see `perl-bio-automatedannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-automatedannotation| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-automatedannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-automatedannotation
   :alt:   (downloads)
.. |docker_perl-bio-automatedannotation| image:: https://quay.io/repository/biocontainers/perl-bio-automatedannotation/status
   :target: https://quay.io/repository/biocontainers/perl-bio-automatedannotation
.. _`perl-bio-automatedannotation/tags`: https://quay.io/repository/biocontainers/perl-bio-automatedannotation?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-automatedannotation";
        var versions = ["2021.01.04.08.19.58.619","1.182770","1.182770"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-automatedannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-automatedannotation/README.html