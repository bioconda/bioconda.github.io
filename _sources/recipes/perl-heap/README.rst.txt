:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-heap'
.. highlight: bash

perl-heap
=========

.. conda:recipe:: perl-heap
   :replaces_section_title:
   :noindex:

   Perl extensions for keeping data partially sorted

   :homepage: http://metacpan.org/pod/Heap
   :license: perl_5
   :recipe: /`perl-heap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap/meta.yaml>`_

   


.. conda:package:: perl-heap

   |downloads_perl-heap| |docker_perl-heap|

   :versions:
      
      

      ``0.80-1``,  ``0.80-0``

      

   
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

      mamba install perl-heap

   and update with::

      mamba update perl-heap

  To create a new environment, run::

      mamba create --name myenvname perl-heap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-heap:<tag>

   (see `perl-heap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-heap| image:: https://img.shields.io/conda/dn/bioconda/perl-heap.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-heap
   :alt:   (downloads)
.. |docker_perl-heap| image:: https://quay.io/repository/biocontainers/perl-heap/status
   :target: https://quay.io/repository/biocontainers/perl-heap
.. _`perl-heap/tags`: https://quay.io/repository/biocontainers/perl-heap?tab=tags


.. raw:: html

    <script>
        var package = "perl-heap";
        var versions = ["0.80","0.80"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap/README.html