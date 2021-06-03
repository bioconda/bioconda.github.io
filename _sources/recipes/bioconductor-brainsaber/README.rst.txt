:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brainsaber'
.. highlight: bash

bioconductor-brainsaber
=======================

.. conda:recipe:: bioconductor-brainsaber
   :replaces_section_title:
   :noindex:

   Brain Span Atlas in Biobase Expressionset R toolset

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/BrainSABER.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-brainsaber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainsaber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainsaber/meta.yaml>`_

   The Allen Institute for Brain Science provides an RNA sequencing \(RNA\-Seq\) data resource for studying transcriptional mechanisms involved in human brain development known as BrainSpan. BrainSABER is an R package that facilitates comparison of user data with the various developmental stages and brain structures found in the BrainSpan atlas by generating dynamic similarity heatmaps for the two data sets. It also provides a self\-validating container for user data.


.. conda:package:: bioconductor-brainsaber

   |downloads_bioconductor-brainsaber| |docker_bioconductor-brainsaber|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocfilecache: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-lsa: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brainsaber

   and update with::

      conda update bioconductor-brainsaber

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brainsaber:<tag>

   (see `bioconductor-brainsaber/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brainsaber| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainsaber.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brainsaber
   :alt:   (downloads)
.. |docker_bioconductor-brainsaber| image:: https://quay.io/repository/biocontainers/bioconductor-brainsaber/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainsaber
.. _`bioconductor-brainsaber/tags`: https://quay.io/repository/biocontainers/bioconductor-brainsaber?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainsaber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainsaber/README.html