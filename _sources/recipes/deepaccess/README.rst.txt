:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepaccess'
.. highlight: bash

deepaccess
==========

.. conda:recipe:: deepaccess
   :replaces_section_title:
   :noindex:

   A package for training and interpreting an ensemble of neural networks for chromatin accessibility

   :homepage: https://github.com/gifford-lab/deepaccess-package
   :documentation: https://pypi.org/project/deepaccess/
   
   :license: MIT / MIT
   :recipe: /`deepaccess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepaccess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepaccess/meta.yaml>`_
   :links: doi: :doi:`10.1101/2021.02.26.433073`

   


.. conda:package:: deepaccess

   |downloads_deepaccess| |docker_deepaccess|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends bedtools: ``>=2.29.2``
   :depends keras: ``>=2.4.3``
   :depends matplotlib-base: ``>=3.3.3``
   :depends numpy: ``>=1.19.0``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.24.1``
   :depends scipy: ``>=1.6.2``
   :depends tensorflow: ``>=2.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepaccess

   and update with::

      conda update deepaccess

   or use the docker container::

      docker pull quay.io/biocontainers/deepaccess:<tag>

   (see `deepaccess/tags`_ for valid values for ``<tag>``)


.. |downloads_deepaccess| image:: https://img.shields.io/conda/dn/bioconda/deepaccess.svg?style=flat
   :target: https://anaconda.org/bioconda/deepaccess
   :alt:   (downloads)
.. |docker_deepaccess| image:: https://quay.io/repository/biocontainers/deepaccess/status
   :target: https://quay.io/repository/biocontainers/deepaccess
.. _`deepaccess/tags`: https://quay.io/repository/biocontainers/deepaccess?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepaccess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepaccess/README.html