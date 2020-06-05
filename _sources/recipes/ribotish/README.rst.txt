:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotish'
.. highlight: bash

ribotish
========

.. conda:recipe:: ribotish
   :replaces_section_title:
   :noindex:

   Ribo TIS Hunter \(Ribo\-TISH\) identifies translation activities using ribosome profiling data.

   :homepage: https://github.com/zhpn1024/ribotish
   :license: GPL-3
   :recipe: /`ribotish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotish/meta.yaml>`_

   


.. conda:package:: ribotish

   |downloads_ribotish| |docker_ribotish|

   :versions:
      
      

      ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribotish

   and update with::

      conda update ribotish

   or use the docker container::

      docker pull quay.io/biocontainers/ribotish:<tag>

   (see `ribotish/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotish| image:: https://img.shields.io/conda/dn/bioconda/ribotish.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotish
   :alt:   (downloads)
.. |docker_ribotish| image:: https://quay.io/repository/biocontainers/ribotish/status
   :target: https://quay.io/repository/biocontainers/ribotish
.. _`ribotish/tags`: https://quay.io/repository/biocontainers/ribotish?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotish/README.html