:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simlord'
.. highlight: bash

simlord
=======

.. conda:recipe:: simlord
   :replaces_section_title:
   :noindex:

   SimLoRD is a read simulator for long reads from third generation sequencing. Currently\, it supports the Pacific Biosciences SMRT error model.

   :homepage: https://bitbucket.org/genomeinformatics/simlord/
   :license: MIT License
   :recipe: /`simlord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simlord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simlord/meta.yaml>`_

   


.. conda:package:: simlord

   |downloads_simlord| |docker_simlord|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.2-2``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.7.3-0``

      

   
   :depends dinopy: 
   :depends numpy: 
   :depends pysam: ``>=0.8.4``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simlord

   and update with::

      conda update simlord

   or use the docker container::

      docker pull quay.io/biocontainers/simlord:<tag>

   (see `simlord/tags`_ for valid values for ``<tag>``)


.. |downloads_simlord| image:: https://img.shields.io/conda/dn/bioconda/simlord.svg?style=flat
   :target: https://anaconda.org/bioconda/simlord
   :alt:   (downloads)
.. |docker_simlord| image:: https://quay.io/repository/biocontainers/simlord/status
   :target: https://quay.io/repository/biocontainers/simlord
.. _`simlord/tags`: https://quay.io/repository/biocontainers/simlord?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simlord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simlord/README.html