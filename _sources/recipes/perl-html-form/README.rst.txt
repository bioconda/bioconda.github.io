:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-form'
.. highlight: bash

perl-html-form
==============

.. conda:recipe:: perl-html-form
   :replaces_section_title:
   :noindex:

   Class that represents an HTML form element.

   :homepage: https://metacpan.org/pod/HTML::Form
   :license: perl_5
   :recipe: /`perl-html-form <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-form>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-form/meta.yaml>`_

   


.. conda:package:: perl-html-form

   |downloads_perl-html-form| |docker_perl-html-form|

   :versions:
      
      

      ``6.11-0``,  ``6.07-0``,  ``6.04-1``,  ``6.04-0``,  ``6.03-1``,  ``6.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-cpan-meta: 
   :depends perl-data-dumper: 
   :depends perl-extutils-cbuilder: 
   :depends perl-extutils-manifest: 
   :depends perl-extutils-parsexs: 
   :depends perl-file-path: 
   :depends perl-getopt-long: 
   :depends perl-html-parser: 
   :depends perl-http-message: ``>=6.18``
   :depends perl-module-metadata: 
   :depends perl-perl-ostype: 
   :depends perl-text-abbrev: 
   :depends perl-text-parsewords: 
   :depends perl-uri: 
   :depends perl-version: 
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

      mamba install perl-html-form

   and update with::

      mamba update perl-html-form

  To create a new environment, run::

      mamba create --name myenvname perl-html-form

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-form:<tag>

   (see `perl-html-form/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-form| image:: https://img.shields.io/conda/dn/bioconda/perl-html-form.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-form
   :alt:   (downloads)
.. |docker_perl-html-form| image:: https://quay.io/repository/biocontainers/perl-html-form/status
   :target: https://quay.io/repository/biocontainers/perl-html-form
.. _`perl-html-form/tags`: https://quay.io/repository/biocontainers/perl-html-form?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-form";
        var versions = ["6.11","6.07","6.04","6.04","6.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-form/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-form/README.html