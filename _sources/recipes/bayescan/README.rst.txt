:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayescan'
.. highlight: bash

bayescan
========

.. conda:recipe:: bayescan
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Randomized Axelerated Maximum Likelihood.

   :homepage: http://cmpg.unibe.ch/software/BayeScan/
   :license: GPL
   :recipe: /`bayescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescan/meta.yaml>`_

   


.. conda:package:: bayescan

   |downloads_bayescan| |docker_bayescan|

   :versions:
      
      

      ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bayescan

   and update with::

      conda update bayescan

   or use the docker container::

      docker pull quay.io/biocontainers/bayescan:<tag>

   (see `bayescan/tags`_ for valid values for ``<tag>``)


.. |downloads_bayescan| image:: https://img.shields.io/conda/dn/bioconda/bayescan.svg?style=flat
   :target: https://anaconda.org/bioconda/bayescan
   :alt:   (downloads)
.. |docker_bayescan| image:: https://quay.io/repository/biocontainers/bayescan/status
   :target: https://quay.io/repository/biocontainers/bayescan
.. _`bayescan/tags`: https://quay.io/repository/biocontainers/bayescan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayescan/README.html