:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'constax'
.. highlight: bash

constax
=======

.. conda:recipe:: constax
   :replaces_section_title:
   :noindex:

   A software for accurate taxonomic classification of environmental DNA markers

   :homepage: https://github.com/liberjul/CONSTAXv2
   :documentation: https://constax.readthedocs.io/en/latest/
   
   :license: MIT
   :recipe: /`constax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constax/meta.yaml>`_

   


.. conda:package:: constax

   |downloads_constax| |docker_constax|

   :versions:
      
      

      ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends blast: ``>=2.10``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends rdptools: 
   :depends vsearch: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install constax

   and update with::

      conda update constax

   or use the docker container::

      docker pull quay.io/biocontainers/constax:<tag>

   (see `constax/tags`_ for valid values for ``<tag>``)


.. |downloads_constax| image:: https://img.shields.io/conda/dn/bioconda/constax.svg?style=flat
   :target: https://anaconda.org/bioconda/constax
   :alt:   (downloads)
.. |docker_constax| image:: https://quay.io/repository/biocontainers/constax/status
   :target: https://quay.io/repository/biocontainers/constax
.. _`constax/tags`: https://quay.io/repository/biocontainers/constax?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/constax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/constax/README.html