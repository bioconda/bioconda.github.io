:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-globaltest'
.. highlight: bash

bioconductor-globaltest
=======================

.. conda:recipe:: bioconductor-globaltest
   :replaces_section_title:
   :noindex:

   Testing Groups of Covariates\/Features for Association with a Response Variable\, with Applications to Gene Set Testing

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/globaltest.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-globaltest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globaltest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globaltest/meta.yaml>`_
   :links: biotools: :biotools:`globaltest`

   The global test tests groups of covariates \(or features\) for association with a response variable. This package implements the test with diagnostic plots and multiple testing utilities\, along with several functions to facilitate the use of this test for gene set testing of GO and KEGG terms.


.. conda:package:: bioconductor-globaltest

   |downloads_bioconductor-globaltest| |docker_bioconductor-globaltest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.46.0-0</code>,  <code>5.44.0-1</code>,  <code>5.44.0-0</code>,  <code>5.42.0-0</code>,  <code>5.40.0-0</code>,  <code>5.38.0-1</code>,  <code>5.36.0-1</code>,  <code>5.36.0-0</code>,  <code>5.34.1-0</code>,  </span></summary>
      

      ``5.46.0-0``,  ``5.44.0-1``,  ``5.44.0-0``,  ``5.42.0-0``,  ``5.40.0-0``,  ``5.38.0-1``,  ``5.36.0-1``,  ``5.36.0-0``,  ``5.34.1-0``,  ``5.32.0-0``,  ``5.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.70.0,<1.71.0``
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-globaltest

   and update with::

      conda update bioconductor-globaltest

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-globaltest:<tag>

   (see `bioconductor-globaltest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-globaltest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-globaltest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-globaltest
   :alt:   (downloads)
.. |docker_bioconductor-globaltest| image:: https://quay.io/repository/biocontainers/bioconductor-globaltest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-globaltest
.. _`bioconductor-globaltest/tags`: https://quay.io/repository/biocontainers/bioconductor-globaltest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-globaltest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-globaltest/README.html