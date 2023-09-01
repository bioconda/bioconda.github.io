:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-template'
.. highlight: bash

perl-html-template
==================

.. conda:recipe:: perl-html-template
   :replaces_section_title:
   :noindex:

   Perl module to use HTML\-like templating language

   :homepage: https://metacpan.org/pod/HTML::Template
   :license: perl_5
   :recipe: /`perl-html-template <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-template>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-template/meta.yaml>`_

   


.. conda:package:: perl-html-template

   |downloads_perl-html-template| |docker_perl-html-template|

   :versions:
      
      

      ``2.97-2``,  ``2.97-1``,  ``2.95-1``,  ``2.95-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-cgi: 
   :depends perl-scalar-list-utils: 
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

      mamba install perl-html-template

   and update with::

      mamba update perl-html-template

  To create a new environment, run::

      mamba create --name myenvname perl-html-template

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-template:<tag>

   (see `perl-html-template/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-template| image:: https://img.shields.io/conda/dn/bioconda/perl-html-template.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-template
   :alt:   (downloads)
.. |docker_perl-html-template| image:: https://quay.io/repository/biocontainers/perl-html-template/status
   :target: https://quay.io/repository/biocontainers/perl-html-template
.. _`perl-html-template/tags`: https://quay.io/repository/biocontainers/perl-html-template?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-template";
        var versions = ["2.97","2.97","2.95","2.95"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-template/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-template/README.html