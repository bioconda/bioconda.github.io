:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-uncompress-gunzip'
.. highlight: bash

perl-io-uncompress-gunzip
=========================

.. conda:recipe:: perl-io-uncompress-gunzip/2.064
   :replaces_section_title:
   :noindex:

   Read RFC 1952 files\/buffers

   :homepage: http://metacpan.org/pod/IO::Uncompress::Gunzip
   :license: perl_5
   :recipe: /`perl-io-uncompress-gunzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-gunzip>`_/`2.064 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-gunzip/2.064>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-gunzip/2.064/meta.yaml>`_

   


.. conda:package:: perl-io-uncompress-gunzip

   |downloads_perl-io-uncompress-gunzip| |docker_perl-io-uncompress-gunzip|

   :versions:
      
      

      ``2.064-2``,  ``2.064-1``,  ``2.064-0``

      

   
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

      mamba install perl-io-uncompress-gunzip

   and update with::

      mamba update perl-io-uncompress-gunzip

  To create a new environment, run::

      mamba create --name myenvname perl-io-uncompress-gunzip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-uncompress-gunzip:<tag>

   (see `perl-io-uncompress-gunzip/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-uncompress-gunzip| image:: https://img.shields.io/conda/dn/bioconda/perl-io-uncompress-gunzip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-uncompress-gunzip
   :alt:   (downloads)
.. |docker_perl-io-uncompress-gunzip| image:: https://quay.io/repository/biocontainers/perl-io-uncompress-gunzip/status
   :target: https://quay.io/repository/biocontainers/perl-io-uncompress-gunzip
.. _`perl-io-uncompress-gunzip/tags`: https://quay.io/repository/biocontainers/perl-io-uncompress-gunzip?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-uncompress-gunzip";
        var versions = ["2.064","2.064","2.064"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-uncompress-gunzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-uncompress-gunzip/README.html