:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-nsp'
.. highlight: bash

perl-text-nsp
=============

.. conda:recipe:: perl-text-nsp
   :replaces_section_title:
   :noindex:

   Extract collocations and Ngrams from text

   :homepage: http://metacpan.org/pod/Text::NSP
   :license: open_source
   :recipe: /`perl-text-nsp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-nsp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-nsp/meta.yaml>`_

   


.. conda:package:: perl-text-nsp

   |downloads_perl-text-nsp| |docker_perl-text-nsp|

   :versions:
      
      

      ``1.31-3``,  ``1.31-2``,  ``1.31-1``,  ``1.31-0``

      

   
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

      mamba install perl-text-nsp

   and update with::

      mamba update perl-text-nsp

  To create a new environment, run::

      mamba create --name myenvname perl-text-nsp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-nsp:<tag>

   (see `perl-text-nsp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-nsp| image:: https://img.shields.io/conda/dn/bioconda/perl-text-nsp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-nsp
   :alt:   (downloads)
.. |docker_perl-text-nsp| image:: https://quay.io/repository/biocontainers/perl-text-nsp/status
   :target: https://quay.io/repository/biocontainers/perl-text-nsp
.. _`perl-text-nsp/tags`: https://quay.io/repository/biocontainers/perl-text-nsp?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-nsp";
        var versions = ["1.31","1.31","1.31","1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-nsp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-nsp/README.html