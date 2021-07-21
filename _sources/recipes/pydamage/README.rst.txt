:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydamage'
.. highlight: bash

pydamage
========

.. conda:recipe:: pydamage
   :replaces_section_title:
   :noindex:

   Damage parameter estimation for ancient DNA

   :homepage: https://github.com/maxibor/pydamage
   :license: GPL-3.0
   :recipe: /`pydamage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydamage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydamage/meta.yaml>`_

   


.. conda:package:: pydamage

   |downloads_pydamage| |docker_pydamage|

   :versions:
      
      

      ``0.61-0``,  ``0.60-1``,  ``0.60-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends kneed: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pypmml: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends statsmodels: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydamage

   and update with::

      conda update pydamage

   or use the docker container::

      docker pull quay.io/biocontainers/pydamage:<tag>

   (see `pydamage/tags`_ for valid values for ``<tag>``)


.. |downloads_pydamage| image:: https://img.shields.io/conda/dn/bioconda/pydamage.svg?style=flat
   :target: https://anaconda.org/bioconda/pydamage
   :alt:   (downloads)
.. |docker_pydamage| image:: https://quay.io/repository/biocontainers/pydamage/status
   :target: https://quay.io/repository/biocontainers/pydamage
.. _`pydamage/tags`: https://quay.io/repository/biocontainers/pydamage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydamage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydamage/README.html