:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-spline'
.. highlight: bash

perl-math-spline
================

.. conda:recipe:: perl-math-spline
   :replaces_section_title:
   :noindex:

   Cubic Spline Interpolation of data

   :homepage: http://metacpan.org/pod/Math-Spline
   :license: perl_5
   :recipe: /`perl-math-spline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-spline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-spline/meta.yaml>`_

   


.. conda:package:: perl-math-spline

   |downloads_perl-math-spline| |docker_perl-math-spline|

   :versions:
      
      

      ``0.02-3``,  ``0.02-2``,  ``0.02-1``,  ``0.02-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-math-derivative: 
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

      mamba install perl-math-spline

   and update with::

      mamba update perl-math-spline

  To create a new environment, run::

      mamba create --name myenvname perl-math-spline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-spline:<tag>

   (see `perl-math-spline/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-spline| image:: https://img.shields.io/conda/dn/bioconda/perl-math-spline.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-spline
   :alt:   (downloads)
.. |docker_perl-math-spline| image:: https://quay.io/repository/biocontainers/perl-math-spline/status
   :target: https://quay.io/repository/biocontainers/perl-math-spline
.. _`perl-math-spline/tags`: https://quay.io/repository/biocontainers/perl-math-spline?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-spline";
        var versions = ["0.02","0.02","0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-spline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-spline/README.html