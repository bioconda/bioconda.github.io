:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpeadj'
.. highlight: bash

bioconductor-lpeadj
===================

.. conda:recipe:: bioconductor-lpeadj
   :replaces_section_title:
   :noindex:

   A correction of the local pooled error \(LPE\) method to replace the asymptotic variance adjustment with an unbiased adjustment based on sample size.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/LPEadj.html
   :license: LGPL
   :recipe: /`bioconductor-lpeadj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpeadj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpeadj/meta.yaml>`_
   :links: biotools: :biotools:`lpeadj`, doi: :doi:`10.1038/nmeth.3252`

   Two options are added to the LPE algorithm. The original LPE method sets all variances below the max variance in the ordered distribution of variances to the maximum variance. in LPEadj this option is turned off by default.  The second option is to use a variance adjustment based on sample size rather than pi\/2.  By default the LPEadj uses the sample size based variance adjustment.


.. conda:package:: bioconductor-lpeadj

   |downloads_bioconductor-lpeadj| |docker_bioconductor-lpeadj|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-lpe: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lpeadj

   and update with::

      conda update bioconductor-lpeadj

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lpeadj:<tag>

   (see `bioconductor-lpeadj/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lpeadj| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpeadj.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpeadj
   :alt:   (downloads)
.. |docker_bioconductor-lpeadj| image:: https://quay.io/repository/biocontainers/bioconductor-lpeadj/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpeadj
.. _`bioconductor-lpeadj/tags`: https://quay.io/repository/biocontainers/bioconductor-lpeadj?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpeadj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpeadj/README.html