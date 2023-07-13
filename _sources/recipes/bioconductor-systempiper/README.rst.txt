:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-systempiper'
.. highlight: bash

bioconductor-systempiper
========================

.. conda:recipe:: bioconductor-systempiper
   :replaces_section_title:
   :noindex:

   systemPipeR\: NGS workflow and report generation environment

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/systemPipeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-systempiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiper/meta.yaml>`_
   :links: biotools: :biotools:`systempiper`

   R package for building and running automated end\-to\-end analysis workflows for a wide range of next generation sequence \(NGS\) applications such as RNA\-Seq\, ChIP\-Seq\, VAR\-Seq and Ribo\-Seq. Important features include a uniform workflow interface across different NGS applications\, automated report generation\, and support for running both R and command\-line software\, such as NGS aligners or peak\/variant callers\, on local computers or compute clusters. Efficient handling of complex sample sets and experimental designs is facilitated by a consistently implemented sample annotation infrastructure. Instructions for using systemPipeR are given in the Overview Vignette \(HTML\). The remaining Vignettes\, linked below\, are workflow templates for common NGS use cases.


.. conda:package:: bioconductor-systempiper

   |downloads_bioconductor-systempiper| |docker_bioconductor-systempiper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.3-0</code>,  <code>2.4.0-0</code>,  <code>2.0.0-0</code>,  <code>1.26.2-0</code>,  <code>1.24.3-0</code>,  <code>1.24.2-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.2-0</code>,  </span></summary>
      

      ``2.6.3-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.26.2-0``,  ``1.24.3-0``,  ``1.24.2-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.9.0-0``,  ``1.4.8-0``,  ``1.4.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-shortread: ``>=1.58.0,<1.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-magrittr: 
   :depends r-stringr: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-systempiper

   and update with::

      conda update bioconductor-systempiper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-systempiper:<tag>

   (see `bioconductor-systempiper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-systempiper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-systempiper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-systempiper
   :alt:   (downloads)
.. |docker_bioconductor-systempiper| image:: https://quay.io/repository/biocontainers/bioconductor-systempiper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-systempiper
.. _`bioconductor-systempiper/tags`: https://quay.io/repository/biocontainers/bioconductor-systempiper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-systempiper";
        var versions = ["2.6.3","2.4.0","2.0.0","1.26.2","1.24.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-systempiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-systempiper/README.html