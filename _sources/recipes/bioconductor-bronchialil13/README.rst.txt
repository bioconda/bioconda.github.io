:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bronchialil13'
.. highlight: bash

bioconductor-bronchialil13
==========================

.. conda:recipe:: bioconductor-bronchialil13
   :replaces_section_title:
   :noindex:

   time course experiment involving il13

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/bronchialIL13.html
   :license: GPL-2
   :recipe: /`bioconductor-bronchialil13 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bronchialil13>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bronchialil13/meta.yaml>`_

   derived from CNMC \(pepr.cnmcresearch.org\) http\:\/\/pepr.cnmcresearch.org\/browse.do\?action\=list\_prj\_exp\&projectId\=95 Human Bronchial Cell line A549


.. conda:package:: bioconductor-bronchialil13

   |downloads_bioconductor-bronchialil13| |docker_bioconductor-bronchialil13|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.72.0,<1.73.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bronchialil13

   and update with::

      conda update bioconductor-bronchialil13

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bronchialil13:<tag>

   (see `bioconductor-bronchialil13/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bronchialil13| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bronchialil13.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bronchialil13
   :alt:   (downloads)
.. |docker_bioconductor-bronchialil13| image:: https://quay.io/repository/biocontainers/bioconductor-bronchialil13/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bronchialil13
.. _`bioconductor-bronchialil13/tags`: https://quay.io/repository/biocontainers/bioconductor-bronchialil13?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bronchialil13";
        var versions = ["1.32.0","1.32.0","1.30.0","1.28.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bronchialil13/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bronchialil13/README.html