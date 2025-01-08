:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pogos'
.. highlight: bash

bioconductor-pogos
==================

.. conda:recipe:: bioconductor-pogos
   :replaces_section_title:
   :noindex:

   PharmacOGenomics Ontology Support

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pogos.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pogos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pogos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pogos/meta.yaml>`_

   Provide simple utilities for querying bhklab PharmacoDB\, modeling API outputs\, and integrating to cell and compound ontologies.


.. conda:package:: bioconductor-pogos

   |downloads_bioconductor-pogos| |docker_bioconductor-pogos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ontoproc: ``>=2.0.0,<2.1.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-httr: ``>=1.3.1``
   :depends r-rjson: ``>=0.2.15``
   :depends r-shiny: 
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

      mamba install bioconductor-pogos

   and update with::

      mamba update bioconductor-pogos

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pogos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pogos:<tag>

   (see `bioconductor-pogos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pogos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pogos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pogos
   :alt:   (downloads)
.. |docker_bioconductor-pogos| image:: https://quay.io/repository/biocontainers/bioconductor-pogos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pogos
.. _`bioconductor-pogos/tags`: https://quay.io/repository/biocontainers/bioconductor-pogos?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pogos";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pogos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pogos/README.html