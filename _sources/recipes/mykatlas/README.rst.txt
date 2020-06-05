:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mykatlas'
.. highlight: bash

mykatlas
========

.. conda:recipe:: mykatlas
   :replaces_section_title:
   :noindex:

   Assists in discoveries of antibiotic\-resistance with mykrobe

   :homepage: http://github.com/phelimb/atlas
   :license: MIT / MIT
   :recipe: /`mykatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykatlas/meta.yaml>`_

   


.. conda:package:: mykatlas

   |downloads_mykatlas| |docker_mykatlas|

   :versions:
      
      

      ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``

      

   
   :depends biopython: 
   :depends future: 
   :depends ga4ghmongo: 
   :depends mongoengine: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyvcf: 
   :depends redis-py: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mykatlas

   and update with::

      conda update mykatlas

   or use the docker container::

      docker pull quay.io/biocontainers/mykatlas:<tag>

   (see `mykatlas/tags`_ for valid values for ``<tag>``)


.. |downloads_mykatlas| image:: https://img.shields.io/conda/dn/bioconda/mykatlas.svg?style=flat
   :target: https://anaconda.org/bioconda/mykatlas
   :alt:   (downloads)
.. |docker_mykatlas| image:: https://quay.io/repository/biocontainers/mykatlas/status
   :target: https://quay.io/repository/biocontainers/mykatlas
.. _`mykatlas/tags`: https://quay.io/repository/biocontainers/mykatlas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mykatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mykatlas/README.html