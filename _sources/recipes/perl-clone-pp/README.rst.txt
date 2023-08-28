:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-clone-pp'
.. highlight: bash

perl-clone-pp
=============

.. conda:recipe:: perl-clone-pp
   :replaces_section_title:
   :noindex:

   Recursively copy Perl datatypes

   :homepage: http://metacpan.org/pod/Clone::PP
   :license: perl_5
   :recipe: /`perl-clone-pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-pp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-pp/meta.yaml>`_

   


.. conda:package:: perl-clone-pp

   |downloads_perl-clone-pp| |docker_perl-clone-pp|

   :versions:
      
      

      ``1.08-0``,  ``1.07-2``,  ``1.07-1``,  ``1.07-0``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-apache-test: 
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

      mamba install perl-clone-pp

   and update with::

      mamba update perl-clone-pp

  To create a new environment, run::

      mamba create --name myenvname perl-clone-pp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-clone-pp:<tag>

   (see `perl-clone-pp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-clone-pp| image:: https://img.shields.io/conda/dn/bioconda/perl-clone-pp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-clone-pp
   :alt:   (downloads)
.. |docker_perl-clone-pp| image:: https://quay.io/repository/biocontainers/perl-clone-pp/status
   :target: https://quay.io/repository/biocontainers/perl-clone-pp
.. _`perl-clone-pp/tags`: https://quay.io/repository/biocontainers/perl-clone-pp?tab=tags


.. raw:: html

    <script>
        var package = "perl-clone-pp";
        var versions = ["1.08","1.07","1.07","1.07","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-clone-pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-clone-pp/README.html