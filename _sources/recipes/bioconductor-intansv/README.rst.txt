:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intansv'
.. highlight: bash

bioconductor-intansv
====================

.. conda:recipe:: bioconductor-intansv
   :replaces_section_title:
   :noindex:

   Integrative analysis of structural variations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/intansv.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-intansv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intansv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intansv/meta.yaml>`_

   This package provides efficient tools to read and integrate structural variations predicted by popular softwares. Annotation and visulation of structural variations are also implemented in the package.


.. conda:package:: bioconductor-intansv

   |downloads_bioconductor-intansv| |docker_bioconductor-intansv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-ggbio: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-plyr: 
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

      mamba install bioconductor-intansv

   and update with::

      mamba update bioconductor-intansv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-intansv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-intansv:<tag>

   (see `bioconductor-intansv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-intansv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intansv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intansv
   :alt:   (downloads)
.. |docker_bioconductor-intansv| image:: https://quay.io/repository/biocontainers/bioconductor-intansv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intansv
.. _`bioconductor-intansv/tags`: https://quay.io/repository/biocontainers/bioconductor-intansv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intansv";
        var versions = ["1.46.0","1.42.0","1.40.0","1.38.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intansv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intansv/README.html