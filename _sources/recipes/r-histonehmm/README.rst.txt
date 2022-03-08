:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-histonehmm'
.. highlight: bash

r-histonehmm
============

.. conda:recipe:: r-histonehmm
   :replaces_section_title:
   :noindex:

   histoneHMM is a software to analyse ChIP\-seq data of histone modifications with broad genomic footprints like H3K27me3. It allows for calling modified regions in single samples as well as for calling differentially modified regions in a comparison of two samples

   :homepage: http://histonehmm.molgen.mpg.de/
   :developer docs: https://github.com/matthiasheinig/histoneHMM
   :license: GPL
   :recipe: /`r-histonehmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-histonehmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-histonehmm/meta.yaml>`_

   


.. conda:package:: r-histonehmm

   |downloads_r-histonehmm| |docker_r-histonehmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8-4</code>,  <code>1.8-3</code>,  <code>1.8-2</code>,  <code>1.8-1</code>,  <code>1.8-0</code>,  <code>1.7.1-1</code>,  <code>1.7.1-0</code>,  <code>1.7-1</code>,  <code>1.7-0</code>,  </span></summary>
      

      ``1.8-4``,  ``1.8-3``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7-1``,  ``1.7-0``,  ``1.6-1``,  ``1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-rsamtools: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mvtnorm: 
   :depends r-optparse: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-histonehmm

   and update with::

      conda update r-histonehmm

   or use the docker container::

      docker pull quay.io/biocontainers/r-histonehmm:<tag>

   (see `r-histonehmm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-histonehmm| image:: https://img.shields.io/conda/dn/bioconda/r-histonehmm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-histonehmm
   :alt:   (downloads)
.. |docker_r-histonehmm| image:: https://quay.io/repository/biocontainers/r-histonehmm/status
   :target: https://quay.io/repository/biocontainers/r-histonehmm
.. _`r-histonehmm/tags`: https://quay.io/repository/biocontainers/r-histonehmm?tab=tags


.. raw:: html

    <script>
        var package = "r-histonehmm";
        var versions = ["1.8","1.8","1.8","1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-histonehmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-histonehmm/README.html