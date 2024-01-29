:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvnator'
.. highlight: bash

cnvnator
========

.. conda:recipe:: cnvnator
   :replaces_section_title:
   :noindex:

   Tool for calling copy number variations.

   :homepage: https://github.com/abyzovlab/CNVnator
   :license: MIT
   :recipe: /`cnvnator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvnator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvnator/meta.yaml>`_

   


.. conda:package:: cnvnator

   |downloads_cnvnator| |docker_cnvnator|

   :versions:
      
      

      ``0.4.1-8``,  ``0.4.1-7``,  ``0.4.1-6``,  ``0.4.1-5``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: 
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends numpy: 
   :depends perl-getopt-long: 
   :depends python: ``>=3.11,<3.12.0a0``
   :depends root_base: ``>=6.26.10,<6.26.11.0a0``
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

      mamba install cnvnator

   and update with::

      mamba update cnvnator

  To create a new environment, run::

      mamba create --name myenvname cnvnator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cnvnator:<tag>

   (see `cnvnator/tags`_ for valid values for ``<tag>``)


.. |downloads_cnvnator| image:: https://img.shields.io/conda/dn/bioconda/cnvnator.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvnator
   :alt:   (downloads)
.. |docker_cnvnator| image:: https://quay.io/repository/biocontainers/cnvnator/status
   :target: https://quay.io/repository/biocontainers/cnvnator
.. _`cnvnator/tags`: https://quay.io/repository/biocontainers/cnvnator?tab=tags


.. raw:: html

    <script>
        var package = "cnvnator";
        var versions = ["0.4.1","0.4.1","0.4.1","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvnator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvnator/README.html