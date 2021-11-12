:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hsmmsinglecell'
.. highlight: bash

bioconductor-hsmmsinglecell
===========================

.. conda:recipe:: bioconductor-hsmmsinglecell
   :replaces_section_title:
   :noindex:

   Single\-cell RNA\-Seq for differentiating human skeletal muscle myoblasts \(HSMM\)

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/HSMMSingleCell.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hsmmsinglecell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hsmmsinglecell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hsmmsinglecell/meta.yaml>`_

   Skeletal myoblasts undergo a well\-characterized sequence of morphological and transcriptional changes during differentiation. In this experiment\, primary human skeletal muscle myoblasts \(HSMM\) were expanded under high mitogen conditions \(GM\) and then differentiated by switching to low\-mitogen media \(DM\).  RNA\-Seq libraries were sequenced from each of several hundred cells taken over a time\-course of serum\-induced differentiation. Between 49 and 77 cells were captured at each of four time points \(0\, 24\, 48\, 72 hours\) following serum switch using the Fluidigm C1 microfluidic system. RNA from each cell was isolated and used to construct mRNA\-Seq libraries\, which were then sequenced to a depth of \~4 million reads per library\, resulting in a complete gene expression profile for each cell.


.. conda:package:: bioconductor-hsmmsinglecell

   |downloads_bioconductor-hsmmsinglecell| |docker_bioconductor-hsmmsinglecell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.114.0-0``,  ``0.112.0-1``,  ``0.112.0-0``,  ``0.110.0-1``,  ``0.110.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hsmmsinglecell

   and update with::

      conda update bioconductor-hsmmsinglecell

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hsmmsinglecell:<tag>

   (see `bioconductor-hsmmsinglecell/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hsmmsinglecell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hsmmsinglecell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hsmmsinglecell
   :alt:   (downloads)
.. |docker_bioconductor-hsmmsinglecell| image:: https://quay.io/repository/biocontainers/bioconductor-hsmmsinglecell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hsmmsinglecell
.. _`bioconductor-hsmmsinglecell/tags`: https://quay.io/repository/biocontainers/bioconductor-hsmmsinglecell?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hsmmsinglecell";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hsmmsinglecell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hsmmsinglecell/README.html