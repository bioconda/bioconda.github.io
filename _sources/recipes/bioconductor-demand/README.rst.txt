:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-demand'
.. highlight: bash

bioconductor-demand
===================

.. conda:recipe:: bioconductor-demand
   :replaces_section_title:
   :noindex:

   DeMAND

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/DeMAND.html
   :license: file LICENSE
   :recipe: /`bioconductor-demand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demand/meta.yaml>`_
   :links: biotools: :biotools:`demand`, doi: :doi:`10.1038/nmeth.3252`

   DEMAND predicts Drug MoA by interrogating a cell context specific regulatory network with a small number \(N \>\= 6\) of compound\-induced gene expression signatures\, to elucidate specific proteins whose interactions in the network is dysregulated by the compound.


.. conda:package:: bioconductor-demand

   |downloads_bioconductor-demand| |docker_bioconductor-demand|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-kernsmooth: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-demand

   and update with::

      conda update bioconductor-demand

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-demand:<tag>

   (see `bioconductor-demand/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-demand| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-demand.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-demand
   :alt:   (downloads)
.. |docker_bioconductor-demand| image:: https://quay.io/repository/biocontainers/bioconductor-demand/status
   :target: https://quay.io/repository/biocontainers/bioconductor-demand
.. _`bioconductor-demand/tags`: https://quay.io/repository/biocontainers/bioconductor-demand?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-demand";
        var versions = ["1.24.0","1.22.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-demand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-demand/README.html