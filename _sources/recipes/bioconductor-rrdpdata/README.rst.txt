:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrdpdata'
.. highlight: bash

bioconductor-rrdpdata
=====================

.. conda:recipe:: bioconductor-rrdpdata
   :replaces_section_title:
   :noindex:

   Database for the Default RDP Classifier

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/rRDPData.html
   :license: GPL-2
   :recipe: /`bioconductor-rrdpdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdpdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdpdata/meta.yaml>`_

   Database used by the default RDP Classifier


.. conda:package:: bioconductor-rrdpdata

   |downloads_bioconductor-rrdpdata| |docker_bioconductor-rrdpdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221106``
   :depends bioconductor-rrdp: ``>=1.32.0,<1.33.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends openjdk: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rrdpdata

   and update with::

      conda update bioconductor-rrdpdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrdpdata:<tag>

   (see `bioconductor-rrdpdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrdpdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrdpdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrdpdata
   :alt:   (downloads)
.. |docker_bioconductor-rrdpdata| image:: https://quay.io/repository/biocontainers/bioconductor-rrdpdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrdpdata
.. _`bioconductor-rrdpdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rrdpdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rrdpdata";
        var versions = ["1.18.0","1.14.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrdpdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrdpdata/README.html