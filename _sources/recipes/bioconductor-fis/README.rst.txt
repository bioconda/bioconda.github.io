:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fis'
.. highlight: bash

bioconductor-fis
================

.. conda:recipe:: bioconductor-fis
   :replaces_section_title:
   :noindex:

   Human Functional Interactions \(FIs\) for splineTimeR package

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/FIs.html
   :license: GPL-3
   :recipe: /`bioconductor-fis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fis/meta.yaml>`_

   Data set containing two complete lists of identified functional interaction partners in Human. Data are derived from Reactome and BioGRID databases.


.. conda:package:: bioconductor-fis

   |downloads_bioconductor-fis| |docker_bioconductor-fis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fis

   and update with::

      conda update bioconductor-fis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fis:<tag>

   (see `bioconductor-fis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fis
   :alt:   (downloads)
.. |docker_bioconductor-fis| image:: https://quay.io/repository/biocontainers/bioconductor-fis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fis
.. _`bioconductor-fis/tags`: https://quay.io/repository/biocontainers/bioconductor-fis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fis/README.html