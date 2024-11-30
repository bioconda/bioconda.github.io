:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-encoding'
.. highlight: bash

perl-term-encoding
==================

.. conda:recipe:: perl-term-encoding
   :replaces_section_title:
   :noindex:

   Detect encoding of the current terminal

   :homepage: http://metacpan.org/pod/Term::Encoding
   :license: perl_5
   :recipe: /`perl-term-encoding <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-encoding>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-encoding/meta.yaml>`_

   


.. conda:package:: perl-term-encoding

   |downloads_perl-term-encoding| |docker_perl-term-encoding|

   :versions:
      
      

      ``0.03-1``,  ``0.03-0``,  ``0.02-1``,  ``0.02-0``

      

   
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

      mamba install perl-term-encoding

   and update with::

      mamba update perl-term-encoding

  To create a new environment, run::

      mamba create --name myenvname perl-term-encoding

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-term-encoding:<tag>

   (see `perl-term-encoding/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-encoding| image:: https://img.shields.io/conda/dn/bioconda/perl-term-encoding.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-encoding
   :alt:   (downloads)
.. |docker_perl-term-encoding| image:: https://quay.io/repository/biocontainers/perl-term-encoding/status
   :target: https://quay.io/repository/biocontainers/perl-term-encoding
.. _`perl-term-encoding/tags`: https://quay.io/repository/biocontainers/perl-term-encoding?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-encoding";
        var versions = ["0.03","0.03","0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-encoding/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-encoding/README.html