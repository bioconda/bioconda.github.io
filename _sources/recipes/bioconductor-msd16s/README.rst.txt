:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msd16s'
.. highlight: bash

bioconductor-msd16s
===================

.. conda:recipe:: bioconductor-msd16s
   :replaces_section_title:
   :noindex:

   Healthy and moderate to severe diarrhea 16S expression data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/msd16s.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msd16s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msd16s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msd16s/meta.yaml>`_

   Gut 16S sequencing expression data from 992 healthy and moderate\-to\-severe diarrhetic samples used in \'Diarrhea in young children from low\-income countries leads to large\-scale alterations in intestinal microbiota composition\'.


.. conda:package:: bioconductor-msd16s

   |downloads_bioconductor-msd16s| |docker_bioconductor-msd16s|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-metagenomeseq: ``>=1.42.0,<1.43.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-msd16s

   and update with::

      mamba update bioconductor-msd16s

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msd16s

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msd16s:<tag>

   (see `bioconductor-msd16s/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msd16s| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msd16s.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msd16s
   :alt:   (downloads)
.. |docker_bioconductor-msd16s| image:: https://quay.io/repository/biocontainers/bioconductor-msd16s/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msd16s
.. _`bioconductor-msd16s/tags`: https://quay.io/repository/biocontainers/bioconductor-msd16s?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msd16s";
        var versions = ["1.20.0","1.18.0","1.14.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msd16s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msd16s/README.html