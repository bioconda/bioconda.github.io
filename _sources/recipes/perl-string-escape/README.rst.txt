:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-escape'
.. highlight: bash

perl-string-escape
==================

.. conda:recipe:: perl-string-escape/2010.002
   :replaces_section_title:
   :noindex:

   Backslash escapes\, quoted phrase\, word elision\, etc.

   :homepage: http://metacpan.org/pod/String::Escape
   :license: perl_5
   :recipe: /`perl-string-escape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-escape>`_/`2010.002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-escape/2010.002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-escape/2010.002/meta.yaml>`_

   


.. conda:package:: perl-string-escape

   |downloads_perl-string-escape| |docker_perl-string-escape|

   :versions:
      
      

      ``2010.002-1``,  ``2010.002-0``

      

   
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

      mamba install perl-string-escape

   and update with::

      mamba update perl-string-escape

  To create a new environment, run::

      mamba create --name myenvname perl-string-escape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-string-escape:<tag>

   (see `perl-string-escape/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-escape| image:: https://img.shields.io/conda/dn/bioconda/perl-string-escape.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-escape
   :alt:   (downloads)
.. |docker_perl-string-escape| image:: https://quay.io/repository/biocontainers/perl-string-escape/status
   :target: https://quay.io/repository/biocontainers/perl-string-escape
.. _`perl-string-escape/tags`: https://quay.io/repository/biocontainers/perl-string-escape?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-escape";
        var versions = ["2010.002","2010.002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-escape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-escape/README.html