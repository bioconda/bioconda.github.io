:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cctk'
.. highlight: bash

cctk
====

.. conda:recipe:: cctk
   :replaces_section_title:
   :noindex:

   Tools to identify and compare CRISPR arrays.

   :homepage: https://github.com/Alan-Collins/CRISPR_comparison_toolkit
   :license: GPL-3.0
   :recipe: /`cctk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cctk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cctk/meta.yaml>`_

   


.. conda:package:: cctk

   |downloads_cctk| |docker_cctk|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.0-0``,  ``0.7.7-0``

      

   
   :depends blast: 
   :depends dendropy: 
   :depends matplotlib-base: 
   :depends minced: 
   :depends numpy: 
   :depends python: ``>=3.8``
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

      mamba install cctk

   and update with::

      mamba update cctk

  To create a new environment, run::

      mamba create --name myenvname cctk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cctk:<tag>

   (see `cctk/tags`_ for valid values for ``<tag>``)


.. |downloads_cctk| image:: https://img.shields.io/conda/dn/bioconda/cctk.svg?style=flat
   :target: https://anaconda.org/bioconda/cctk
   :alt:   (downloads)
.. |docker_cctk| image:: https://quay.io/repository/biocontainers/cctk/status
   :target: https://quay.io/repository/biocontainers/cctk
.. _`cctk/tags`: https://quay.io/repository/biocontainers/cctk?tab=tags


.. raw:: html

    <script>
        var package = "cctk";
        var versions = ["1.0.2","1.0.1","1.0","0.8.4","0.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cctk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cctk/README.html