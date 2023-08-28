:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-millefy'
.. highlight: bash

r-millefy
=========

.. conda:recipe:: r-millefy
   :replaces_section_title:
   :noindex:

   Millefy\: Genome browser\-like visualization of single\-cell RNA\-seq dataset.

   :homepage: https://github.com/yuifu/millefy
   :license: MIT / MIT + file LICENSE
   :recipe: /`r-millefy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-millefy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-millefy/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3591096`, biotools: :biotools:`millefy`

   


.. conda:package:: r-millefy

   |downloads_r-millefy| |docker_r-millefy|

   :versions:
      
      

      ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``

      

   
   :depends bioconductor-destiny: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-rtracklayer: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dtplyr: 
   :depends r-proxy: 
   :depends r-viridislite: 
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

      mamba install r-millefy

   and update with::

      mamba update r-millefy

  To create a new environment, run::

      mamba create --name myenvname r-millefy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-millefy:<tag>

   (see `r-millefy/tags`_ for valid values for ``<tag>``)


.. |downloads_r-millefy| image:: https://img.shields.io/conda/dn/bioconda/r-millefy.svg?style=flat
   :target: https://anaconda.org/bioconda/r-millefy
   :alt:   (downloads)
.. |docker_r-millefy| image:: https://quay.io/repository/biocontainers/r-millefy/status
   :target: https://quay.io/repository/biocontainers/r-millefy
.. _`r-millefy/tags`: https://quay.io/repository/biocontainers/r-millefy?tab=tags


.. raw:: html

    <script>
        var package = "r-millefy";
        var versions = ["0.1.9","0.1.9","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-millefy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-millefy/README.html