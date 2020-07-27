:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svviz'
.. highlight: bash

svviz
=====

.. conda:recipe:: svviz
   :replaces_section_title:
   :noindex:

   A read visualizer for structural variants

   :homepage: https://github.com/svviz/svviz
   :license: MIT License
   :recipe: /`svviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svviz/meta.yaml>`_

   


.. conda:package:: svviz

   |downloads_svviz| |docker_svviz|

   :versions:
      
      

      ``1.6.2-3``,  ``1.6.2-2``,  ``1.6.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.0-0``

      

   
   :depends flask: 
   :depends joblib: 
   :depends numpy: 
   :depends pyfaidx: 
   :depends pysam: ``>=0.7.8``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svviz

   and update with::

      conda update svviz

   or use the docker container::

      docker pull quay.io/biocontainers/svviz:<tag>

   (see `svviz/tags`_ for valid values for ``<tag>``)


.. |downloads_svviz| image:: https://img.shields.io/conda/dn/bioconda/svviz.svg?style=flat
   :target: https://anaconda.org/bioconda/svviz
   :alt:   (downloads)
.. |docker_svviz| image:: https://quay.io/repository/biocontainers/svviz/status
   :target: https://quay.io/repository/biocontainers/svviz
.. _`svviz/tags`: https://quay.io/repository/biocontainers/svviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svviz/README.html