:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukrep'
.. highlight: bash

eukrep
======

.. conda:recipe:: eukrep
   :replaces_section_title:
   :noindex:

   Classification of Eukaryotic and Prokaryotic sequences from metagenomic datasets

   :homepage: https://github.com/patrickwest/EukRep
   :license: MIT / MIT
   :recipe: /`eukrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukrep/meta.yaml>`_

   


.. conda:package:: eukrep

   |downloads_eukrep| |docker_eukrep|

   :versions:
      
      

      ``0.6.7-1``,  ``0.6.7-0``

      

   
   :depends biopython: 
   :depends kpal: 
   :depends numpy: 
   :depends python: 
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eukrep

   and update with::

      conda update eukrep

   or use the docker container::

      docker pull quay.io/biocontainers/eukrep:<tag>

   (see `eukrep/tags`_ for valid values for ``<tag>``)


.. |downloads_eukrep| image:: https://img.shields.io/conda/dn/bioconda/eukrep.svg?style=flat
   :target: https://anaconda.org/bioconda/eukrep
   :alt:   (downloads)
.. |docker_eukrep| image:: https://quay.io/repository/biocontainers/eukrep/status
   :target: https://quay.io/repository/biocontainers/eukrep
.. _`eukrep/tags`: https://quay.io/repository/biocontainers/eukrep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukrep/README.html