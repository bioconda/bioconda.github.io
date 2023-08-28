:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-prompt'
.. highlight: bash

perl-io-prompt
==============

.. conda:recipe:: perl-io-prompt
   :replaces_section_title:
   :noindex:

   Interactively prompt for user input

   :homepage: http://search.cpan.org/dist/IO-Prompt/lib/IO/Prompt.pm
   :license: perl_5
   :recipe: /`perl-io-prompt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-prompt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-prompt/meta.yaml>`_

   


.. conda:package:: perl-io-prompt

   |downloads_perl-io-prompt| |docker_perl-io-prompt|

   :versions:
      
      

      ``0.997004-3``,  ``0.997004-2``,  ``0.997004-1``,  ``0.997004-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-termreadkey: 
   :depends perl-want: 
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

      mamba install perl-io-prompt

   and update with::

      mamba update perl-io-prompt

  To create a new environment, run::

      mamba create --name myenvname perl-io-prompt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-prompt:<tag>

   (see `perl-io-prompt/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-prompt| image:: https://img.shields.io/conda/dn/bioconda/perl-io-prompt.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-prompt
   :alt:   (downloads)
.. |docker_perl-io-prompt| image:: https://quay.io/repository/biocontainers/perl-io-prompt/status
   :target: https://quay.io/repository/biocontainers/perl-io-prompt
.. _`perl-io-prompt/tags`: https://quay.io/repository/biocontainers/perl-io-prompt?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-prompt";
        var versions = ["0.997004","0.997004","0.997004","0.997004"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-prompt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-prompt/README.html