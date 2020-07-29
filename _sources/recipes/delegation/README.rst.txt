:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'delegation'
.. highlight: bash

delegation
==========

.. conda:recipe:: delegation
   :replaces_section_title:
   :noindex:

   Simple implementation of the delegate pattern.

   :homepage: https://github.com/symonsoft/delegation
   :license: BSD / BSD
   :recipe: /`delegation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delegation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delegation/meta.yaml>`_

   


.. conda:package:: delegation

   |downloads_delegation| |docker_delegation|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install delegation

   and update with::

      conda update delegation

   or use the docker container::

      docker pull quay.io/biocontainers/delegation:<tag>

   (see `delegation/tags`_ for valid values for ``<tag>``)


.. |downloads_delegation| image:: https://img.shields.io/conda/dn/bioconda/delegation.svg?style=flat
   :target: https://anaconda.org/bioconda/delegation
   :alt:   (downloads)
.. |docker_delegation| image:: https://quay.io/repository/biocontainers/delegation/status
   :target: https://quay.io/repository/biocontainers/delegation
.. _`delegation/tags`: https://quay.io/repository/biocontainers/delegation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/delegation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/delegation/README.html