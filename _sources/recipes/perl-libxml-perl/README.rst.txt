:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-libxml-perl'
.. highlight: bash

perl-libxml-perl
================

.. conda:recipe:: perl-libxml-perl
   :replaces_section_title:
   :noindex:

   Perl SAX parser using nsgmls

   :homepage: http://metacpan.org/pod/libxml-perl
   :license: unknown
   :recipe: /`perl-libxml-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libxml-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libxml-perl/meta.yaml>`_

   


.. conda:package:: perl-libxml-perl

   |downloads_perl-libxml-perl| |docker_perl-libxml-perl|

   :versions:
      
      

      ``0.08-3``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-xml-parser: 
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

      mamba install perl-libxml-perl

   and update with::

      mamba update perl-libxml-perl

  To create a new environment, run::

      mamba create --name myenvname perl-libxml-perl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-libxml-perl:<tag>

   (see `perl-libxml-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-libxml-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-libxml-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-libxml-perl
   :alt:   (downloads)
.. |docker_perl-libxml-perl| image:: https://quay.io/repository/biocontainers/perl-libxml-perl/status
   :target: https://quay.io/repository/biocontainers/perl-libxml-perl
.. _`perl-libxml-perl/tags`: https://quay.io/repository/biocontainers/perl-libxml-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-libxml-perl";
        var versions = ["0.08","0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-libxml-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-libxml-perl/README.html