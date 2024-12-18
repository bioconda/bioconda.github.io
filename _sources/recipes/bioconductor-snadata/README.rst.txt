:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snadata'
.. highlight: bash

bioconductor-snadata
====================

.. conda:recipe:: bioconductor-snadata
   :replaces_section_title:
   :noindex:

   Social Networks Analysis Data Examples

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/SNAData.html
   :license: LGPL
   :recipe: /`bioconductor-snadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snadata/meta.yaml>`_

   Data from Wasserman \& Faust \(1999\) \"Social Network Analysis\"


.. conda:package:: bioconductor-snadata

   |downloads_bioconductor-snadata| |docker_bioconductor-snadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends curl: 
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

      mamba install bioconductor-snadata

   and update with::

      mamba update bioconductor-snadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snadata:<tag>

   (see `bioconductor-snadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snadata
   :alt:   (downloads)
.. |docker_bioconductor-snadata| image:: https://quay.io/repository/biocontainers/bioconductor-snadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snadata
.. _`bioconductor-snadata/tags`: https://quay.io/repository/biocontainers/bioconductor-snadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snadata";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snadata/README.html