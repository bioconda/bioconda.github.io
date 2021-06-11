:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raiss'
.. highlight: bash

raiss
=====

.. conda:recipe:: raiss
   :replaces_section_title:
   :noindex:

   SNP summary statistics imputation package

   :homepage: http://statistical-genetics.pages.pasteur.fr/raiss/
   :license: MIT / MIT
   :recipe: /`raiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raiss/meta.yaml>`_

   


.. conda:package:: raiss

   |downloads_raiss| |docker_raiss|

   :versions:
      
      

      ``3.0-0``,  ``2.0-0``,  ``1.0-0``

      

   
   :depends joblib: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install raiss

   and update with::

      conda update raiss

   or use the docker container::

      docker pull quay.io/biocontainers/raiss:<tag>

   (see `raiss/tags`_ for valid values for ``<tag>``)


.. |downloads_raiss| image:: https://img.shields.io/conda/dn/bioconda/raiss.svg?style=flat
   :target: https://anaconda.org/bioconda/raiss
   :alt:   (downloads)
.. |docker_raiss| image:: https://quay.io/repository/biocontainers/raiss/status
   :target: https://quay.io/repository/biocontainers/raiss
.. _`raiss/tags`: https://quay.io/repository/biocontainers/raiss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raiss/README.html