:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-heap-simple'
.. highlight: bash

perl-heap-simple
================

.. conda:recipe:: perl-heap-simple
   :replaces_section_title:
   :noindex:

   Fast and easy to use classic heaps

   :homepage: http://metacpan.org/pod/Heap::Simple
   :license: unknown
   :recipe: /`perl-heap-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple/meta.yaml>`_

   


.. conda:package:: perl-heap-simple

   |downloads_perl-heap-simple| |docker_perl-heap-simple|

   :versions:
      
      

      ``0.13-2``,  ``0.13-1``,  ``0.13-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-cgi: 
   :depends perl-heap-simple-perl: 
   :depends perl-heap-simple-xs: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-heap-simple

   and update with::

      mamba update perl-heap-simple

  To create a new environment, run::

      mamba create --name myenvname perl-heap-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-heap-simple:<tag>

   (see `perl-heap-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-heap-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-heap-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-heap-simple
   :alt:   (downloads)
.. |docker_perl-heap-simple| image:: https://quay.io/repository/biocontainers/perl-heap-simple/status
   :target: https://quay.io/repository/biocontainers/perl-heap-simple
.. _`perl-heap-simple/tags`: https://quay.io/repository/biocontainers/perl-heap-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-heap-simple";
        var versions = ["0.13","0.13","0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap-simple/README.html