:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-samspectral'
.. highlight: bash

bioconductor-samspectral
========================

.. conda:recipe:: bioconductor-samspectral
   :replaces_section_title:
   :noindex:

   Identifies cell population in flow cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SamSPECTRAL.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-samspectral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-samspectral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-samspectral/meta.yaml>`_

   Samples large data such that spectral clustering is possible while preserving density information in edge weights. More specifically\, given a matrix of coordinates as input\, SamSPECTRAL first builds the communities to sample the data points. Then\, it builds a graph and after weighting the edges by conductance computation\, the graph is passed to a classic spectral clustering algorithm to find the spectral clusters. The last stage of SamSPECTRAL is to combine the spectral clusters. The resulting \"connected components\" estimate biological cell populations in the data. See the vignette for more details on how to use this package\, some illustrations\, and simple examples.


.. conda:package:: bioconductor-samspectral

   |downloads_bioconductor-samspectral| |docker_bioconductor-samspectral|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.1-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-samspectral

   and update with::

      mamba update bioconductor-samspectral

  To create a new environment, run::

      mamba create --name myenvname bioconductor-samspectral

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-samspectral:<tag>

   (see `bioconductor-samspectral/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-samspectral| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-samspectral.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-samspectral
   :alt:   (downloads)
.. |docker_bioconductor-samspectral| image:: https://quay.io/repository/biocontainers/bioconductor-samspectral/status
   :target: https://quay.io/repository/biocontainers/bioconductor-samspectral
.. _`bioconductor-samspectral/tags`: https://quay.io/repository/biocontainers/bioconductor-samspectral?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-samspectral";
        var versions = ["1.60.0","1.56.0","1.56.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-samspectral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-samspectral/README.html