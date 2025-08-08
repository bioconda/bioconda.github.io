:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyclone'
.. highlight: bash

phyclone
========

.. conda:recipe:: phyclone
   :replaces_section_title:
   :noindex:

   Accurate Bayesian reconstruction of cancer phylogenies from bulk sequencing.

   :homepage: https://github.com/Roth-Lab/PhyClone
   :license: GPL-3.0-or-later
   :recipe: /`phyclone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyclone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyclone/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaf344`

   


.. conda:package:: phyclone

   |downloads_phyclone| |docker_phyclone|

   :versions:
      
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``

      

   
   :depends click: ``>=8.0``
   :depends llvmdev: 
   :depends networkx: 
   :depends numba: ``>=0.61.2``
   :depends numpy: ``>=1.26.4``
   :depends pandas: ``>=2.2.2``
   :depends python: ``>=3.12``
   :depends python-xxhash: ``>=3.3.0``
   :depends rustworkx: ``>=0.15.1``
   :depends scipy: 
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

      mamba install phyclone

   and update with::

      mamba update phyclone

  To create a new environment, run::

      mamba create --name myenvname phyclone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phyclone:<tag>

   (see `phyclone/tags`_ for valid values for ``<tag>``)


.. |downloads_phyclone| image:: https://img.shields.io/conda/dn/bioconda/phyclone.svg?style=flat
   :target: https://anaconda.org/bioconda/phyclone
   :alt:   (downloads)
.. |docker_phyclone| image:: https://quay.io/repository/biocontainers/phyclone/status
   :target: https://quay.io/repository/biocontainers/phyclone
.. _`phyclone/tags`: https://quay.io/repository/biocontainers/phyclone?tab=tags


.. raw:: html

    <script>
        var package = "phyclone";
        var versions = ["0.7.1","0.7.0","0.6.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyclone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyclone/README.html