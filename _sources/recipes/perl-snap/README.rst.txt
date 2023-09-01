:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-snap'
.. highlight: bash

perl-snap
=========

.. conda:recipe:: perl-snap
   :replaces_section_title:
   :noindex:

   SNAP calculates pairwise synonymous and nonsynonymous distances according to the Nei and Gojobori method for an alignment in table format.

   :homepage: https://www.hiv.lanl.gov/content/sequence/SNAP/SNAP.html
   :license: Custom OSS
   :recipe: /`perl-snap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-snap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-snap/meta.yaml>`_

   


.. conda:package:: perl-snap

   |downloads_perl-snap| |docker_perl-snap|

   :versions:
      
      

      ``2.1.1-1``,  ``2.1.1-0``

      

   
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

      mamba install perl-snap

   and update with::

      mamba update perl-snap

  To create a new environment, run::

      mamba create --name myenvname perl-snap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-snap:<tag>

   (see `perl-snap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-snap| image:: https://img.shields.io/conda/dn/bioconda/perl-snap.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-snap
   :alt:   (downloads)
.. |docker_perl-snap| image:: https://quay.io/repository/biocontainers/perl-snap/status
   :target: https://quay.io/repository/biocontainers/perl-snap
.. _`perl-snap/tags`: https://quay.io/repository/biocontainers/perl-snap?tab=tags


.. raw:: html

    <script>
        var package = "perl-snap";
        var versions = ["2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-snap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-snap/README.html