:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-convert-binhex'
.. highlight: bash

perl-convert-binhex
===================

.. conda:recipe:: perl-convert-binhex
   :replaces_section_title:
   :noindex:

   extract data from Macintosh BinHex files

   :homepage: http://metacpan.org/pod/Convert-BinHex
   :license: perl_5
   :recipe: /`perl-convert-binhex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-convert-binhex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-convert-binhex/meta.yaml>`_

   


.. conda:package:: perl-convert-binhex

   |downloads_perl-convert-binhex| |docker_perl-convert-binhex|

   :versions:
      
      

      ``1.125-2``,  ``1.125-1``,  ``1.125-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-convert-binhex

   and update with::

      mamba update perl-convert-binhex

  To create a new environment, run::

      mamba create --name myenvname perl-convert-binhex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-convert-binhex:<tag>

   (see `perl-convert-binhex/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-convert-binhex| image:: https://img.shields.io/conda/dn/bioconda/perl-convert-binhex.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-convert-binhex
   :alt:   (downloads)
.. |docker_perl-convert-binhex| image:: https://quay.io/repository/biocontainers/perl-convert-binhex/status
   :target: https://quay.io/repository/biocontainers/perl-convert-binhex
.. _`perl-convert-binhex/tags`: https://quay.io/repository/biocontainers/perl-convert-binhex?tab=tags


.. raw:: html

    <script>
        var package = "perl-convert-binhex";
        var versions = ["1.125","1.125","1.125"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-convert-binhex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-convert-binhex/README.html