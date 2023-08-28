:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sort-versions'
.. highlight: bash

perl-sort-versions
==================

.. conda:recipe:: perl-sort-versions
   :replaces_section_title:
   :noindex:

   a perl 5 module for sorting of revision\-like numbers

   :homepage: https://github.com/neilb/Sort-Versions
   :license: perl_5
   :recipe: /`perl-sort-versions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-versions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-versions/meta.yaml>`_

   


.. conda:package:: perl-sort-versions

   |downloads_perl-sort-versions| |docker_perl-sort-versions|

   :versions:
      
      

      ``1.62-3``,  ``1.62-2``,  ``1.62-1``,  ``1.62-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter: 
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

      mamba install perl-sort-versions

   and update with::

      mamba update perl-sort-versions

  To create a new environment, run::

      mamba create --name myenvname perl-sort-versions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sort-versions:<tag>

   (see `perl-sort-versions/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sort-versions| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-versions.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sort-versions
   :alt:   (downloads)
.. |docker_perl-sort-versions| image:: https://quay.io/repository/biocontainers/perl-sort-versions/status
   :target: https://quay.io/repository/biocontainers/perl-sort-versions
.. _`perl-sort-versions/tags`: https://quay.io/repository/biocontainers/perl-sort-versions?tab=tags


.. raw:: html

    <script>
        var package = "perl-sort-versions";
        var versions = ["1.62","1.62","1.62","1.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-versions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-versions/README.html