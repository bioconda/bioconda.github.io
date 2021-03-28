:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbox-scan'
.. highlight: bash

tbox-scan
=========

.. conda:recipe:: tbox-scan
   :replaces_section_title:
   :noindex:

   tbox\-scan is for detecting and classifying T\-boxes in DNA sequences.

   :homepage: https://tbdb.io/
   :license: MIT
   :recipe: /`tbox-scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbox-scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbox-scan/meta.yaml>`_

   


.. conda:package:: tbox-scan

   |downloads_tbox-scan| |docker_tbox-scan|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends biopython: 
   :depends infernal: ``1.1.2.*``
   :depends pandas: 
   :depends perl: 
   :depends python: 
   :depends viennarna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tbox-scan

   and update with::

      conda update tbox-scan

   or use the docker container::

      docker pull quay.io/biocontainers/tbox-scan:<tag>

   (see `tbox-scan/tags`_ for valid values for ``<tag>``)


.. |downloads_tbox-scan| image:: https://img.shields.io/conda/dn/bioconda/tbox-scan.svg?style=flat
   :target: https://anaconda.org/bioconda/tbox-scan
   :alt:   (downloads)
.. |docker_tbox-scan| image:: https://quay.io/repository/biocontainers/tbox-scan/status
   :target: https://quay.io/repository/biocontainers/tbox-scan
.. _`tbox-scan/tags`: https://quay.io/repository/biocontainers/tbox-scan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbox-scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbox-scan/README.html