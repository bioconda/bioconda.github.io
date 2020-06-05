:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ceas'
.. highlight: bash

ceas
====

.. conda:recipe:: ceas
   :replaces_section_title:
   :noindex:

   CEAS\: Cis\-regulatory Element Annotation System

   :homepage: http://liulab.dfci.harvard.edu/CEAS
   :license: Artistic
   :recipe: /`ceas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ceas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ceas/meta.yaml>`_
   :links: biotools: :biotools:`ceas`

   


.. conda:package:: ceas

   |downloads_ceas| |docker_ceas|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends mysql-python: 
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ceas

   and update with::

      conda update ceas

   or use the docker container::

      docker pull quay.io/biocontainers/ceas:<tag>

   (see `ceas/tags`_ for valid values for ``<tag>``)


.. |downloads_ceas| image:: https://img.shields.io/conda/dn/bioconda/ceas.svg?style=flat
   :target: https://anaconda.org/bioconda/ceas
   :alt:   (downloads)
.. |docker_ceas| image:: https://quay.io/repository/biocontainers/ceas/status
   :target: https://quay.io/repository/biocontainers/ceas
.. _`ceas/tags`: https://quay.io/repository/biocontainers/ceas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ceas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ceas/README.html