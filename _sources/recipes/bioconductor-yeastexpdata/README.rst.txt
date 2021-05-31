:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yeastexpdata'
.. highlight: bash

bioconductor-yeastexpdata
=========================

.. conda:recipe:: bioconductor-yeastexpdata
   :replaces_section_title:
   :noindex:

   Yeast Experimental Data

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/yeastExpData.html
   :license: GPL
   :recipe: /`bioconductor-yeastexpdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastexpdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastexpdata/meta.yaml>`_

   A collection of different sets of experimental data from yeast.


.. conda:package:: bioconductor-yeastexpdata

   |downloads_bioconductor-yeastexpdata| |docker_bioconductor-yeastexpdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.38.0-0</code>,  <code>0.36.0-1</code>,  <code>0.36.0-0</code>,  <code>0.34.0-0</code>,  <code>0.32.0-0</code>,  <code>0.30.0-1</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.26.0-0</code>,  </span></summary>
      

      ``0.38.0-0``,  ``0.36.0-1``,  ``0.36.0-0``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yeastexpdata

   and update with::

      conda update bioconductor-yeastexpdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yeastexpdata:<tag>

   (see `bioconductor-yeastexpdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yeastexpdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeastexpdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yeastexpdata
   :alt:   (downloads)
.. |docker_bioconductor-yeastexpdata| image:: https://quay.io/repository/biocontainers/bioconductor-yeastexpdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeastexpdata
.. _`bioconductor-yeastexpdata/tags`: https://quay.io/repository/biocontainers/bioconductor-yeastexpdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeastexpdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeastexpdata/README.html