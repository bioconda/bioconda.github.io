:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-template'
.. highlight: bash

perl-text-template
==================

.. conda:recipe:: perl-text-template/1.46
   :replaces_section_title:
   :noindex:

   Expand template text with embedded Perl

   :homepage: http://metacpan.org/pod/Text::Template
   :license: unknown
   :recipe: /`perl-text-template <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-template>`_/`1.46 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-template/1.46>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-template/1.46/meta.yaml>`_

   


.. conda:package:: perl-text-template

   |downloads_perl-text-template| |docker_perl-text-template|

   :versions:
      
      

      ``1.46-2``,  ``1.46-1``,  ``1.46-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-text-template

   and update with::

      mamba update perl-text-template

  To create a new environment, run::

      mamba create --name myenvname perl-text-template

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-template:<tag>

   (see `perl-text-template/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-template| image:: https://img.shields.io/conda/dn/bioconda/perl-text-template.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-template
   :alt:   (downloads)
.. |docker_perl-text-template| image:: https://quay.io/repository/biocontainers/perl-text-template/status
   :target: https://quay.io/repository/biocontainers/perl-text-template
.. _`perl-text-template/tags`: https://quay.io/repository/biocontainers/perl-text-template?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-template";
        var versions = ["1.46","1.46","1.46"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-template/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-template/README.html