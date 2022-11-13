:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnordt'
.. highlight: bash

bioconductor-cnordt
===================

.. conda:recipe:: bioconductor-cnordt
   :replaces_section_title:
   :noindex:

   Add\-on to CellNOptR\: Discretized time treatments

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/CNORdt.html
   :license: GPL-2
   :recipe: /`bioconductor-cnordt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnordt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnordt/meta.yaml>`_

   This add\-on to the package CellNOptR handles time\-course data\, as opposed to steady state data in CellNOptR. It scales the simulation step to allow comparison and model fitting for time\-course data. Future versions will optimize delays and strengths for each edge.


.. conda:package:: bioconductor-cnordt

   |downloads_bioconductor-cnordt| |docker_bioconductor-cnordt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.1-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cellnoptr: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-abind: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnordt

   and update with::

      conda update bioconductor-cnordt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnordt:<tag>

   (see `bioconductor-cnordt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnordt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnordt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnordt
   :alt:   (downloads)
.. |docker_bioconductor-cnordt| image:: https://quay.io/repository/biocontainers/bioconductor-cnordt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnordt
.. _`bioconductor-cnordt/tags`: https://quay.io/repository/biocontainers/bioconductor-cnordt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnordt";
        var versions = ["1.40.0","1.36.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnordt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnordt/README.html