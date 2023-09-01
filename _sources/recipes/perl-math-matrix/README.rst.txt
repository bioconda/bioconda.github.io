:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-matrix'
.. highlight: bash

perl-math-matrix
================

.. conda:recipe:: perl-math-matrix
   :replaces_section_title:
   :noindex:

   Multiply and invert Matrices

   :homepage: https://metacpan.org/pod/Math::Matrix
   :license: unknown
   :recipe: /`perl-math-matrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-matrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-matrix/meta.yaml>`_

   


.. conda:package:: perl-math-matrix

   |downloads_perl-math-matrix| |docker_perl-math-matrix|

   :versions:
      
      

      ``0.94-2``,  ``0.94-1``,  ``0.94-0``,  ``0.92-0``,  ``0.91-0``,  ``0.9-0``,  ``0.8-0``

      

   
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

      mamba install perl-math-matrix

   and update with::

      mamba update perl-math-matrix

  To create a new environment, run::

      mamba create --name myenvname perl-math-matrix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-matrix:<tag>

   (see `perl-math-matrix/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-matrix| image:: https://img.shields.io/conda/dn/bioconda/perl-math-matrix.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-matrix
   :alt:   (downloads)
.. |docker_perl-math-matrix| image:: https://quay.io/repository/biocontainers/perl-math-matrix/status
   :target: https://quay.io/repository/biocontainers/perl-math-matrix
.. _`perl-math-matrix/tags`: https://quay.io/repository/biocontainers/perl-math-matrix?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-matrix";
        var versions = ["0.94","0.94","0.94","0.92","0.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-matrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-matrix/README.html