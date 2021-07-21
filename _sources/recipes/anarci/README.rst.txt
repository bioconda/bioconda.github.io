:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anarci'
.. highlight: bash

anarci
======

.. conda:recipe:: anarci
   :replaces_section_title:
   :noindex:

   ANARCI\: Antibody Numbering and Antigen Receptor ClassIfication

   :homepage: http://opig.stats.ox.ac.uk/webapps/newsabdab/sabpred/anarci/
   :license: BSD / BSD-3-Clause
   :recipe: /`anarci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anarci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anarci/meta.yaml>`_

   


.. conda:package:: anarci

   |downloads_anarci| |docker_anarci|

   :versions:
      
      

      ``2021.02.04-0``,  ``2020.04.23-3``,  ``2020.04.23-2``,  ``2020.04.23-1``,  ``2020.04.23-0``

      

   
   :depends biopython: 
   :depends hmmer: ``>=3.1``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anarci

   and update with::

      conda update anarci

   or use the docker container::

      docker pull quay.io/biocontainers/anarci:<tag>

   (see `anarci/tags`_ for valid values for ``<tag>``)


.. |downloads_anarci| image:: https://img.shields.io/conda/dn/bioconda/anarci.svg?style=flat
   :target: https://anaconda.org/bioconda/anarci
   :alt:   (downloads)
.. |docker_anarci| image:: https://quay.io/repository/biocontainers/anarci/status
   :target: https://quay.io/repository/biocontainers/anarci
.. _`anarci/tags`: https://quay.io/repository/biocontainers/anarci?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anarci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anarci/README.html