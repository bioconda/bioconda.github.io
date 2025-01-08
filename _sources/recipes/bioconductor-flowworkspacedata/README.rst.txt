:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowworkspacedata'
.. highlight: bash

bioconductor-flowworkspacedata
==============================

.. conda:recipe:: bioconductor-flowworkspacedata
   :replaces_section_title:
   :noindex:

   A data package containing two flowJo\, one diva xml workspace and the associated fcs files as well as three GatingSets for testing the flowWorkspace\, openCyto and CytoML packages.

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/flowWorkspaceData.html
   :license: GPL-2
   :recipe: /`bioconductor-flowworkspacedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspacedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspacedata/meta.yaml>`_

   The necessary external data to run the flowWorkspace and openCyto vignette is found in this package.


.. conda:package:: bioconductor-flowworkspacedata

   |downloads_bioconductor-flowworkspacedata| |docker_bioconductor-flowworkspacedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.18.0-0</code>,  <code>3.14.0-0</code>,  <code>3.12.0-0</code>,  <code>3.9.0-0</code>,  <code>3.6.0-1</code>,  <code>3.6.0-0</code>,  <code>3.4.0-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``3.18.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.9.0-0``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.4.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-flowworkspacedata

   and update with::

      mamba update bioconductor-flowworkspacedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowworkspacedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowworkspacedata:<tag>

   (see `bioconductor-flowworkspacedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowworkspacedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowworkspacedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowworkspacedata
   :alt:   (downloads)
.. |docker_bioconductor-flowworkspacedata| image:: https://quay.io/repository/biocontainers/bioconductor-flowworkspacedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowworkspacedata
.. _`bioconductor-flowworkspacedata/tags`: https://quay.io/repository/biocontainers/bioconductor-flowworkspacedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowworkspacedata";
        var versions = ["3.18.0","3.14.0","3.12.0","3.9.0","3.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowworkspacedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowworkspacedata/README.html