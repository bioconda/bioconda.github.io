:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peakhood'
.. highlight: bash

peakhood
========

.. conda:recipe:: peakhood
   :replaces_section_title:
   :noindex:

   Authentic site context extraction for CLIP\-Seq peak regions

   :homepage: https://github.com/BackofenLab/Peakhood
   :license: MIT
   :recipe: /`peakhood <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakhood>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakhood/meta.yaml>`_

   


.. conda:package:: peakhood

   |downloads_peakhood| |docker_peakhood|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends bedtools: 
   :depends markdown: 
   :depends python: ``>=3.8``
   :depends samtools: 
   :depends seaborn: 
   :depends ucsc-twobitinfo: 
   :depends ucsc-twobittofa: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peakhood

   and update with::

      conda update peakhood

   or use the docker container::

      docker pull quay.io/biocontainers/peakhood:<tag>

   (see `peakhood/tags`_ for valid values for ``<tag>``)


.. |downloads_peakhood| image:: https://img.shields.io/conda/dn/bioconda/peakhood.svg?style=flat
   :target: https://anaconda.org/bioconda/peakhood
   :alt:   (downloads)
.. |docker_peakhood| image:: https://quay.io/repository/biocontainers/peakhood/status
   :target: https://quay.io/repository/biocontainers/peakhood
.. _`peakhood/tags`: https://quay.io/repository/biocontainers/peakhood?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakhood/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakhood/README.html