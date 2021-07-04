:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'correlationplus'
.. highlight: bash

correlationplus
===============

.. conda:recipe:: correlationplus
   :replaces_section_title:
   :noindex:

   A Python package to calculate\, visualize and analyze dynamical correlations of proteins.

   :homepage: https://github.com/tekpinar/correlationplus
   :license: LGPL / GNU Lesser General Public v3 (LGPLv3)
   :recipe: /`correlationplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/correlationplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/correlationplus/meta.yaml>`_

   


.. conda:package:: correlationplus

   |downloads_correlationplus| |docker_correlationplus|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.6-0``

      

   
   :depends matplotlib-base: 
   :depends mdanalysis: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: 
   :depends prody: 
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install correlationplus

   and update with::

      conda update correlationplus

   or use the docker container::

      docker pull quay.io/biocontainers/correlationplus:<tag>

   (see `correlationplus/tags`_ for valid values for ``<tag>``)


.. |downloads_correlationplus| image:: https://img.shields.io/conda/dn/bioconda/correlationplus.svg?style=flat
   :target: https://anaconda.org/bioconda/correlationplus
   :alt:   (downloads)
.. |docker_correlationplus| image:: https://quay.io/repository/biocontainers/correlationplus/status
   :target: https://quay.io/repository/biocontainers/correlationplus
.. _`correlationplus/tags`: https://quay.io/repository/biocontainers/correlationplus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/correlationplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/correlationplus/README.html