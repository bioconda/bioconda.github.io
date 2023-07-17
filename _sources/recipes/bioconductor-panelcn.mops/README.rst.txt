:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panelcn.mops'
.. highlight: bash

bioconductor-panelcn.mops
=========================

.. conda:recipe:: bioconductor-panelcn.mops
   :replaces_section_title:
   :noindex:

   CNV detection tool for targeted NGS panel data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/panelcn.mops.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-panelcn.mops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panelcn.mops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panelcn.mops/meta.yaml>`_

   CNV detection tool for targeted NGS panel data. Extension of the cn.mops package.


.. conda:package:: bioconductor-panelcn.mops

   |downloads_bioconductor-panelcn.mops| |docker_bioconductor-panelcn.mops|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cn.mops: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-panelcn.mops

   and update with::

      conda update bioconductor-panelcn.mops

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panelcn.mops:<tag>

   (see `bioconductor-panelcn.mops/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panelcn.mops| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panelcn.mops.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panelcn.mops
   :alt:   (downloads)
.. |docker_bioconductor-panelcn.mops| image:: https://quay.io/repository/biocontainers/bioconductor-panelcn.mops/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panelcn.mops
.. _`bioconductor-panelcn.mops/tags`: https://quay.io/repository/biocontainers/bioconductor-panelcn.mops?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-panelcn.mops";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panelcn.mops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panelcn.mops/README.html