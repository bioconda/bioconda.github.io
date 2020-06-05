:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fred2'
.. highlight: bash

fred2
=====

.. conda:recipe:: fred2
   :replaces_section_title:
   :noindex:

   Python\-based framework for computational immunomics.

   :homepage: https://fred-2.github.io
   :license: BSD
   :recipe: /`fred2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fred2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fred2/meta.yaml>`_

   


.. conda:package:: fred2

   |downloads_fred2| |docker_fred2|

   :versions:
      
      

      ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-3``,  ``2.0.3-1``,  ``2.0.2-2``,  ``2.0.2-1``

      

   
   :depends biopython: 
   :depends pandas: 
   :depends pymysql: 
   :depends pyomo: 
   :depends pysvmlight: 
   :depends python: ``<3``
   :depends pyvcf: 
   :depends svmlight: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fred2

   and update with::

      conda update fred2

   or use the docker container::

      docker pull quay.io/biocontainers/fred2:<tag>

   (see `fred2/tags`_ for valid values for ``<tag>``)


.. |downloads_fred2| image:: https://img.shields.io/conda/dn/bioconda/fred2.svg?style=flat
   :target: https://anaconda.org/bioconda/fred2
   :alt:   (downloads)
.. |docker_fred2| image:: https://quay.io/repository/biocontainers/fred2/status
   :target: https://quay.io/repository/biocontainers/fred2
.. _`fred2/tags`: https://quay.io/repository/biocontainers/fred2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fred2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fred2/README.html