:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wiggletools'
.. highlight: bash

wiggletools
===========

.. conda:recipe:: wiggletools
   :replaces_section_title:
   :noindex:

   The WiggleTools package allows genomewide data files to be manipulated as numerical functions\, equipped with all the standard functional analysis operators \(sum\, product\, product by a scalar\, comparators\)\, and derived statistics \(mean\, median\, variance\, stddev\, t\-test\, Wilcoxon\'s rank sum test\, etc\).

   :homepage: https://github.com/Ensembl/WiggleTools
   :license: Apache / Apache
   :recipe: /`wiggletools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wiggletools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wiggletools/meta.yaml>`_

   


.. conda:package:: wiggletools

   |downloads_wiggletools| |docker_wiggletools|

   :versions:
      
      

      ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libbigwig: 
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wiggletools

   and update with::

      conda update wiggletools

   or use the docker container::

      docker pull quay.io/biocontainers/wiggletools:<tag>

   (see `wiggletools/tags`_ for valid values for ``<tag>``)


.. |downloads_wiggletools| image:: https://img.shields.io/conda/dn/bioconda/wiggletools.svg?style=flat
   :target: https://anaconda.org/bioconda/wiggletools
   :alt:   (downloads)
.. |docker_wiggletools| image:: https://quay.io/repository/biocontainers/wiggletools/status
   :target: https://quay.io/repository/biocontainers/wiggletools
.. _`wiggletools/tags`: https://quay.io/repository/biocontainers/wiggletools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wiggletools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wiggletools/README.html