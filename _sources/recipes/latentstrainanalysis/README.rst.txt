:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'latentstrainanalysis'
.. highlight: bash

latentstrainanalysis
====================

.. conda:recipe:: latentstrainanalysis
   :replaces_section_title:
   :noindex:

   Partitioning and analysis methods for large\, complex sequence datasets

   :homepage: https://github.com/brian-cleary/LatentStrainAnalysis
   :license: MIT
   :recipe: /`latentstrainanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/latentstrainanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/latentstrainanalysis/meta.yaml>`_

   LSA was developed as a pre\-assembly tool for partitioning metagenomic reads.
   It uses a hyperplane hashing function and streaming SVD in order to find
   covariance relations between k\-mers. The code\, and the process outline in
   LSFScripts in particular\, have been optimized to scale to massive data
   sets in fixed memory with a highly distributed computing environment.



.. conda:package:: latentstrainanalysis

   |downloads_latentstrainanalysis| |docker_latentstrainanalysis|

   :versions:
      
      

      ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends gensim: 
   :depends numpy: 
   :depends parallel: 
   :depends pyro4: 
   :depends python: ``<3``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install latentstrainanalysis

   and update with::

      conda update latentstrainanalysis

   or use the docker container::

      docker pull quay.io/biocontainers/latentstrainanalysis:<tag>

   (see `latentstrainanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_latentstrainanalysis| image:: https://img.shields.io/conda/dn/bioconda/latentstrainanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/latentstrainanalysis
   :alt:   (downloads)
.. |docker_latentstrainanalysis| image:: https://quay.io/repository/biocontainers/latentstrainanalysis/status
   :target: https://quay.io/repository/biocontainers/latentstrainanalysis
.. _`latentstrainanalysis/tags`: https://quay.io/repository/biocontainers/latentstrainanalysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/latentstrainanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/latentstrainanalysis/README.html