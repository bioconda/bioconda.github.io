:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-uncompress-rawinflate'
.. highlight: bash

perl-io-uncompress-rawinflate
=============================

.. conda:recipe:: perl-io-uncompress-rawinflate/2.064
   :replaces_section_title:
   :noindex:

   Read RFC 1951 files\/buffers

   :homepage: http://metacpan.org/pod/IO::Uncompress::RawInflate
   :license: perl_5
   :recipe: /`perl-io-uncompress-rawinflate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-rawinflate>`_/`2.064 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-rawinflate/2.064>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-rawinflate/2.064/meta.yaml>`_

   


.. conda:package:: perl-io-uncompress-rawinflate

   |downloads_perl-io-uncompress-rawinflate| |docker_perl-io-uncompress-rawinflate|

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

      mamba install perl-io-uncompress-rawinflate

   and update with::

      mamba update perl-io-uncompress-rawinflate

  To create a new environment, run::

      mamba create --name myenvname perl-io-uncompress-rawinflate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-uncompress-rawinflate:<tag>

   (see `perl-io-uncompress-rawinflate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-uncompress-rawinflate| image:: https://img.shields.io/conda/dn/bioconda/perl-io-uncompress-rawinflate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-uncompress-rawinflate
   :alt:   (downloads)
.. |docker_perl-io-uncompress-rawinflate| image:: https://quay.io/repository/biocontainers/perl-io-uncompress-rawinflate/status
   :target: https://quay.io/repository/biocontainers/perl-io-uncompress-rawinflate
.. _`perl-io-uncompress-rawinflate/tags`: https://quay.io/repository/biocontainers/perl-io-uncompress-rawinflate?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-uncompress-rawinflate";
        var versions = ["2.064","2.064","2.064"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-uncompress-rawinflate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-uncompress-rawinflate/README.html