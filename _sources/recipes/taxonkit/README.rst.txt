:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxonkit'
.. highlight: bash

taxonkit
========

.. conda:recipe:: taxonkit
   :replaces_section_title:

   A cross\-platform and Efficient NCBI Taxonomy Toolkit

   :homepage: https://github.com/shenwei356/taxonkit
   :license: MIT
   :recipe: /`taxonkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonkit/meta.yaml>`_

   


.. conda:package:: taxonkit

   |downloads_taxonkit| |docker_taxonkit|

   :versions: 0.3.0-1, 0.2.5-1, 0.2.4-1, 0.2.4-0, 0.2.0-0, 0.1.8-0, 0.1.7-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxonkit

   and update with::

      conda update taxonkit

   or use the docker container::

      docker pull quay.io/biocontainers/taxonkit:<tag>

   (see `taxonkit/tags`_ for valid values for ``<tag>``)


.. |downloads_taxonkit| image:: https://img.shields.io/conda/dn/bioconda/taxonkit.svg?style=flat
   :target: https://anaconda.org/bioconda/taxonkit
   :alt:   (downloads)
.. |docker_taxonkit| image:: https://quay.io/repository/biocontainers/taxonkit/status
   :target: https://quay.io/repository/biocontainers/taxonkit
.. _`taxonkit/tags`: https://quay.io/repository/biocontainers/taxonkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxonkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxonkit/README.html