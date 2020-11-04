:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowtrans'
.. highlight: bash

bioconductor-flowtrans
======================

.. conda:recipe:: bioconductor-flowtrans
   :replaces_section_title:
   :noindex:

   Parameter Optimization for Flow Cytometry Data Transformation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/flowTrans.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowtrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtrans/meta.yaml>`_

   Profile maximum likelihood estimation of parameters for flow cytometry data transformations.


.. conda:package:: bioconductor-flowtrans

   |downloads_bioconductor-flowtrans| |docker_bioconductor-flowtrans|

   :versions:
      
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``

      

   
   :depends bioconductor-flowclust: ``>=3.28.0,<3.29.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowviz: ``>=1.54.0,<1.55.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowtrans

   and update with::

      conda update bioconductor-flowtrans

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowtrans:<tag>

   (see `bioconductor-flowtrans/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowtrans| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowtrans.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowtrans
   :alt:   (downloads)
.. |docker_bioconductor-flowtrans| image:: https://quay.io/repository/biocontainers/bioconductor-flowtrans/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowtrans
.. _`bioconductor-flowtrans/tags`: https://quay.io/repository/biocontainers/bioconductor-flowtrans?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowtrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowtrans/README.html