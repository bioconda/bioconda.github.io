:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-formatter'
.. highlight: bash

perl-html-formatter
===================

.. conda:recipe:: perl-html-formatter
   :replaces_section_title:
   :noindex:

   Base class for HTML formatters

   :homepage: https://metacpan.org/release/HTML-Formatter
   :license: perl_5
   :recipe: /`perl-html-formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-formatter/meta.yaml>`_

   


.. conda:package:: perl-html-formatter

   |downloads_perl-html-formatter| |docker_perl-html-formatter|

   :versions:
      
      

      ``2.16-1``,  ``2.16-0``,  ``2.14-1``,  ``2.14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-encode: 
   :depends perl-font-afm: 
   :depends perl-html-tree: 
   :depends perl-parent: 
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

      mamba install perl-html-formatter

   and update with::

      mamba update perl-html-formatter

  To create a new environment, run::

      mamba create --name myenvname perl-html-formatter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-formatter:<tag>

   (see `perl-html-formatter/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-formatter| image:: https://img.shields.io/conda/dn/bioconda/perl-html-formatter.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-formatter
   :alt:   (downloads)
.. |docker_perl-html-formatter| image:: https://quay.io/repository/biocontainers/perl-html-formatter/status
   :target: https://quay.io/repository/biocontainers/perl-html-formatter
.. _`perl-html-formatter/tags`: https://quay.io/repository/biocontainers/perl-html-formatter?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-formatter";
        var versions = ["2.16","2.16","2.14","2.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-formatter/README.html