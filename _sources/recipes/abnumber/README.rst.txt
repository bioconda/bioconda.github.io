:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abnumber'
.. highlight: bash

abnumber
========

.. conda:recipe:: abnumber
   :replaces_section_title:
   :noindex:

   AbNumber \- Antibody numbering using ANARCI

   :homepage: https://github.com/prihoda/AbNumber
   :license: MIT / MIT
   :recipe: /`abnumber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abnumber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abnumber/meta.yaml>`_

   


.. conda:package:: abnumber

   |downloads_abnumber| |docker_abnumber|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.1-0``

      

   
   :depends anarci: ``>=2020.04.23``
   :depends biopython: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abnumber

   and update with::

      conda update abnumber

   or use the docker container::

      docker pull quay.io/biocontainers/abnumber:<tag>

   (see `abnumber/tags`_ for valid values for ``<tag>``)


.. |downloads_abnumber| image:: https://img.shields.io/conda/dn/bioconda/abnumber.svg?style=flat
   :target: https://anaconda.org/bioconda/abnumber
   :alt:   (downloads)
.. |docker_abnumber| image:: https://quay.io/repository/biocontainers/abnumber/status
   :target: https://quay.io/repository/biocontainers/abnumber
.. _`abnumber/tags`: https://quay.io/repository/biocontainers/abnumber?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abnumber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abnumber/README.html