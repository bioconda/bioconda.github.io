:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sort-mergesort'
.. highlight: bash

perl-sort-mergesort
===================

.. conda:recipe:: perl-sort-mergesort
   :replaces_section_title:
   :noindex:

   Merge sorted streams to create a new stream

   :homepage: http://metacpan.org/pod/Sort::MergeSort
   :license: Artistic-2.0
   :recipe: /`perl-sort-mergesort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-mergesort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-mergesort/meta.yaml>`_

   


.. conda:package:: perl-sort-mergesort

   |downloads_perl-sort-mergesort| |docker_perl-sort-mergesort|

   :versions:
      
      

      ``0.31-2``,  ``0.31-1``,  ``0.31-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-test-nowarnings: 
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

      mamba install perl-sort-mergesort

   and update with::

      mamba update perl-sort-mergesort

  To create a new environment, run::

      mamba create --name myenvname perl-sort-mergesort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sort-mergesort:<tag>

   (see `perl-sort-mergesort/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sort-mergesort| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-mergesort.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sort-mergesort
   :alt:   (downloads)
.. |docker_perl-sort-mergesort| image:: https://quay.io/repository/biocontainers/perl-sort-mergesort/status
   :target: https://quay.io/repository/biocontainers/perl-sort-mergesort
.. _`perl-sort-mergesort/tags`: https://quay.io/repository/biocontainers/perl-sort-mergesort?tab=tags


.. raw:: html

    <script>
        var package = "perl-sort-mergesort";
        var versions = ["0.31","0.31","0.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-mergesort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-mergesort/README.html