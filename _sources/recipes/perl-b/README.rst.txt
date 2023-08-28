:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-b'
.. highlight: bash

perl-b
======

.. conda:recipe:: perl-b/1.48
   :replaces_section_title:
   :noindex:

   The Perl Compiler Backend

   :homepage: http://metacpan.org/pod/B
   :license: perl_5
   :recipe: /`perl-b <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b>`_/`1.48 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b/1.48>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b/1.48/meta.yaml>`_

   


.. conda:package:: perl-b

   |downloads_perl-b| |docker_perl-b|

   :versions:
      
      

      ``1.48-2``,  ``1.48-1``,  ``1.48-0``

      

   
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

      mamba install perl-b

   and update with::

      mamba update perl-b

  To create a new environment, run::

      mamba create --name myenvname perl-b

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-b:<tag>

   (see `perl-b/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-b| image:: https://img.shields.io/conda/dn/bioconda/perl-b.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-b
   :alt:   (downloads)
.. |docker_perl-b| image:: https://quay.io/repository/biocontainers/perl-b/status
   :target: https://quay.io/repository/biocontainers/perl-b
.. _`perl-b/tags`: https://quay.io/repository/biocontainers/perl-b?tab=tags


.. raw:: html

    <script>
        var package = "perl-b";
        var versions = ["1.48","1.48","1.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-b/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-b/README.html