:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-egad'
.. highlight: bash

bioconductor-egad
=================

.. conda:recipe:: bioconductor-egad
   :replaces_section_title:
   :noindex:

   Extending guilt by association by degree

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EGAD.html
   :license: GPL-2
   :recipe: /`bioconductor-egad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egad/meta.yaml>`_

   The package implements a series of highly efficient tools to calculate functional properties of networks based on guilt by association methods.


.. conda:package:: bioconductor-egad

   |downloads_bioconductor-egad| |docker_bioconductor-egad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-zoo: 
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

      mamba install bioconductor-egad

   and update with::

      mamba update bioconductor-egad

  To create a new environment, run::

      mamba create --name myenvname bioconductor-egad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-egad:<tag>

   (see `bioconductor-egad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-egad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-egad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-egad
   :alt:   (downloads)
.. |docker_bioconductor-egad| image:: https://quay.io/repository/biocontainers/bioconductor-egad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-egad
.. _`bioconductor-egad/tags`: https://quay.io/repository/biocontainers/bioconductor-egad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-egad";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-egad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-egad/README.html