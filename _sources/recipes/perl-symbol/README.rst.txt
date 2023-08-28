:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-symbol'
.. highlight: bash

perl-symbol
===========

.. conda:recipe:: perl-symbol/1.07
   :replaces_section_title:
   :noindex:

   manipulate Perl symbols and their names

   :homepage: http://metacpan.org/pod/Symbol
   :license: perl_5
   :recipe: /`perl-symbol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol>`_/`1.07 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol/1.07>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol/1.07/meta.yaml>`_

   


.. conda:package:: perl-symbol

   |downloads_perl-symbol| |docker_perl-symbol|

   :versions:
      
      

      ``1.07-2``,  ``1.07-1``,  ``1.07-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-symbol

   and update with::

      mamba update perl-symbol

  To create a new environment, run::

      mamba create --name myenvname perl-symbol

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-symbol:<tag>

   (see `perl-symbol/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-symbol| image:: https://img.shields.io/conda/dn/bioconda/perl-symbol.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-symbol
   :alt:   (downloads)
.. |docker_perl-symbol| image:: https://quay.io/repository/biocontainers/perl-symbol/status
   :target: https://quay.io/repository/biocontainers/perl-symbol
.. _`perl-symbol/tags`: https://quay.io/repository/biocontainers/perl-symbol?tab=tags


.. raw:: html

    <script>
        var package = "perl-symbol";
        var versions = ["1.07","1.07","1.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-symbol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-symbol/README.html