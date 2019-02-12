:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lightning'
.. highlight: bash

lightning
=========

.. conda:recipe:: lightning
   :replaces_section_title:

   lightning is a library for large\-scale linear classification\, regression and ranking in Python

   :homepage: http://contrib.scikit-learn.org/lightning/
   :license: Unknown
   :recipe: /`lightning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightning/meta.yaml>`_

   


.. conda:package:: lightning

   |downloads_lightning| |docker_lightning|

   :versions: 0.2.dev0-0
   
   :depends numpy: 
   
   :depends python: 2.7*
   
   :depends scikit-learn: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lightning

   and update with::

      conda update lightning

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lightning:<tag>

   (see `lightning/tags`_ for valid values for ``<tag>``)


.. |downloads_lightning| image:: https://img.shields.io/conda/dn/bioconda/lightning.svg?style=flat
   :alt:   (downloads)
.. |docker_lightning| image:: https://quay.io/repository/biocontainers/lightning/status
   :target: https://quay.io/repository/biocontainers/lightning
.. _`lightning/tags`: https://quay.io/repository/biocontainers/lightning?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lightning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lightning/README.html