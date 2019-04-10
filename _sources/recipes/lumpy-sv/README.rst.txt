:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lumpy-sv'
.. highlight: bash

lumpy-sv
========

.. conda:recipe:: lumpy-sv
   :replaces_section_title:

   a general probabilistic framework for structural variant discovery

   :homepage: https://github.com/arq5x/lumpy-sv
   :license: MIT
   :recipe: /`lumpy-sv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv/meta.yaml>`_

   


.. conda:package:: lumpy-sv

   |downloads_lumpy-sv| |docker_lumpy-sv|

   :versions: 0.3.0-1, 0.3.0-0, 0.2.14a-2, 0.2.14a-1, 0.2.14a-0, 0.2.13-1, 0.2.13-0, 0.2.12-3, 0.2.12-2, 0.2.12-1, 0.2.12-0, 0.2.11-0
   
   :depends gawk: 
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: 
   :depends pysam: 
   :depends python: 2.7.*
   :depends sambamba: 
   :depends samblaster: 
   :depends samtools: 
   :depends util-linux: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lumpy-sv

   and update with::

      conda update lumpy-sv

   or use the docker container::

      docker pull quay.io/biocontainers/lumpy-sv:<tag>

   (see `lumpy-sv/tags`_ for valid values for ``<tag>``)


.. |downloads_lumpy-sv| image:: https://img.shields.io/conda/dn/bioconda/lumpy-sv.svg?style=flat
   :alt:   (downloads)
.. |docker_lumpy-sv| image:: https://quay.io/repository/biocontainers/lumpy-sv/status
   :target: https://quay.io/repository/biocontainers/lumpy-sv
.. _`lumpy-sv/tags`: https://quay.io/repository/biocontainers/lumpy-sv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lumpy-sv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lumpy-sv/README.html