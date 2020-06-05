:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioblend'
.. highlight: bash

bioblend
========

.. conda:recipe:: bioblend
   :replaces_section_title:
   :noindex:

   CloudMan and Galaxy API library

   :homepage: http://bioblend.readthedocs.org/
   :license: MIT / MIT License
   :recipe: /`bioblend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioblend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioblend/meta.yaml>`_

   


.. conda:package:: bioblend

   |downloads_bioblend| |docker_bioblend|

   :versions:
      
      

      ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.8.0-0``,  ``0.7.0-1``,  ``0.7.0-0``

      

   
   :depends boto: ``>=2.9.7``
   :depends python: 
   :depends pyyaml: 
   :depends requests: ``>=2.20.0``
   :depends requests-toolbelt: ``>=0.5.1,!=0.9.0``
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioblend

   and update with::

      conda update bioblend

   or use the docker container::

      docker pull quay.io/biocontainers/bioblend:<tag>

   (see `bioblend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioblend| image:: https://img.shields.io/conda/dn/bioconda/bioblend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioblend
   :alt:   (downloads)
.. |docker_bioblend| image:: https://quay.io/repository/biocontainers/bioblend/status
   :target: https://quay.io/repository/biocontainers/bioblend
.. _`bioblend/tags`: https://quay.io/repository/biocontainers/bioblend?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioblend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioblend/README.html