:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htseqqc'
.. highlight: bash

htseqqc
=======

.. conda:recipe:: htseqqc
   :replaces_section_title:
   :noindex:

   HTSeqQC is an automated quality control analysis tool for a single and paired\-end high\-throughput sequencing data \(HTS\) generated from Illumina sequencing platforms

   :homepage: https://reneshbedre.github.io/blog/htseqqc.html
   :license: MIT
   :recipe: /`htseqqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseqqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseqqc/meta.yaml>`_

   


.. conda:package:: htseqqc

   |downloads_htseqqc| |docker_htseqqc|

   :versions:
      
      

      ``v1.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends termcolor: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htseqqc

   and update with::

      conda update htseqqc

   or use the docker container::

      docker pull quay.io/biocontainers/htseqqc:<tag>

   (see `htseqqc/tags`_ for valid values for ``<tag>``)


.. |downloads_htseqqc| image:: https://img.shields.io/conda/dn/bioconda/htseqqc.svg?style=flat
   :target: https://anaconda.org/bioconda/htseqqc
   :alt:   (downloads)
.. |docker_htseqqc| image:: https://quay.io/repository/biocontainers/htseqqc/status
   :target: https://quay.io/repository/biocontainers/htseqqc
.. _`htseqqc/tags`: https://quay.io/repository/biocontainers/htseqqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htseqqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htseqqc/README.html