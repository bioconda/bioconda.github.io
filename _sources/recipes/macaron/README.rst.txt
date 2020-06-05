:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macaron'
.. highlight: bash

macaron
=======

.. conda:recipe:: macaron
   :replaces_section_title:
   :noindex:

   Multi\-bAse Codon\-Associated variant Re\-annotatiON

   :homepage: https://github.com/waqasuddinkhan/MACARON-GenMed-LabEx
   :license: LGPL-3
   :recipe: /`macaron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macaron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macaron/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty382`

   


.. conda:package:: macaron

   |downloads_macaron| |docker_macaron|

   :versions:
      
      

      ``1.0-0``,  ``0.7-0``

      

   
   :depends gatk4: 
   :depends python: 
   :depends samtools: 
   :depends snpeff: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install macaron

   and update with::

      conda update macaron

   or use the docker container::

      docker pull quay.io/biocontainers/macaron:<tag>

   (see `macaron/tags`_ for valid values for ``<tag>``)


.. |downloads_macaron| image:: https://img.shields.io/conda/dn/bioconda/macaron.svg?style=flat
   :target: https://anaconda.org/bioconda/macaron
   :alt:   (downloads)
.. |docker_macaron| image:: https://quay.io/repository/biocontainers/macaron/status
   :target: https://quay.io/repository/biocontainers/macaron
.. _`macaron/tags`: https://quay.io/repository/biocontainers/macaron?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macaron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macaron/README.html