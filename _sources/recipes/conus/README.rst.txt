:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conus'
.. highlight: bash

conus
=====

.. conda:recipe:: conus
   :replaces_section_title:
   :noindex:

   CONUS is an implementation of simple stochastic context\-free grammars for RNA secondary structure analysis.CONUS developed for exploring the consequences of different single sequence SCFG designs in predicting RNA secondary structure.

   :homepage: http://eddylab.org/software/conus/
   :license: file
   :recipe: /`conus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conus/meta.yaml>`_
   :links: biotools: :biotools:`CONUS`, doi: :doi:`10.1186/1471-2105-5-71`

   


.. conda:package:: conus

   |downloads_conus| |docker_conus|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install conus

   and update with::

      conda update conus

   or use the docker container::

      docker pull quay.io/biocontainers/conus:<tag>

   (see `conus/tags`_ for valid values for ``<tag>``)


.. |downloads_conus| image:: https://img.shields.io/conda/dn/bioconda/conus.svg?style=flat
   :target: https://anaconda.org/bioconda/conus
   :alt:   (downloads)
.. |docker_conus| image:: https://quay.io/repository/biocontainers/conus/status
   :target: https://quay.io/repository/biocontainers/conus
.. _`conus/tags`: https://quay.io/repository/biocontainers/conus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conus/README.html