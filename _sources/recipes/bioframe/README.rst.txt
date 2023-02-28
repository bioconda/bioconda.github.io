:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioframe'
.. highlight: bash

bioframe
========

.. conda:recipe:: bioframe
   :replaces_section_title:
   :noindex:

   Pandas utilities for tab\-delimited and other genomic files

   :homepage: https://github.com/mirnylab/bioframe
   :documentation: https://bioframe.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`bioframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioframe/meta.yaml>`_

   


.. conda:package:: bioframe

   |downloads_bioframe| |docker_bioframe|

   :versions:
      
      

      ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.12-0``

      

   
   :depends cytoolz: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.9``
   :depends pairix: 
   :depends pandas: ``>=0.17``
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends requests: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioframe

   and update with::

      conda update bioframe

   or use the docker container::

      docker pull quay.io/biocontainers/bioframe:<tag>

   (see `bioframe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioframe| image:: https://img.shields.io/conda/dn/bioconda/bioframe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioframe
   :alt:   (downloads)
.. |docker_bioframe| image:: https://quay.io/repository/biocontainers/bioframe/status
   :target: https://quay.io/repository/biocontainers/bioframe
.. _`bioframe/tags`: https://quay.io/repository/biocontainers/bioframe?tab=tags


.. raw:: html

    <script>
        var package = "bioframe";
        var versions = ["0.3.3","0.3.2","0.3.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioframe/README.html