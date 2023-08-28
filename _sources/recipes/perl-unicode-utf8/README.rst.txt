:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-utf8'
.. highlight: bash

perl-unicode-utf8
=================

.. conda:recipe:: perl-unicode-utf8
   :replaces_section_title:
   :noindex:

   Encoding and decoding of UTF\-8 encoding form

   :homepage: http://metacpan.org/pod/Unicode::UTF8
   :license: perl_5
   :recipe: /`perl-unicode-utf8 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-utf8>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-utf8/meta.yaml>`_

   


.. conda:package:: perl-unicode-utf8

   |downloads_perl-unicode-utf8| |docker_perl-unicode-utf8|

   :versions:
      
      

      ``0.62-6``,  ``0.62-5``,  ``0.62-4``,  ``0.62-3``,  ``0.62-1``,  ``0.62-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-test-fatal: ``0.016.*``
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

      mamba install perl-unicode-utf8

   and update with::

      mamba update perl-unicode-utf8

  To create a new environment, run::

      mamba create --name myenvname perl-unicode-utf8

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-unicode-utf8:<tag>

   (see `perl-unicode-utf8/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-unicode-utf8| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-utf8.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-utf8
   :alt:   (downloads)
.. |docker_perl-unicode-utf8| image:: https://quay.io/repository/biocontainers/perl-unicode-utf8/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-utf8
.. _`perl-unicode-utf8/tags`: https://quay.io/repository/biocontainers/perl-unicode-utf8?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-utf8";
        var versions = ["0.62","0.62","0.62","0.62","0.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-utf8/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-utf8/README.html