:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-bigrat'
.. highlight: bash

perl-math-bigrat
================

.. conda:recipe:: perl-math-bigrat
   :replaces_section_title:
   :noindex:

   Arbitrary big rational numbers

   :homepage: http://metacpan.org/pod/Math::BigRat
   :license: perl_5
   :recipe: /`perl-math-bigrat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigrat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigrat/meta.yaml>`_

   


.. conda:package:: perl-math-bigrat

   |downloads_perl-math-bigrat| |docker_perl-math-bigrat|

   :versions:
      
      

      ``0.2624-0``,  ``0.2623-0``,  ``0.2622-0``,  ``0.2621-0``,  ``0.2620-0``,  ``0.2614-1``,  ``0.2614-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: ``>=1.22``
   :depends perl-math-bigint: ``>=1.999821``
   :depends perl-math-bigint: ``>=1.999824``
   :depends perl-math-complex: ``>=1.36``
   :depends perl-scalar-list-utils: 
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

      mamba install perl-math-bigrat

   and update with::

      mamba update perl-math-bigrat

  To create a new environment, run::

      mamba create --name myenvname perl-math-bigrat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-bigrat:<tag>

   (see `perl-math-bigrat/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-bigrat| image:: https://img.shields.io/conda/dn/bioconda/perl-math-bigrat.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-bigrat
   :alt:   (downloads)
.. |docker_perl-math-bigrat| image:: https://quay.io/repository/biocontainers/perl-math-bigrat/status
   :target: https://quay.io/repository/biocontainers/perl-math-bigrat
.. _`perl-math-bigrat/tags`: https://quay.io/repository/biocontainers/perl-math-bigrat?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-bigrat";
        var versions = ["0.2624","0.2623","0.2622","0.2621","0.2620"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-bigrat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-bigrat/README.html