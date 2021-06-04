:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-spp'
.. highlight: bash

r-spp
=====

.. conda:recipe:: r-spp
   :replaces_section_title:
   :noindex:

   Analysis of ChIP\-seq and other functional sequencing data \[Kharchenko PV \(2008\) \<DOI\:10.1038\/nbt.1508\>\].

   :homepage: https://CRAN.R-project.org/package=spp
   :license: GPL2 / GPL-2
   :recipe: /`r-spp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spp/meta.yaml>`_
   :links: biotools: :biotools:`spp`, doi: :doi:`10.1038/nbt.1508`

   


.. conda:package:: r-spp

   |downloads_r-spp| |docker_r-spp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-5</code>,  <code>1.16.0-4</code>,  <code>1.16.0-3</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.15.5-2</code>,  <code>1.15.5-1</code>,  <code>1.15.5-0</code>,  </span></summary>
      

      ``1.16.0-5``,  ``1.16.0-4``,  ``1.16.0-3``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.5-2``,  ``1.15.5-1``,  ``1.15.5-0``,  ``1.15.2-0``,  ``1.14post-0``,  ``1.14-0``,  ``1.13-0``,  ``1.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rsamtools: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bh: ``>=1.66``
   :depends r-catools: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-spp

   and update with::

      conda update r-spp

   or use the docker container::

      docker pull quay.io/biocontainers/r-spp:<tag>

   (see `r-spp/tags`_ for valid values for ``<tag>``)


.. |downloads_r-spp| image:: https://img.shields.io/conda/dn/bioconda/r-spp.svg?style=flat
   :target: https://anaconda.org/bioconda/r-spp
   :alt:   (downloads)
.. |docker_r-spp| image:: https://quay.io/repository/biocontainers/r-spp/status
   :target: https://quay.io/repository/biocontainers/r-spp
.. _`r-spp/tags`: https://quay.io/repository/biocontainers/r-spp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spp/README.html