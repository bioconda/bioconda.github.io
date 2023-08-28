:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perlio-encoding'
.. highlight: bash

perl-perlio-encoding
====================

.. conda:recipe:: perl-perlio-encoding/0.18
   :replaces_section_title:
   :noindex:

   encoding layer

   :homepage: http://metacpan.org/pod/PerlIO::encoding
   :license: perl_5
   :recipe: /`perl-perlio-encoding <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-encoding>`_/`0.18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-encoding/0.18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-encoding/0.18/meta.yaml>`_

   


.. conda:package:: perl-perlio-encoding

   |downloads_perl-perlio-encoding| |docker_perl-perlio-encoding|

   :versions:
      
      

      ``0.18-2``,  ``0.18-1``,  ``0.18-0``

      

   
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

      mamba install perl-perlio-encoding

   and update with::

      mamba update perl-perlio-encoding

  To create a new environment, run::

      mamba create --name myenvname perl-perlio-encoding

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-perlio-encoding:<tag>

   (see `perl-perlio-encoding/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perlio-encoding| image:: https://img.shields.io/conda/dn/bioconda/perl-perlio-encoding.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perlio-encoding
   :alt:   (downloads)
.. |docker_perl-perlio-encoding| image:: https://quay.io/repository/biocontainers/perl-perlio-encoding/status
   :target: https://quay.io/repository/biocontainers/perl-perlio-encoding
.. _`perl-perlio-encoding/tags`: https://quay.io/repository/biocontainers/perl-perlio-encoding?tab=tags


.. raw:: html

    <script>
        var package = "perl-perlio-encoding";
        var versions = ["0.18","0.18","0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perlio-encoding/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perlio-encoding/README.html