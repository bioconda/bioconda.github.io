:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graphics-colornames'
.. highlight: bash

perl-graphics-colornames
========================

.. conda:recipe:: perl-graphics-colornames
   :replaces_section_title:
   :noindex:

   defines RGB values for common color names

   :homepage: http://metacpan.org/pod/Graphics::ColorNames
   :license: perl_5
   :recipe: /`perl-graphics-colornames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphics-colornames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphics-colornames/meta.yaml>`_

   


.. conda:package:: perl-graphics-colornames

   |downloads_perl-graphics-colornames| |docker_perl-graphics-colornames|

   :versions:
      
      

      ``2.11-1``,  ``2.11-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-module-build: 
   :depends perl-module-load: 
   :depends perl-module-loaded: 
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

      mamba install perl-graphics-colornames

   and update with::

      mamba update perl-graphics-colornames

  To create a new environment, run::

      mamba create --name myenvname perl-graphics-colornames

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-graphics-colornames:<tag>

   (see `perl-graphics-colornames/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-graphics-colornames| image:: https://img.shields.io/conda/dn/bioconda/perl-graphics-colornames.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-graphics-colornames
   :alt:   (downloads)
.. |docker_perl-graphics-colornames| image:: https://quay.io/repository/biocontainers/perl-graphics-colornames/status
   :target: https://quay.io/repository/biocontainers/perl-graphics-colornames
.. _`perl-graphics-colornames/tags`: https://quay.io/repository/biocontainers/perl-graphics-colornames?tab=tags


.. raw:: html

    <script>
        var package = "perl-graphics-colornames";
        var versions = ["2.11","2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graphics-colornames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graphics-colornames/README.html