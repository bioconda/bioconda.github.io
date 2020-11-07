:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spqndata'
.. highlight: bash

bioconductor-spqndata
=====================

.. conda:recipe:: bioconductor-spqndata
   :replaces_section_title:
   :noindex:

   Data for the spqn package

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/spqnData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spqndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqndata/meta.yaml>`_

   Bulk RNA\-seq from GTEx on 4\,000 randomly selected\, expressed genes. Data has been processed for co\-expression analysis.


.. conda:package:: bioconductor-spqndata

   |downloads_bioconductor-spqndata| |docker_bioconductor-spqndata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spqndata

   and update with::

      conda update bioconductor-spqndata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spqndata:<tag>

   (see `bioconductor-spqndata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spqndata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spqndata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spqndata
   :alt:   (downloads)
.. |docker_bioconductor-spqndata| image:: https://quay.io/repository/biocontainers/bioconductor-spqndata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spqndata
.. _`bioconductor-spqndata/tags`: https://quay.io/repository/biocontainers/bioconductor-spqndata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spqndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spqndata/README.html