:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sv2'
.. highlight: bash

sv2
===

.. conda:recipe:: sv2
   :replaces_section_title:
   :noindex:

   Support Vector Structural Variation Genotyper

   :homepage: https://github.com/dantaki/SV2
   :license: MIT
   :recipe: /`sv2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sv2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sv2/meta.yaml>`_

   


.. conda:package:: sv2

   |downloads_sv2| |docker_sv2|

   :versions:
      
      

      ``1.4.3.4-5``,  ``1.4.3.4-4``,  ``1.4.3.4-3``,  ``1.4.3.4-2``,  ``1.4.3.4-1``,  ``1.4.3.4-0``

      

   
   :depends bedtools: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.9``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python-wget: 
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scikit-learn: ``>=0.19``
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sv2

   and update with::

      conda update sv2

   or use the docker container::

      docker pull quay.io/biocontainers/sv2:<tag>

   (see `sv2/tags`_ for valid values for ``<tag>``)


.. |downloads_sv2| image:: https://img.shields.io/conda/dn/bioconda/sv2.svg?style=flat
   :target: https://anaconda.org/bioconda/sv2
   :alt:   (downloads)
.. |docker_sv2| image:: https://quay.io/repository/biocontainers/sv2/status
   :target: https://quay.io/repository/biocontainers/sv2
.. _`sv2/tags`: https://quay.io/repository/biocontainers/sv2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sv2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sv2/README.html