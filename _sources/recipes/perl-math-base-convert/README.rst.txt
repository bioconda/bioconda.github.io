:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-base-convert'
.. highlight: bash

perl-math-base-convert
======================

.. conda:recipe:: perl-math-base-convert
   :replaces_section_title:
   :noindex:

   very fast base to base conversion

   :homepage: http://metacpan.org/pod/Math-Base-Convert
   :license: unknown
   :recipe: /`perl-math-base-convert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-base-convert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-base-convert/meta.yaml>`_

   


.. conda:package:: perl-math-base-convert

   |downloads_perl-math-base-convert| |docker_perl-math-base-convert|

   :versions:
      
      

      ``0.11-2``,  ``0.11-1``,  ``0.11-0``

      

   
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

      mamba install perl-math-base-convert

   and update with::

      mamba update perl-math-base-convert

  To create a new environment, run::

      mamba create --name myenvname perl-math-base-convert

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-base-convert:<tag>

   (see `perl-math-base-convert/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-base-convert| image:: https://img.shields.io/conda/dn/bioconda/perl-math-base-convert.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-base-convert
   :alt:   (downloads)
.. |docker_perl-math-base-convert| image:: https://quay.io/repository/biocontainers/perl-math-base-convert/status
   :target: https://quay.io/repository/biocontainers/perl-math-base-convert
.. _`perl-math-base-convert/tags`: https://quay.io/repository/biocontainers/perl-math-base-convert?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-base-convert";
        var versions = ["0.11","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-base-convert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-base-convert/README.html