:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-scalar'
.. highlight: bash

perl-io-scalar
==============

.. conda:recipe:: perl-io-scalar/2.111
   :replaces_section_title:
   :noindex:

   IO\:\: interface for reading\/writing a scalar

   :homepage: http://metacpan.org/pod/IO::Scalar
   :license: perl_5
   :recipe: /`perl-io-scalar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-scalar>`_/`2.111 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-scalar/2.111>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-scalar/2.111/meta.yaml>`_

   


.. conda:package:: perl-io-scalar

   |downloads_perl-io-scalar| |docker_perl-io-scalar|

   :versions:
      
      

      ``2.111-2``,  ``2.111-1``,  ``2.111-0``

      

   
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

      mamba install perl-io-scalar

   and update with::

      mamba update perl-io-scalar

  To create a new environment, run::

      mamba create --name myenvname perl-io-scalar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-scalar:<tag>

   (see `perl-io-scalar/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-scalar| image:: https://img.shields.io/conda/dn/bioconda/perl-io-scalar.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-scalar
   :alt:   (downloads)
.. |docker_perl-io-scalar| image:: https://quay.io/repository/biocontainers/perl-io-scalar/status
   :target: https://quay.io/repository/biocontainers/perl-io-scalar
.. _`perl-io-scalar/tags`: https://quay.io/repository/biocontainers/perl-io-scalar?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-scalar";
        var versions = ["2.111","2.111","2.111"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-scalar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-scalar/README.html