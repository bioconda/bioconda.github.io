:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'synapseclient'
.. highlight: bash

synapseclient
=============

.. conda:recipe:: synapseclient
   :replaces_section_title:

   A client for Synapse\, a collaborative compute space  that allows scientists to share and analyze data together.

   :homepage: http://synapse.sagebase.org/
   :license: Apache Software License
   :recipe: /`synapseclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synapseclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synapseclient/meta.yaml>`_

   


.. conda:package:: synapseclient

   |downloads_synapseclient| |docker_synapseclient|

   :versions: 1.7.5-1, 1.7.5-0, 1.7.1-0, 1.6.2-0, 1.5-0
   
   :depends backports.csv: 
   
   :depends future: 
   
   :depends python: 
   
   :depends requests: >=1.2
   
   :depends six: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install synapseclient

   and update with::

      conda update synapseclient

   or use the docker container::

      docker pull quay.io/repository/biocontainers/synapseclient:<tag>

   (see `synapseclient/tags`_ for valid values for ``<tag>``)


.. |downloads_synapseclient| image:: https://img.shields.io/conda/dn/bioconda/synapseclient.svg?style=flat
   :alt:   (downloads)
.. |docker_synapseclient| image:: https://quay.io/repository/biocontainers/synapseclient/status
   :target: https://quay.io/repository/biocontainers/synapseclient
.. _`synapseclient/tags`: https://quay.io/repository/biocontainers/synapseclient?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/synapseclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/synapseclient/README.html