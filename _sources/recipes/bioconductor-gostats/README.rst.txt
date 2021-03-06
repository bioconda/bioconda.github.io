:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gostats'
.. highlight: bash

bioconductor-gostats
====================

.. conda:recipe:: bioconductor-gostats
   :replaces_section_title:
   :noindex:

   Tools for manipulating GO and microarrays

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GOstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gostats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gostats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gostats/meta.yaml>`_
   :links: biotools: :biotools:`gostats`

   A set of tools for interacting with GO and microarray data. A variety of basic manipulation tools for graphs\, hypothesis testing and other simple calculations.


.. conda:package:: bioconductor-gostats

   |downloads_bioconductor-gostats| |docker_bioconductor-gostats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.58.0-0</code>,  <code>2.56.0-1</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  </span></summary>
      

      ``2.58.0-0``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.38.1-1``,  ``2.38.1-0``,  ``2.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.70.0,<1.71.0``
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-annotationforge: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-category: ``>=2.58.0,<2.59.0``
   :depends bioconductor-go.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rbgl: ``>=1.68.0,<1.69.0``
   :depends bioconductor-rgraphviz: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gostats

   and update with::

      conda update bioconductor-gostats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gostats:<tag>

   (see `bioconductor-gostats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gostats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gostats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gostats
   :alt:   (downloads)
.. |docker_bioconductor-gostats| image:: https://quay.io/repository/biocontainers/bioconductor-gostats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gostats
.. _`bioconductor-gostats/tags`: https://quay.io/repository/biocontainers/bioconductor-gostats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gostats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gostats/README.html