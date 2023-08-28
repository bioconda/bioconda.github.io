:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-handle'
.. highlight: bash

perl-io-handle
==============

.. conda:recipe:: perl-io-handle/1.35
   :replaces_section_title:
   :noindex:

   supply object methods for I\/O handles

   :homepage: http://metacpan.org/pod/IO::Handle
   :license: perl_5
   :recipe: /`perl-io-handle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-handle>`_/`1.35 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-handle/1.35>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-handle/1.35/meta.yaml>`_

   


.. conda:package:: perl-io-handle

   |downloads_perl-io-handle| |docker_perl-io-handle|

   :versions:
      
      

      ``1.42-2``,  ``1.36-1``,  ``1.35-1``,  ``1.35-0``

      

   
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

      mamba install perl-io-handle

   and update with::

      mamba update perl-io-handle

  To create a new environment, run::

      mamba create --name myenvname perl-io-handle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-handle:<tag>

   (see `perl-io-handle/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-handle| image:: https://img.shields.io/conda/dn/bioconda/perl-io-handle.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-handle
   :alt:   (downloads)
.. |docker_perl-io-handle| image:: https://quay.io/repository/biocontainers/perl-io-handle/status
   :target: https://quay.io/repository/biocontainers/perl-io-handle
.. _`perl-io-handle/tags`: https://quay.io/repository/biocontainers/perl-io-handle?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-handle";
        var versions = ["1.42","1.36","1.35","1.35"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-handle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-handle/README.html