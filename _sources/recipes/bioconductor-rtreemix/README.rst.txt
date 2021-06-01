:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtreemix'
.. highlight: bash

bioconductor-rtreemix
=====================

.. conda:recipe:: bioconductor-rtreemix
   :replaces_section_title:
   :noindex:

   Rtreemix\: Mutagenetic trees mixture models.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Rtreemix.html
   :license: LGPL
   :recipe: /`bioconductor-rtreemix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtreemix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtreemix/meta.yaml>`_
   :links: biotools: :biotools:`rtreemix`, doi: :doi:`10.1093/bioinformatics/btn410`

   Rtreemix is a package that offers an environment for estimating the mutagenetic trees mixture models from cross\-sectional data and using them for various predictions. It includes functions for fitting the trees mixture models\, likelihood computations\, model comparisons\, waiting time estimations\, stability analysis\, etc.


.. conda:package:: bioconductor-rtreemix

   |downloads_bioconductor-rtreemix| |docker_bioconductor-rtreemix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-hmisc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtreemix

   and update with::

      conda update bioconductor-rtreemix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtreemix:<tag>

   (see `bioconductor-rtreemix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtreemix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtreemix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtreemix
   :alt:   (downloads)
.. |docker_bioconductor-rtreemix| image:: https://quay.io/repository/biocontainers/bioconductor-rtreemix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtreemix
.. _`bioconductor-rtreemix/tags`: https://quay.io/repository/biocontainers/bioconductor-rtreemix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtreemix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtreemix/README.html