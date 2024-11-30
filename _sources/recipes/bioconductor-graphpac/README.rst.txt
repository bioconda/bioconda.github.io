:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graphpac'
.. highlight: bash

bioconductor-graphpac
=====================

.. conda:recipe:: bioconductor-graphpac
   :replaces_section_title:
   :noindex:

   Identification of Mutational Clusters in Proteins via a Graph Theoretical Approach.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GraphPAC.html
   :license: GPL-2
   :recipe: /`bioconductor-graphpac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphpac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphpac/meta.yaml>`_
   :links: biotools: :biotools:`graphpac`, doi: :doi:`10.1186/1471-2105-15-86`

   Identifies mutational clusters of amino acids in a protein while utilizing the proteins tertiary structure via a graph theoretical model.


.. conda:package:: bioconductor-graphpac

   |downloads_bioconductor-graphpac| |docker_bioconductor-graphpac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ipac: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-rmallow: 
   :depends r-tsp: 
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

      mamba install bioconductor-graphpac

   and update with::

      mamba update bioconductor-graphpac

  To create a new environment, run::

      mamba create --name myenvname bioconductor-graphpac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graphpac:<tag>

   (see `bioconductor-graphpac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graphpac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphpac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graphpac
   :alt:   (downloads)
.. |docker_bioconductor-graphpac| image:: https://quay.io/repository/biocontainers/bioconductor-graphpac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphpac
.. _`bioconductor-graphpac/tags`: https://quay.io/repository/biocontainers/bioconductor-graphpac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-graphpac";
        var versions = ["1.44.0","1.42.0","1.40.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphpac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphpac/README.html