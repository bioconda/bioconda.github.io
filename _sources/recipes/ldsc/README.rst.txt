:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ldsc'
.. highlight: bash

ldsc
====

.. conda:recipe:: ldsc
   :replaces_section_title:
   :noindex:

   ldsc is a tool for estimating heritability and genetic correlation from GWAS summary statistics. It also computes LD Scores.

   :homepage: https://github.com/bulik/ldsc/
   :license: GPL / GPLv3
   :recipe: /`ldsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldsc/meta.yaml>`_

   


.. conda:package:: ldsc

   |downloads_ldsc| |docker_ldsc|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends bitarray: 
   :depends numpy: 
   :depends pandas: ``<0.21.0``
   :depends pybedtools: 
   :depends python: ``<3``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ldsc

   and update with::

      conda update ldsc

   or use the docker container::

      docker pull quay.io/biocontainers/ldsc:<tag>

   (see `ldsc/tags`_ for valid values for ``<tag>``)


.. |downloads_ldsc| image:: https://img.shields.io/conda/dn/bioconda/ldsc.svg?style=flat
   :target: https://anaconda.org/bioconda/ldsc
   :alt:   (downloads)
.. |docker_ldsc| image:: https://quay.io/repository/biocontainers/ldsc/status
   :target: https://quay.io/repository/biocontainers/ldsc
.. _`ldsc/tags`: https://quay.io/repository/biocontainers/ldsc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ldsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ldsc/README.html