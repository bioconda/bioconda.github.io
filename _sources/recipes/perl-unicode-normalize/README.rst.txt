:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-normalize'
.. highlight: bash

perl-unicode-normalize
======================

.. conda:recipe:: perl-unicode-normalize
   :replaces_section_title:
   :noindex:

   Unicode Normalization Forms

   :homepage: http://metacpan.org/pod/Unicode::Normalize
   :license: perl_5
   :recipe: /`perl-unicode-normalize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-normalize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-normalize/meta.yaml>`_

   


.. conda:package:: perl-unicode-normalize

   |downloads_perl-unicode-normalize| |docker_perl-unicode-normalize|

   :versions:
      
      

      ``1.26-6``,  ``1.26-5``,  ``1.26-4``,  ``1.26-3``,  ``1.26-2``,  ``1.26-1``,  ``1.26-0``,  ``1.25-0``,  ``1.18-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-exporter: 
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

      mamba install perl-unicode-normalize

   and update with::

      mamba update perl-unicode-normalize

  To create a new environment, run::

      mamba create --name myenvname perl-unicode-normalize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-unicode-normalize:<tag>

   (see `perl-unicode-normalize/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-unicode-normalize| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-normalize.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-normalize
   :alt:   (downloads)
.. |docker_perl-unicode-normalize| image:: https://quay.io/repository/biocontainers/perl-unicode-normalize/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-normalize
.. _`perl-unicode-normalize/tags`: https://quay.io/repository/biocontainers/perl-unicode-normalize?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-normalize";
        var versions = ["1.26","1.26","1.26","1.26","1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-normalize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-normalize/README.html