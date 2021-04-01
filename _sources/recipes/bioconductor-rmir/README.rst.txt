:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmir'
.. highlight: bash

bioconductor-rmir
=================

.. conda:recipe:: bioconductor-rmir
   :replaces_section_title:
   :noindex:

   Package to work with miRNAs and miRNA targets with R

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/RmiR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rmir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir/meta.yaml>`_
   :links: biotools: :biotools:`rmir`, doi: :doi:`10.1038/nmeth.3252`

   Useful functions to merge microRNA and respective targets using differents databases


.. conda:package:: bioconductor-rmir

   |downloads_bioconductor-rmir| |docker_bioconductor-rmir|

   :versions:
      
      

      ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      

   
   :depends bioconductor-rmir.hs.mirna: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dbi: 
   :depends r-rsvgtipsdevice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmir

   and update with::

      conda update bioconductor-rmir

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmir:<tag>

   (see `bioconductor-rmir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmir
   :alt:   (downloads)
.. |docker_bioconductor-rmir| image:: https://quay.io/repository/biocontainers/bioconductor-rmir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir
.. _`bioconductor-rmir/tags`: https://quay.io/repository/biocontainers/bioconductor-rmir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir/README.html