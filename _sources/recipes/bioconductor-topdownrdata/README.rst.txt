:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-topdownrdata'
.. highlight: bash

bioconductor-topdownrdata
=========================

.. conda:recipe:: bioconductor-topdownrdata
   :replaces_section_title:
   :noindex:

   Example Files for the topdownr R Package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/topdownrdata.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-topdownrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topdownrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topdownrdata/meta.yaml>`_

   Example data for the topdownr package generated on a Thermo Orbitrap Fusion Lumos MS device.


.. conda:package:: bioconductor-topdownrdata

   |downloads_bioconductor-topdownrdata| |docker_bioconductor-topdownrdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-topdownr: ``>=1.22.0,<1.23.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-topdownrdata

   and update with::

      conda update bioconductor-topdownrdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-topdownrdata:<tag>

   (see `bioconductor-topdownrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-topdownrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topdownrdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-topdownrdata
   :alt:   (downloads)
.. |docker_bioconductor-topdownrdata| image:: https://quay.io/repository/biocontainers/bioconductor-topdownrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topdownrdata
.. _`bioconductor-topdownrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-topdownrdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-topdownrdata";
        var versions = ["1.22.0","1.20.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topdownrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topdownrdata/README.html