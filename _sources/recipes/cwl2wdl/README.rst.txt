:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cwl2wdl'
.. highlight: bash

cwl2wdl
=======

.. conda:recipe:: cwl2wdl
   :replaces_section_title:
   :noindex:

   Proof of concept converter from Common Workflow Language \(CWL\) to the Broad Institute\'s Workflow Definition Language \(WDL\).

   :homepage: https://github.com/adamstruck/cwl2wdl
   :license: MIT
   :recipe: /`cwl2wdl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cwl2wdl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cwl2wdl/meta.yaml>`_

   


.. conda:package:: cwl2wdl

   |downloads_cwl2wdl| |docker_cwl2wdl|

   :versions:
      
      

      ``0.1dev44-2``,  ``0.1dev44-1``,  ``0.1dev44-0``,  ``0.1dev37-0``

      

   
   :depends python: 
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cwl2wdl

   and update with::

      conda update cwl2wdl

   or use the docker container::

      docker pull quay.io/biocontainers/cwl2wdl:<tag>

   (see `cwl2wdl/tags`_ for valid values for ``<tag>``)


.. |downloads_cwl2wdl| image:: https://img.shields.io/conda/dn/bioconda/cwl2wdl.svg?style=flat
   :target: https://anaconda.org/bioconda/cwl2wdl
   :alt:   (downloads)
.. |docker_cwl2wdl| image:: https://quay.io/repository/biocontainers/cwl2wdl/status
   :target: https://quay.io/repository/biocontainers/cwl2wdl
.. _`cwl2wdl/tags`: https://quay.io/repository/biocontainers/cwl2wdl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cwl2wdl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cwl2wdl/README.html