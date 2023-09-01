:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-visitor'
.. highlight: bash

perl-data-visitor
=================

.. conda:recipe:: perl-data-visitor/0.30
   :replaces_section_title:
   :noindex:

   Visitor style traversal of Perl data structures

   :homepage: http://metacpan.org/release/Data-Visitor
   :license: perl_5
   :recipe: /`perl-data-visitor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor>`_/`0.30 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor/0.30>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor/0.30/meta.yaml>`_

   


.. conda:package:: perl-data-visitor

   |downloads_perl-data-visitor| |docker_perl-data-visitor|

   :versions:
      
      

      ``0.30-3``,  ``0.30-2``,  ``0.30-1``,  ``0.30-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-class-load: ``>=0.06``
   :depends perl-moose: 
   :depends perl-namespace-clean: 
   :depends perl-task-weaken: 
   :depends perl-tie-toobject: 
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

      mamba install perl-data-visitor

   and update with::

      mamba update perl-data-visitor

  To create a new environment, run::

      mamba create --name myenvname perl-data-visitor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-visitor:<tag>

   (see `perl-data-visitor/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-visitor| image:: https://img.shields.io/conda/dn/bioconda/perl-data-visitor.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-visitor
   :alt:   (downloads)
.. |docker_perl-data-visitor| image:: https://quay.io/repository/biocontainers/perl-data-visitor/status
   :target: https://quay.io/repository/biocontainers/perl-data-visitor
.. _`perl-data-visitor/tags`: https://quay.io/repository/biocontainers/perl-data-visitor?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-visitor";
        var versions = ["0.30","0.30","0.30","0.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-visitor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-visitor/README.html