:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrsim'
.. highlight: bash

lrsim
=====

.. conda:recipe:: lrsim
   :replaces_section_title:
   :noindex:

   Simulator for 10X Genomics Linked Reads

   :homepage: https://github.com/aquaskyline/LRSIM
   :license: MIT
   :recipe: /`lrsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrsim/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.csbj.2017.10.002`, doi: :doi:`10.5281/zenodo.808913`

   


.. conda:package:: lrsim

   |downloads_lrsim| |docker_lrsim|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.18,<1.24.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.4,<7.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-inline: 
   :depends perl-inline-c: 
   :depends perl-math-random: 
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

      mamba install lrsim

   and update with::

      mamba update lrsim

  To create a new environment, run::

      mamba create --name myenvname lrsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lrsim:<tag>

   (see `lrsim/tags`_ for valid values for ``<tag>``)


.. |downloads_lrsim| image:: https://img.shields.io/conda/dn/bioconda/lrsim.svg?style=flat
   :target: https://anaconda.org/bioconda/lrsim
   :alt:   (downloads)
.. |docker_lrsim| image:: https://quay.io/repository/biocontainers/lrsim/status
   :target: https://quay.io/repository/biocontainers/lrsim
.. _`lrsim/tags`: https://quay.io/repository/biocontainers/lrsim?tab=tags


.. raw:: html

    <script>
        var package = "lrsim";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrsim/README.html