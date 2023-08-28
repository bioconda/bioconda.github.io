:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-spec'
.. highlight: bash

perl-file-spec
==============

.. conda:recipe:: perl-file-spec/3.48_01
   :replaces_section_title:
   :noindex:

   portably perform operations on file names

   :homepage: http://metacpan.org/pod/File::Spec
   :license: perl_5
   :recipe: /`perl-file-spec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-spec>`_/`3.48_01 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-spec/3.48_01>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-spec/3.48_01/meta.yaml>`_

   


.. conda:package:: perl-file-spec

   |downloads_perl-file-spec| |docker_perl-file-spec|

   :versions:
      
      

      ``3.48_01-2``,  ``3.48_01-1``,  ``3.48_01-0``

      

   
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

      mamba install perl-file-spec

   and update with::

      mamba update perl-file-spec

  To create a new environment, run::

      mamba create --name myenvname perl-file-spec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-spec:<tag>

   (see `perl-file-spec/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-spec| image:: https://img.shields.io/conda/dn/bioconda/perl-file-spec.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-spec
   :alt:   (downloads)
.. |docker_perl-file-spec| image:: https://quay.io/repository/biocontainers/perl-file-spec/status
   :target: https://quay.io/repository/biocontainers/perl-file-spec
.. _`perl-file-spec/tags`: https://quay.io/repository/biocontainers/perl-file-spec?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-spec";
        var versions = ["3.48_01","3.48_01","3.48_01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-spec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-spec/README.html