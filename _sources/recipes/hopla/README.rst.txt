:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hopla'
.. highlight: bash

hopla
=====

.. conda:recipe:: hopla
   :replaces_section_title:
   :noindex:

   Hopla enables classic genomic single\, duo\, trio\, etc.\, analysis\, by studying a single \(multisample\) vcf\-file

   :homepage: https://github.com/leraman/Hopla
   :license: MIT
   :recipe: /`hopla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hopla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hopla/meta.yaml>`_

   


.. conda:package:: hopla

   |downloads_hopla| |docker_hopla|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-0</code>,  <code>1.0.0-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.1-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  </span></summary>
      

      ``1.0.3-0``,  ``1.0.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: ``>=1.64.0``
   :depends bioconductor-genomicranges: ``>=1.42.0``
   :depends merlin: ``1.1.2.*``
   :depends pandoc: ``>=2.*``
   :depends r-base: 
   :depends r-data.table: ``>=1.13.2``
   :depends r-htmltools: ``>=0.5.0``
   :depends r-kinship2: ``>=1.8.5``
   :depends r-knitr: ``>=1.29``
   :depends r-plotly: ``>=4.9.2.1``
   :depends r-rcolorbrewer: ``>=1.1_2``
   :depends r-vcfr: ``>=1.8.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hopla

   and update with::

      conda update hopla

   or use the docker container::

      docker pull quay.io/biocontainers/hopla:<tag>

   (see `hopla/tags`_ for valid values for ``<tag>``)


.. |downloads_hopla| image:: https://img.shields.io/conda/dn/bioconda/hopla.svg?style=flat
   :target: https://anaconda.org/bioconda/hopla
   :alt:   (downloads)
.. |docker_hopla| image:: https://quay.io/repository/biocontainers/hopla/status
   :target: https://quay.io/repository/biocontainers/hopla
.. _`hopla/tags`: https://quay.io/repository/biocontainers/hopla?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hopla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hopla/README.html