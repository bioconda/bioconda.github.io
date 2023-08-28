:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mldbm'
.. highlight: bash

perl-mldbm
==========

.. conda:recipe:: perl-mldbm
   :replaces_section_title:
   :noindex:

   store multi\-level Perl hash structure in single level tied hash

   :homepage: http://metacpan.org/pod/MLDBM
   :license: perl_5
   :recipe: /`perl-mldbm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mldbm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mldbm/meta.yaml>`_

   


.. conda:package:: perl-mldbm

   |downloads_perl-mldbm| |docker_perl-mldbm|

   :versions:
      
      

      ``2.05-2``,  ``2.05-1``,  ``2.05-0``

      

   
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

      mamba install perl-mldbm

   and update with::

      mamba update perl-mldbm

  To create a new environment, run::

      mamba create --name myenvname perl-mldbm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mldbm:<tag>

   (see `perl-mldbm/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mldbm| image:: https://img.shields.io/conda/dn/bioconda/perl-mldbm.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mldbm
   :alt:   (downloads)
.. |docker_perl-mldbm| image:: https://quay.io/repository/biocontainers/perl-mldbm/status
   :target: https://quay.io/repository/biocontainers/perl-mldbm
.. _`perl-mldbm/tags`: https://quay.io/repository/biocontainers/perl-mldbm?tab=tags


.. raw:: html

    <script>
        var package = "perl-mldbm";
        var versions = ["2.05","2.05","2.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mldbm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mldbm/README.html