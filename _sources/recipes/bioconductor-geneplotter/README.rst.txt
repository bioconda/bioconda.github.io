:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplotter'
.. highlight: bash

bioconductor-geneplotter
========================

.. conda:recipe:: bioconductor-geneplotter
   :replaces_section_title:
   :noindex:

   Graphics related functions for Bioconductor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/geneplotter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneplotter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplotter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplotter/meta.yaml>`_
   :links: biotools: :biotools:`geneplotter`, doi: :doi:`10.1038/nmeth.3252`

   Functions for plotting genomic data


.. conda:package:: bioconductor-geneplotter

   |downloads_bioconductor-geneplotter| |docker_bioconductor-geneplotter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-geneplotter

   and update with::

      mamba update bioconductor-geneplotter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geneplotter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneplotter:<tag>

   (see `bioconductor-geneplotter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneplotter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplotter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplotter
   :alt:   (downloads)
.. |docker_bioconductor-geneplotter| image:: https://quay.io/repository/biocontainers/bioconductor-geneplotter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplotter
.. _`bioconductor-geneplotter/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplotter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneplotter";
        var versions = ["1.80.0","1.78.0","1.76.0","1.72.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplotter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplotter/README.html