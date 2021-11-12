:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowworkspacedata'
.. highlight: bash

bioconductor-flowworkspacedata
==============================

.. conda:recipe:: bioconductor-flowworkspacedata
   :replaces_section_title:
   :noindex:

   A data package containing two flowJo\, one diva xml workspace and the associated fcs files as well as three GatingSets for testing the flowWorkspace\, openCyto and CytoML packages.

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/flowWorkspaceData.html
   :license: GPL-2
   :recipe: /`bioconductor-flowworkspacedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspacedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspacedata/meta.yaml>`_

   The necessary external data to run the flowWorkspace and openCyto vignette is found in this package.


.. conda:package:: bioconductor-flowworkspacedata

   |downloads_bioconductor-flowworkspacedata| |docker_bioconductor-flowworkspacedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.0-0</code>,  <code>3.4.0-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  <code>3.0.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``3.6.0-0``,  ``3.4.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowworkspacedata

   and update with::

      conda update bioconductor-flowworkspacedata

   or use the docker container::

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
        var versions = ["3.6.0","3.4.0","3.2.0","3.2.0","3.1.0"];
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