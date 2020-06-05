:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adductdata'
.. highlight: bash

bioconductor-adductdata
=======================

.. conda:recipe:: bioconductor-adductdata
   :replaces_section_title:
   :noindex:

   Data from untargeted MS of modifications to Cys34 of serum albumin

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/adductData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-adductdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductdata/meta.yaml>`_

   mzXML files from Grigoryan et al 2016 \(Anal Chem\).


.. conda:package:: bioconductor-adductdata

   |downloads_bioconductor-adductdata| |docker_bioconductor-adductdata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``

      

   
   :depends bioconductor-annotationhub: ``>=2.20.0,<2.21.0``
   :depends bioconductor-experimenthub: ``>=1.14.0,<1.15.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adductdata

   and update with::

      conda update bioconductor-adductdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adductdata:<tag>

   (see `bioconductor-adductdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adductdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adductdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adductdata
   :alt:   (downloads)
.. |docker_bioconductor-adductdata| image:: https://quay.io/repository/biocontainers/bioconductor-adductdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adductdata
.. _`bioconductor-adductdata/tags`: https://quay.io/repository/biocontainers/bioconductor-adductdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adductdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adductdata/README.html