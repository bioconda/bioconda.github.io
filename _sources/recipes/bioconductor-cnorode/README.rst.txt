:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnorode'
.. highlight: bash

bioconductor-cnorode
====================

.. conda:recipe:: bioconductor-cnorode
   :replaces_section_title:
   :noindex:

   ODE add\-on to CellNOptR

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/CNORode.html
   :license: GPL-2
   :recipe: /`bioconductor-cnorode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorode/meta.yaml>`_
   :links: biotools: :biotools:`cnorode`, doi: :doi:`10.1186/1752-0509-6-133`

   Logic based ordinary differential equation \(ODE\) add\-on to CellNOptR.


.. conda:package:: bioconductor-cnorode

   |downloads_bioconductor-cnorode| |docker_bioconductor-cnorode|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cellnoptr: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-genalg: 
   :depends r-knitr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnorode

   and update with::

      conda update bioconductor-cnorode

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnorode:<tag>

   (see `bioconductor-cnorode/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnorode| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnorode.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnorode
   :alt:   (downloads)
.. |docker_bioconductor-cnorode| image:: https://quay.io/repository/biocontainers/bioconductor-cnorode/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnorode
.. _`bioconductor-cnorode/tags`: https://quay.io/repository/biocontainers/bioconductor-cnorode?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnorode";
        var versions = ["1.42.0","1.40.0","1.40.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnorode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnorode/README.html