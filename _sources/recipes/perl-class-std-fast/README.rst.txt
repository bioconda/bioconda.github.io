:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-std-fast'
.. highlight: bash

perl-class-std-fast
===================

.. conda:recipe:: perl-class-std-fast
   :replaces_section_title:
   :noindex:

   faster but less secure than Class\:\:Std

   :homepage: http://metacpan.org/pod/Class-Std-Fast
   :license: perl_5
   :recipe: /`perl-class-std-fast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-std-fast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-std-fast/meta.yaml>`_

   


.. conda:package:: perl-class-std-fast

   |downloads_perl-class-std-fast| |docker_perl-class-std-fast|

   :versions:
      
      

      ``0.0.8-2``,  ``0.0.8-1``,  ``0.0.8-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-class-std: 
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

      mamba install perl-class-std-fast

   and update with::

      mamba update perl-class-std-fast

  To create a new environment, run::

      mamba create --name myenvname perl-class-std-fast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-class-std-fast:<tag>

   (see `perl-class-std-fast/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-std-fast| image:: https://img.shields.io/conda/dn/bioconda/perl-class-std-fast.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-std-fast
   :alt:   (downloads)
.. |docker_perl-class-std-fast| image:: https://quay.io/repository/biocontainers/perl-class-std-fast/status
   :target: https://quay.io/repository/biocontainers/perl-class-std-fast
.. _`perl-class-std-fast/tags`: https://quay.io/repository/biocontainers/perl-class-std-fast?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-std-fast";
        var versions = ["0.0.8","0.0.8","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-std-fast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-std-fast/README.html