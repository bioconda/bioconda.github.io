:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fit_nbinom'
.. highlight: bash

fit_nbinom
==========

.. conda:recipe:: fit_nbinom
   :replaces_section_title:

   Script to fit negative binomial distributions via maximum likelihood estimation.

   :homepage: https://github.com/joachimwolff/fit_nbinom/
   :license: GPL3
   :recipe: /`fit_nbinom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fit_nbinom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fit_nbinom/meta.yaml>`_

   


.. conda:package:: fit_nbinom

   |downloads_fit_nbinom| |docker_fit_nbinom|

   :versions: 1.0-0
   
   :depends numpy: >=1.15
   :depends python: <3.7
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fit_nbinom

   and update with::

      conda update fit_nbinom

   or use the docker container::

      docker pull quay.io/biocontainers/fit_nbinom:<tag>

   (see `fit_nbinom/tags`_ for valid values for ``<tag>``)


.. |downloads_fit_nbinom| image:: https://img.shields.io/conda/dn/bioconda/fit_nbinom.svg?style=flat
   :alt:   (downloads)
.. |docker_fit_nbinom| image:: https://quay.io/repository/biocontainers/fit_nbinom/status
   :target: https://quay.io/repository/biocontainers/fit_nbinom
.. _`fit_nbinom/tags`: https://quay.io/repository/biocontainers/fit_nbinom?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fit_nbinom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fit_nbinom/README.html