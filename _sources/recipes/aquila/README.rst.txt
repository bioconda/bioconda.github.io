:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquila'
.. highlight: bash

aquila
======

.. conda:recipe:: aquila
   :replaces_section_title:
   :noindex:

   Diploid personal genome assembly and comprehensive variant detection based on linked\-reads

   :homepage: https://github.com/maiziex/Aquila
   :license: MIT
   :recipe: /`aquila <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila/meta.yaml>`_

   


.. conda:package:: aquila

   |downloads_aquila| |docker_aquila|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends minimap2: 
   :depends numpy: 
   :depends pysam: ``>=0.15.2``
   :depends python: ``>=3``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aquila

   and update with::

      conda update aquila

   or use the docker container::

      docker pull quay.io/biocontainers/aquila:<tag>

   (see `aquila/tags`_ for valid values for ``<tag>``)


.. |downloads_aquila| image:: https://img.shields.io/conda/dn/bioconda/aquila.svg?style=flat
   :target: https://anaconda.org/bioconda/aquila
   :alt:   (downloads)
.. |docker_aquila| image:: https://quay.io/repository/biocontainers/aquila/status
   :target: https://quay.io/repository/biocontainers/aquila
.. _`aquila/tags`: https://quay.io/repository/biocontainers/aquila?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquila/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquila/README.html