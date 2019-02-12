:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdp_classifier'
.. highlight: bash

rdp_classifier
==============

.. conda:recipe:: rdp_classifier/2.2
   :replaces_section_title:

   Naive Bayesian classifier that can rapidly and accurately provide taxonomic assignments from domain to genus

   :homepage: http://rdp.cme.msu.edu/
   :license: GPLv2
   :recipe: /`rdp_classifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdp_classifier>`_/`2.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdp_classifier/2.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdp_classifier/2.2/meta.yaml>`_

   


.. conda:package:: rdp_classifier

   |downloads_rdp_classifier| |docker_rdp_classifier|

   :versions: 2.2-1, 2.2-0
   
   :depends openjdk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rdp_classifier

   and update with::

      conda update rdp_classifier

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rdp_classifier:<tag>

   (see `rdp_classifier/tags`_ for valid values for ``<tag>``)


.. |downloads_rdp_classifier| image:: https://img.shields.io/conda/dn/bioconda/rdp_classifier.svg?style=flat
   :alt:   (downloads)
.. |docker_rdp_classifier| image:: https://quay.io/repository/biocontainers/rdp_classifier/status
   :target: https://quay.io/repository/biocontainers/rdp_classifier
.. _`rdp_classifier/tags`: https://quay.io/repository/biocontainers/rdp_classifier?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdp_classifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdp_classifier/README.html