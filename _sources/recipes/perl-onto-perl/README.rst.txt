:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-onto-perl'
.. highlight: bash

perl-onto-perl
==============

.. conda:recipe:: perl-onto-perl
   :replaces_section_title:
   :noindex:

   PERL modules for manipulating OBO\-formatted ontologies\, such as the Gene Ontology \(GO\)

   :homepage: http://metacpan.org/pod/ONTO-PERL
   :license: perl_5
   :recipe: /`perl-onto-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-onto-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-onto-perl/meta.yaml>`_

   


.. conda:package:: perl-onto-perl

   |downloads_perl-onto-perl| |docker_perl-onto-perl|

   :versions:
      
      

      ``1.45-3``,  ``1.45-2``,  ``1.45-1``,  ``1.45-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-date-manip: 
   :depends perl-text-csv: 
   :depends perl-xml-parser: 
   :depends perl-xml-xpath: 
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

      mamba install perl-onto-perl

   and update with::

      mamba update perl-onto-perl

  To create a new environment, run::

      mamba create --name myenvname perl-onto-perl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-onto-perl:<tag>

   (see `perl-onto-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-onto-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-onto-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-onto-perl
   :alt:   (downloads)
.. |docker_perl-onto-perl| image:: https://quay.io/repository/biocontainers/perl-onto-perl/status
   :target: https://quay.io/repository/biocontainers/perl-onto-perl
.. _`perl-onto-perl/tags`: https://quay.io/repository/biocontainers/perl-onto-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-onto-perl";
        var versions = ["1.45","1.45","1.45","1.45"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-onto-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-onto-perl/README.html