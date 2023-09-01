:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-font-afm'
.. highlight: bash

perl-font-afm
=============

.. conda:recipe:: perl-font-afm
   :replaces_section_title:
   :noindex:

   Interface to Adobe Font Metrics files

   :homepage: http://metacpan.org/pod/Font-AFM
   :license: perl_5
   :recipe: /`perl-font-afm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-font-afm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-font-afm/meta.yaml>`_

   


.. conda:package:: perl-font-afm

   |downloads_perl-font-afm| |docker_perl-font-afm|

   :versions:
      
      

      ``1.20-3``,  ``1.20-2``,  ``1.20-0``

      

   
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

      mamba install perl-font-afm

   and update with::

      mamba update perl-font-afm

  To create a new environment, run::

      mamba create --name myenvname perl-font-afm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-font-afm:<tag>

   (see `perl-font-afm/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-font-afm| image:: https://img.shields.io/conda/dn/bioconda/perl-font-afm.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-font-afm
   :alt:   (downloads)
.. |docker_perl-font-afm| image:: https://quay.io/repository/biocontainers/perl-font-afm/status
   :target: https://quay.io/repository/biocontainers/perl-font-afm
.. _`perl-font-afm/tags`: https://quay.io/repository/biocontainers/perl-font-afm?tab=tags


.. raw:: html

    <script>
        var package = "perl-font-afm";
        var versions = ["1.20","1.20","1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-font-afm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-font-afm/README.html