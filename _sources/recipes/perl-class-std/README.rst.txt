:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-std'
.. highlight: bash

perl-class-std
==============

.. conda:recipe:: perl-class-std
   :replaces_section_title:
   :noindex:

   Support for creating standard \"inside\-out\" classes

   :homepage: http://metacpan.org/pod/Class-Std
   :license: perl_5
   :recipe: /`perl-class-std <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-std>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-std/meta.yaml>`_

   


.. conda:package:: perl-class-std

   |downloads_perl-class-std| |docker_perl-class-std|

   :versions:
      
      

      ``0.013-2``,  ``0.013-1``,  ``0.013-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-scalar-list-utils: 
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

      mamba install perl-class-std

   and update with::

      mamba update perl-class-std

  To create a new environment, run::

      mamba create --name myenvname perl-class-std

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-class-std:<tag>

   (see `perl-class-std/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-std| image:: https://img.shields.io/conda/dn/bioconda/perl-class-std.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-std
   :alt:   (downloads)
.. |docker_perl-class-std| image:: https://quay.io/repository/biocontainers/perl-class-std/status
   :target: https://quay.io/repository/biocontainers/perl-class-std
.. _`perl-class-std/tags`: https://quay.io/repository/biocontainers/perl-class-std?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-std";
        var versions = ["0.013","0.013","0.013"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-std/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-std/README.html