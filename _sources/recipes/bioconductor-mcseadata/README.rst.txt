:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mcseadata'
.. highlight: bash

bioconductor-mcseadata
======================

.. conda:recipe:: bioconductor-mcseadata
   :replaces_section_title:
   :noindex:

   Data package for mCSEA package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/mCSEAdata.html
   :license: GPL-2
   :recipe: /`bioconductor-mcseadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcseadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcseadata/meta.yaml>`_

   Data objects necessary to some mCSEA package functions. There are also example data objects to illustrate mCSEA package functionality.


.. conda:package:: bioconductor-mcseadata

   |downloads_bioconductor-mcseadata| |docker_bioconductor-mcseadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-1``,  ``1.10.1-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-mcseadata

   and update with::

      mamba update bioconductor-mcseadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mcseadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mcseadata:<tag>

   (see `bioconductor-mcseadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mcseadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcseadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mcseadata
   :alt:   (downloads)
.. |docker_bioconductor-mcseadata| image:: https://quay.io/repository/biocontainers/bioconductor-mcseadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcseadata
.. _`bioconductor-mcseadata/tags`: https://quay.io/repository/biocontainers/bioconductor-mcseadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mcseadata";
        var versions = ["1.22.0","1.20.1","1.20.0","1.18.0","1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcseadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcseadata/README.html