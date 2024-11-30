:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-bezier'
.. highlight: bash

perl-math-bezier
================

.. conda:recipe:: perl-math-bezier
   :replaces_section_title:
   :noindex:

   solution of Bezier Curves

   :homepage: http://metacpan.org/pod/Math-Bezier
   :license: unknown
   :recipe: /`perl-math-bezier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bezier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bezier/meta.yaml>`_

   


.. conda:package:: perl-math-bezier

   |downloads_perl-math-bezier| |docker_perl-math-bezier|

   :versions:
      
      

      ``0.01-2``,  ``0.01-1``,  ``0.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-math-bezier

   and update with::

      mamba update perl-math-bezier

  To create a new environment, run::

      mamba create --name myenvname perl-math-bezier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-bezier:<tag>

   (see `perl-math-bezier/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-bezier| image:: https://img.shields.io/conda/dn/bioconda/perl-math-bezier.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-bezier
   :alt:   (downloads)
.. |docker_perl-math-bezier| image:: https://quay.io/repository/biocontainers/perl-math-bezier/status
   :target: https://quay.io/repository/biocontainers/perl-math-bezier
.. _`perl-math-bezier/tags`: https://quay.io/repository/biocontainers/perl-math-bezier?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-bezier";
        var versions = ["0.01","0.01","0.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-bezier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-bezier/README.html