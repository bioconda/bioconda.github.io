:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-logicfs'
.. highlight: bash

bioconductor-logicfs
====================

.. conda:recipe:: bioconductor-logicfs
   :replaces_section_title:
   :noindex:

   Identification of SNP Interactions

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/logicFS.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-logicfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logicfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logicfs/meta.yaml>`_

   Identification of interactions between binary variables using Logic Regression. Can\, e.g.\, be used to find interesting SNP interactions. Contains also a bagging version of logic regression for classification.


.. conda:package:: bioconductor-logicfs

   |downloads_bioconductor-logicfs| |docker_bioconductor-logicfs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-logicreg: 
   :depends r-mcbiopi: 
   :depends r-survival: 
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

      mamba install bioconductor-logicfs

   and update with::

      mamba update bioconductor-logicfs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-logicfs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-logicfs:<tag>

   (see `bioconductor-logicfs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-logicfs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-logicfs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-logicfs
   :alt:   (downloads)
.. |docker_bioconductor-logicfs| image:: https://quay.io/repository/biocontainers/bioconductor-logicfs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-logicfs
.. _`bioconductor-logicfs/tags`: https://quay.io/repository/biocontainers/bioconductor-logicfs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-logicfs";
        var versions = ["2.26.0","2.22.0","2.22.0","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-logicfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-logicfs/README.html