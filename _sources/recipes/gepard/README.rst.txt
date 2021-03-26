:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gepard'
.. highlight: bash

gepard
======

.. conda:recipe:: gepard
   :replaces_section_title:
   :noindex:

   Genome Pair Rapid Dotter \(gepard\).

   :homepage: https://cube.univie.ac.at/gepard
   :developer docs: https://github.com/univieCUBE/gepard
   :license: MIT
   :recipe: /`gepard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gepard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gepard/meta.yaml>`_

   


.. conda:package:: gepard

   |downloads_gepard| |docker_gepard|

   :versions:
      
      

      ``1.40.0-1``,  ``1.40.0-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gepard

   and update with::

      conda update gepard

   or use the docker container::

      docker pull quay.io/biocontainers/gepard:<tag>

   (see `gepard/tags`_ for valid values for ``<tag>``)


.. |downloads_gepard| image:: https://img.shields.io/conda/dn/bioconda/gepard.svg?style=flat
   :target: https://anaconda.org/bioconda/gepard
   :alt:   (downloads)
.. |docker_gepard| image:: https://quay.io/repository/biocontainers/gepard/status
   :target: https://quay.io/repository/biocontainers/gepard
.. _`gepard/tags`: https://quay.io/repository/biocontainers/gepard?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gepard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gepard/README.html