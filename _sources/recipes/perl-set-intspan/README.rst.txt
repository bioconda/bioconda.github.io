:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-set-intspan'
.. highlight: bash

perl-set-intspan
================

.. conda:recipe:: perl-set-intspan
   :replaces_section_title:
   :noindex:

   Manages sets of integers\, newsrc style

   :homepage: http://metacpan.org/pod/Set-IntSpan
   :license: unknown
   :recipe: /`perl-set-intspan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-intspan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-intspan/meta.yaml>`_

   


.. conda:package:: perl-set-intspan

   |downloads_perl-set-intspan| |docker_perl-set-intspan|

   :versions:
      
      

      ``1.19-2``,  ``1.19-1``,  ``1.19-0``

      

   
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

      mamba install perl-set-intspan

   and update with::

      mamba update perl-set-intspan

  To create a new environment, run::

      mamba create --name myenvname perl-set-intspan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-set-intspan:<tag>

   (see `perl-set-intspan/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-set-intspan| image:: https://img.shields.io/conda/dn/bioconda/perl-set-intspan.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-set-intspan
   :alt:   (downloads)
.. |docker_perl-set-intspan| image:: https://quay.io/repository/biocontainers/perl-set-intspan/status
   :target: https://quay.io/repository/biocontainers/perl-set-intspan
.. _`perl-set-intspan/tags`: https://quay.io/repository/biocontainers/perl-set-intspan?tab=tags


.. raw:: html

    <script>
        var package = "perl-set-intspan";
        var versions = ["1.19","1.19","1.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-set-intspan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-set-intspan/README.html