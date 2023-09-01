:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dynaloader'
.. highlight: bash

perl-dynaloader
===============

.. conda:recipe:: perl-dynaloader/1.25
   :replaces_section_title:
   :noindex:

   Dynamically load C libraries into Perl code

   :homepage: http://metacpan.org/pod/DynaLoader
   :license: perl_5
   :recipe: /`perl-dynaloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dynaloader>`_/`1.25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dynaloader/1.25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dynaloader/1.25/meta.yaml>`_

   


.. conda:package:: perl-dynaloader

   |downloads_perl-dynaloader| |docker_perl-dynaloader|

   :versions:
      
      

      ``1.25-2``,  ``1.25-1``,  ``1.25-0``

      

   
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

      mamba install perl-dynaloader

   and update with::

      mamba update perl-dynaloader

  To create a new environment, run::

      mamba create --name myenvname perl-dynaloader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-dynaloader:<tag>

   (see `perl-dynaloader/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dynaloader| image:: https://img.shields.io/conda/dn/bioconda/perl-dynaloader.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dynaloader
   :alt:   (downloads)
.. |docker_perl-dynaloader| image:: https://quay.io/repository/biocontainers/perl-dynaloader/status
   :target: https://quay.io/repository/biocontainers/perl-dynaloader
.. _`perl-dynaloader/tags`: https://quay.io/repository/biocontainers/perl-dynaloader?tab=tags


.. raw:: html

    <script>
        var package = "perl-dynaloader";
        var versions = ["1.25","1.25","1.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dynaloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dynaloader/README.html