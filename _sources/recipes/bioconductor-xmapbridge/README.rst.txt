:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xmapbridge'
.. highlight: bash

bioconductor-xmapbridge
=======================

.. conda:recipe:: bioconductor-xmapbridge
   :replaces_section_title:
   :noindex:

   Export plotting files to the xmapBridge for visualisation in X\:Map

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/xmapbridge.html
   :license: LGPL-3
   :recipe: /`bioconductor-xmapbridge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xmapbridge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xmapbridge/meta.yaml>`_
   :links: biotools: :biotools:`xmapbridge`

   xmapBridge can plot graphs in the X\:Map genome browser. This package exports plotting files in a suitable format.


.. conda:package:: bioconductor-xmapbridge

   |downloads_bioconductor-xmapbridge| |docker_bioconductor-xmapbridge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-xmapbridge

   and update with::

      mamba update bioconductor-xmapbridge

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xmapbridge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xmapbridge:<tag>

   (see `bioconductor-xmapbridge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xmapbridge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xmapbridge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xmapbridge
   :alt:   (downloads)
.. |docker_bioconductor-xmapbridge| image:: https://quay.io/repository/biocontainers/bioconductor-xmapbridge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xmapbridge
.. _`bioconductor-xmapbridge/tags`: https://quay.io/repository/biocontainers/bioconductor-xmapbridge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xmapbridge";
        var versions = ["1.58.0","1.56.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xmapbridge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xmapbridge/README.html