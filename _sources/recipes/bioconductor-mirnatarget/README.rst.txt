:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnatarget'
.. highlight: bash

bioconductor-mirnatarget
========================

.. conda:recipe:: bioconductor-mirnatarget
   :replaces_section_title:
   :noindex:

   gene target tabale of miRNA for human\/mouse used for MiRaGE package

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/miRNATarget.html
   :license: GPL
   :recipe: /`bioconductor-mirnatarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatarget/meta.yaml>`_

   gene target tabale of miRNA for human\/mouse used for MiRaGE package


.. conda:package:: bioconductor-mirnatarget

   |downloads_bioconductor-mirnatarget| |docker_bioconductor-mirnatarget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirnatarget

   and update with::

      conda update bioconductor-mirnatarget

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnatarget:<tag>

   (see `bioconductor-mirnatarget/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnatarget| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnatarget.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnatarget
   :alt:   (downloads)
.. |docker_bioconductor-mirnatarget| image:: https://quay.io/repository/biocontainers/bioconductor-mirnatarget/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnatarget
.. _`bioconductor-mirnatarget/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnatarget?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnatarget";
        var versions = ["1.32.0","1.32.0","1.30.0","1.28.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnatarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnatarget/README.html