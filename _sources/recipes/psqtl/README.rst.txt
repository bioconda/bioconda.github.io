:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psqtl'
.. highlight: bash

psqtl
=====

.. conda:recipe:: psqtl
   :replaces_section_title:
   :noindex:

   A collection of Python scripts to predict QTLs using per\-sample sequencing.

   :homepage: https://github.com/zkstewart/psQTL
   :documentation: https://github.com/zkstewart/psQTL/wiki
   
   :license: GPL / GPL-3
   :recipe: /`psqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psqtl/meta.yaml>`_

   


.. conda:package:: psqtl

   |downloads_psqtl| |docker_psqtl|

   :versions:
      
      

      ``1.3.7-0``

      

   
   :depends bcftools: 
   :depends bioconductor-biocparallel: 
   :depends bioconductor-mixomics: ``>=6.26.0``
   :depends biopython: 
   :depends matplotlib-base: 
   :depends ncls: ``>=0.0.68``
   :depends numpy: 
   :depends pandas: 
   :depends pycirclize: 
   :depends python: ``>=3.11,<=3.13``
   :depends qt6-wayland: 
   :depends r-argparser: 
   :depends r-base: ``>=4.3.0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-stringr: 
   :depends samtools: 
   :depends vt: 
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

      mamba install psqtl

   and update with::

      mamba update psqtl

  To create a new environment, run::

      mamba create --name myenvname psqtl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psqtl:<tag>

   (see `psqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_psqtl| image:: https://img.shields.io/conda/dn/bioconda/psqtl.svg?style=flat
   :target: https://anaconda.org/bioconda/psqtl
   :alt:   (downloads)
.. |docker_psqtl| image:: https://quay.io/repository/biocontainers/psqtl/status
   :target: https://quay.io/repository/biocontainers/psqtl
.. _`psqtl/tags`: https://quay.io/repository/biocontainers/psqtl?tab=tags


.. raw:: html

    <script>
        var package = "psqtl";
        var versions = ["1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psqtl/README.html