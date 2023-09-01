:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-const-fast'
.. highlight: bash

perl-const-fast
===============

.. conda:recipe:: perl-const-fast
   :replaces_section_title:
   :noindex:

   Facility for creating read\-only scalars\, arrays\, and hashes

   :homepage: http://metacpan.org/pod/Const-Fast
   :license: perl_5
   :recipe: /`perl-const-fast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-const-fast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-const-fast/meta.yaml>`_

   


.. conda:package:: perl-const-fast

   |downloads_perl-const-fast| |docker_perl-const-fast|

   :versions:
      
      

      ``0.014-1``,  ``0.014-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-storable: 
   :depends perl-sub-exporter-progressive: 
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

      mamba install perl-const-fast

   and update with::

      mamba update perl-const-fast

  To create a new environment, run::

      mamba create --name myenvname perl-const-fast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-const-fast:<tag>

   (see `perl-const-fast/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-const-fast| image:: https://img.shields.io/conda/dn/bioconda/perl-const-fast.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-const-fast
   :alt:   (downloads)
.. |docker_perl-const-fast| image:: https://quay.io/repository/biocontainers/perl-const-fast/status
   :target: https://quay.io/repository/biocontainers/perl-const-fast
.. _`perl-const-fast/tags`: https://quay.io/repository/biocontainers/perl-const-fast?tab=tags


.. raw:: html

    <script>
        var package = "perl-const-fast";
        var versions = ["0.014","0.014"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-const-fast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-const-fast/README.html