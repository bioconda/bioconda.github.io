:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-coordinate'
.. highlight: bash

perl-bio-coordinate
===================

.. conda:recipe:: perl-bio-coordinate
   :replaces_section_title:
   :noindex:

   Methods for dealing with genomic coordinates.

   :homepage: https://metacpan.org/release/Bio-Coordinate
   :license: perl_5
   :recipe: /`perl-bio-coordinate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-coordinate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-coordinate/meta.yaml>`_

   


.. conda:package:: perl-bio-coordinate

   |downloads_perl-bio-coordinate| |docker_perl-bio-coordinate|

   :versions:
      
      

      ``1.007001-3``,  ``1.007001-2``,  ``1.007001-1``,  ``1.007001-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: 
   :depends perl-parent: 
   :depends perl-test-most: 
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

      mamba install perl-bio-coordinate

   and update with::

      mamba update perl-bio-coordinate

  To create a new environment, run::

      mamba create --name myenvname perl-bio-coordinate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-coordinate:<tag>

   (see `perl-bio-coordinate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-coordinate| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-coordinate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-coordinate
   :alt:   (downloads)
.. |docker_perl-bio-coordinate| image:: https://quay.io/repository/biocontainers/perl-bio-coordinate/status
   :target: https://quay.io/repository/biocontainers/perl-bio-coordinate
.. _`perl-bio-coordinate/tags`: https://quay.io/repository/biocontainers/perl-bio-coordinate?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-coordinate";
        var versions = ["1.007001","1.007001","1.007001","1.007001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-coordinate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-coordinate/README.html