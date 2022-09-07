:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duplex-tools'
.. highlight: bash

duplex-tools
============

.. conda:recipe:: duplex-tools
   :replaces_section_title:
   :noindex:

   Duplex Tools contains a set of utilities for dealing with ONT Duplex sequencing data

   :homepage: https://github.com/nanoporetech/duplex-tools
   :license: MPL-2.0
   :recipe: /`duplex-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplex-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplex-tools/meta.yaml>`_

   


.. conda:package:: duplex-tools

   |downloads_duplex-tools| |docker_duplex-tools|

   :versions:
      
      

      ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``

      

   
   :depends more-itertools: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends parasail-python: 
   :depends pathlib: 
   :depends pyfastx: 
   :depends pysam: 
   :depends python: 
   :depends python-edlib: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install duplex-tools

   and update with::

      conda update duplex-tools

   or use the docker container::

      docker pull quay.io/biocontainers/duplex-tools:<tag>

   (see `duplex-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_duplex-tools| image:: https://img.shields.io/conda/dn/bioconda/duplex-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/duplex-tools
   :alt:   (downloads)
.. |docker_duplex-tools| image:: https://quay.io/repository/biocontainers/duplex-tools/status
   :target: https://quay.io/repository/biocontainers/duplex-tools
.. _`duplex-tools/tags`: https://quay.io/repository/biocontainers/duplex-tools?tab=tags


.. raw:: html

    <script>
        var package = "duplex-tools";
        var versions = ["0.2.12","0.2.11","0.2.10","0.2.9","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duplex-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duplex-tools/README.html