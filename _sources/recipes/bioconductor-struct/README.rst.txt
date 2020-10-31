:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-struct'
.. highlight: bash

bioconductor-struct
===================

.. conda:recipe:: bioconductor-struct
   :replaces_section_title:
   :noindex:

   Statistics in R Using Class\-based Templates

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/struct.html
   :license: GPL-3
   :recipe: /`bioconductor-struct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-struct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-struct/meta.yaml>`_

   Defines and includes a set of class\-based templates for developing and implementing data processing and analysis workflows\, with a strong emphasis on statistics and machine learning. The templates can be used and where needed extended to \'wrap\' tools and methods from other packages into a common standardised structure to allow for effective and fast integration. Model objects can be combined into sequences\, and sequences nested in iterators using overloaded operators to simplify and improve readability of the code. STATistics Ontology \(STATO\) has been integrated and implemented to provide standardised definitions for methods\, inputs and outputs wrapped using the class\-based templates.


.. conda:package:: bioconductor-struct

   |downloads_bioconductor-struct| |docker_bioconductor-struct|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-knitr: 
   :depends r-ontologyindex: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-struct

   and update with::

      conda update bioconductor-struct

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-struct:<tag>

   (see `bioconductor-struct/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-struct| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-struct.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-struct
   :alt:   (downloads)
.. |docker_bioconductor-struct| image:: https://quay.io/repository/biocontainers/bioconductor-struct/status
   :target: https://quay.io/repository/biocontainers/bioconductor-struct
.. _`bioconductor-struct/tags`: https://quay.io/repository/biocontainers/bioconductor-struct?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-struct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-struct/README.html