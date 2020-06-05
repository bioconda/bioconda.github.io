:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shmlast'
.. highlight: bash

shmlast
=======

.. conda:recipe:: shmlast
   :replaces_section_title:
   :noindex:

   conditional reciprocal best hits with LAST

   :homepage: https://github.com/camillescott/shmlast
   :license: BSD-3-Clause
   :recipe: /`shmlast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shmlast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shmlast/meta.yaml>`_

   


.. conda:package:: shmlast

   |downloads_shmlast| |docker_shmlast|

   :versions:
      
      

      ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends doit: ``>=0.29.0``
   :depends ficus: ``>=0.5``
   :depends filelock: ``>=2.0.6``
   :depends last: ``<=874``
   :depends matplotlib: 
   :depends numexpr: ``>=2.3.1``
   :depends numpy: ``>=1.9.0``
   :depends pandas: ``>=0.17.0``
   :depends parallel: 
   :depends python: ``>=3``
   :depends scipy: ``>=0.16.0``
   :depends screed: ``>=0.9``
   :depends seaborn: ``>=0.6.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shmlast

   and update with::

      conda update shmlast

   or use the docker container::

      docker pull quay.io/biocontainers/shmlast:<tag>

   (see `shmlast/tags`_ for valid values for ``<tag>``)


.. |downloads_shmlast| image:: https://img.shields.io/conda/dn/bioconda/shmlast.svg?style=flat
   :target: https://anaconda.org/bioconda/shmlast
   :alt:   (downloads)
.. |docker_shmlast| image:: https://quay.io/repository/biocontainers/shmlast/status
   :target: https://quay.io/repository/biocontainers/shmlast
.. _`shmlast/tags`: https://quay.io/repository/biocontainers/shmlast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shmlast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shmlast/README.html