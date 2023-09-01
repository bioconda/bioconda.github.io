:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-derivative'
.. highlight: bash

perl-math-derivative
====================

.. conda:recipe:: perl-math-derivative
   :replaces_section_title:
   :noindex:

   Numeric 1st and 2nd order differentiation.

   :homepage: http://metacpan.org/pod/Math-Derivative
   :license: perl_5
   :recipe: /`perl-math-derivative <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-derivative>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-derivative/meta.yaml>`_

   


.. conda:package:: perl-math-derivative

   |downloads_perl-math-derivative| |docker_perl-math-derivative|

   :versions:
      
      

      ``1.01-1``,  ``1.01-0``,  ``0.04-1``,  ``0.04-0``

      

   
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

      mamba install perl-math-derivative

   and update with::

      mamba update perl-math-derivative

  To create a new environment, run::

      mamba create --name myenvname perl-math-derivative

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-derivative:<tag>

   (see `perl-math-derivative/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-derivative| image:: https://img.shields.io/conda/dn/bioconda/perl-math-derivative.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-derivative
   :alt:   (downloads)
.. |docker_perl-math-derivative| image:: https://quay.io/repository/biocontainers/perl-math-derivative/status
   :target: https://quay.io/repository/biocontainers/perl-math-derivative
.. _`perl-math-derivative/tags`: https://quay.io/repository/biocontainers/perl-math-derivative?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-derivative";
        var versions = ["1.01","1.01","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-derivative/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-derivative/README.html