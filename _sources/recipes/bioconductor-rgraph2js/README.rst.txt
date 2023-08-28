:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgraph2js'
.. highlight: bash

bioconductor-rgraph2js
======================

.. conda:recipe:: bioconductor-rgraph2js
   :replaces_section_title:
   :noindex:

   Convert a Graph into a D3js Script

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RGraph2js.html
   :license: GPL-2
   :recipe: /`bioconductor-rgraph2js <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraph2js>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraph2js/meta.yaml>`_
   :links: biotools: :biotools:`rgraph2js`, doi: :doi:`10.1038/nmeth.3252`

   Generator of web pages which display interactive network\/graph visualizations with D3js\, jQuery and Raphael.


.. conda:package:: bioconductor-rgraph2js

   |downloads_bioconductor-rgraph2js| |docker_bioconductor-rgraph2js|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends jquery: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-rjson: 
   :depends r-whisker: 
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

      mamba install bioconductor-rgraph2js

   and update with::

      mamba update bioconductor-rgraph2js

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rgraph2js

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgraph2js:<tag>

   (see `bioconductor-rgraph2js/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgraph2js| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgraph2js.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgraph2js
   :alt:   (downloads)
.. |docker_bioconductor-rgraph2js| image:: https://quay.io/repository/biocontainers/bioconductor-rgraph2js/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgraph2js
.. _`bioconductor-rgraph2js/tags`: https://quay.io/repository/biocontainers/bioconductor-rgraph2js?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgraph2js";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgraph2js/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgraph2js/README.html