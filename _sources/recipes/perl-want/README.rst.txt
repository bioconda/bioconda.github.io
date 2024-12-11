:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-want'
.. highlight: bash

perl-want
=========

.. conda:recipe:: perl-want
   :replaces_section_title:
   :noindex:

   This module generalises the mechanism of the wantarray function\, allowing a function to determine in some detail how its return value is going to be immediately used.

   :homepage: http://search.cpan.org/~robin/Want-0.29/Want.pm
   :license: perl_5
   :recipe: /`perl-want <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-want>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-want/meta.yaml>`_

   


.. conda:package:: perl-want

   |downloads_perl-want| |docker_perl-want|

   :versions:
      
      

      ``0.29-6``,  ``0.29-5``,  ``0.29-4``,  ``0.29-3``,  ``0.29-2``,  ``0.29-1``,  ``0.29-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-module-build: ``0.4234.*``
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

      mamba install perl-want

   and update with::

      mamba update perl-want

  To create a new environment, run::

      mamba create --name myenvname perl-want

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-want:<tag>

   (see `perl-want/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-want| image:: https://img.shields.io/conda/dn/bioconda/perl-want.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-want
   :alt:   (downloads)
.. |docker_perl-want| image:: https://quay.io/repository/biocontainers/perl-want/status
   :target: https://quay.io/repository/biocontainers/perl-want
.. _`perl-want/tags`: https://quay.io/repository/biocontainers/perl-want?tab=tags


.. raw:: html

    <script>
        var package = "perl-want";
        var versions = ["0.29","0.29","0.29","0.29","0.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-want/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-want/README.html