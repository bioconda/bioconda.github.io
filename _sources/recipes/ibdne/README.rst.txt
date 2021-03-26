:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ibdne'
.. highlight: bash

ibdne
=====

.. conda:recipe:: ibdne
   :replaces_section_title:
   :noindex:

   The IBDNe program estimates the historical effective population size of a homogenous population \(from the output of IDBseq\).

   :homepage: http://faculty.washington.edu/browning/ibdne.html
   :license: Apache v2.0
   :recipe: /`ibdne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdne/meta.yaml>`_

   


.. conda:package:: ibdne

   |downloads_ibdne| |docker_ibdne|

   :versions:
      
      

      ``04Sep15.e78-3``,  ``04Sep15.e78-2``,  ``04Sep15.e78-1``,  ``04Sep15.e78-0``

      

   
   :depends openjdk: ``>=6.0.77``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ibdne

   and update with::

      conda update ibdne

   or use the docker container::

      docker pull quay.io/biocontainers/ibdne:<tag>

   (see `ibdne/tags`_ for valid values for ``<tag>``)


.. |downloads_ibdne| image:: https://img.shields.io/conda/dn/bioconda/ibdne.svg?style=flat
   :target: https://anaconda.org/bioconda/ibdne
   :alt:   (downloads)
.. |docker_ibdne| image:: https://quay.io/repository/biocontainers/ibdne/status
   :target: https://quay.io/repository/biocontainers/ibdne
.. _`ibdne/tags`: https://quay.io/repository/biocontainers/ibdne?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ibdne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ibdne/README.html