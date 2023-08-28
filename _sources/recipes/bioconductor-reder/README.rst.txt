:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reder'
.. highlight: bash

bioconductor-reder
==================

.. conda:recipe:: bioconductor-reder
   :replaces_section_title:
   :noindex:

   Interactive visualization and manipulation of nested networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RedeR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-reder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reder/meta.yaml>`_
   :links: biotools: :biotools:`reder`

   RedeR is an R\-based package combined with a stand\-alone Java application for interactive visualization and manipulation of nested networks.


.. conda:package:: bioconductor-reder

   |downloads_bioconductor-reder| |docker_bioconductor-reder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.1-0</code>,  <code>2.2.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``2.4.1-0``,  ``2.2.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
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

      mamba install bioconductor-reder

   and update with::

      mamba update bioconductor-reder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reder:<tag>

   (see `bioconductor-reder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reder
   :alt:   (downloads)
.. |docker_bioconductor-reder| image:: https://quay.io/repository/biocontainers/bioconductor-reder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reder
.. _`bioconductor-reder/tags`: https://quay.io/repository/biocontainers/bioconductor-reder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reder";
        var versions = ["2.4.1","2.2.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reder/README.html