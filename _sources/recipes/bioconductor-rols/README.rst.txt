:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rols'
.. highlight: bash

bioconductor-rols
=================

.. conda:recipe:: bioconductor-rols
   :replaces_section_title:
   :noindex:

   An R interface to the Ontology Lookup Service

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rols.html
   :license: GPL-2
   :recipe: /`bioconductor-rols <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rols>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rols/meta.yaml>`_
   :links: biotools: :biotools:`rols`, doi: :doi:`10.1038/nmeth.3252`

   The rols package is an interface to the Ontology Lookup Service \(OLS\) to access and query hundred of ontolgies directly from R.


.. conda:package:: bioconductor-rols

   |downloads_bioconductor-rols| |docker_bioconductor-rols|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.2-0</code>,  <code>2.18.0-0</code>,  <code>2.16.1-0</code>,  </span></summary>
      

      ``3.2.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.2-0``,  ``2.18.0-0``,  ``2.16.1-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.8.2-0``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-httr2: 
   :depends r-jsonlite: 
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

      mamba install bioconductor-rols

   and update with::

      mamba update bioconductor-rols

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rols

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rols:<tag>

   (see `bioconductor-rols/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rols| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rols.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rols
   :alt:   (downloads)
.. |docker_bioconductor-rols| image:: https://quay.io/repository/biocontainers/bioconductor-rols/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rols
.. _`bioconductor-rols/tags`: https://quay.io/repository/biocontainers/bioconductor-rols?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rols";
        var versions = ["3.2.0","2.30.0","2.28.0","2.26.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rols/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rols/README.html