:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-heap-simple-xs'
.. highlight: bash

perl-heap-simple-xs
===================

.. conda:recipe:: perl-heap-simple-xs
   :replaces_section_title:
   :noindex:

   An XS implementation of the Heap\:\:Simple interface

   :homepage: http://metacpan.org/pod/Heap::Simple::XS
   :license: unknown
   :recipe: /`perl-heap-simple-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple-xs/meta.yaml>`_

   


.. conda:package:: perl-heap-simple-xs

   |downloads_perl-heap-simple-xs| |docker_perl-heap-simple-xs|

   :versions:
      
      

      ``0.10-7``,  ``0.10-6``,  ``0.10-5``,  ``0.10-4``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.10-0``

      

   
   :depends libgcc: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-heap-simple-xs

   and update with::

      mamba update perl-heap-simple-xs

  To create a new environment, run::

      mamba create --name myenvname perl-heap-simple-xs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-heap-simple-xs:<tag>

   (see `perl-heap-simple-xs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-heap-simple-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-heap-simple-xs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-heap-simple-xs
   :alt:   (downloads)
.. |docker_perl-heap-simple-xs| image:: https://quay.io/repository/biocontainers/perl-heap-simple-xs/status
   :target: https://quay.io/repository/biocontainers/perl-heap-simple-xs
.. _`perl-heap-simple-xs/tags`: https://quay.io/repository/biocontainers/perl-heap-simple-xs?tab=tags


.. raw:: html

    <script>
        var package = "perl-heap-simple-xs";
        var versions = ["0.10","0.10","0.10","0.10","0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap-simple-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap-simple-xs/README.html