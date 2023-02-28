:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tapestry'
.. highlight: bash

tapestry
========

.. conda:recipe:: tapestry
   :replaces_section_title:
   :noindex:

   Validate and edit small eukaryotic genome assemblies

   :homepage: https://github.com/johnomics/tapestry
   :license: MIT / MIT
   :recipe: /`tapestry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tapestry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tapestry/meta.yaml>`_

   


.. conda:package:: tapestry

   |downloads_tapestry| |docker_tapestry|

   :versions:
      
      

      ``1.0.0-0``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``

      

   
   :depends biopython: 
   :depends intervaltree: 
   :depends jinja2: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends plumbum: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: 
   :depends sqlalchemy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tapestry

   and update with::

      conda update tapestry

   or use the docker container::

      docker pull quay.io/biocontainers/tapestry:<tag>

   (see `tapestry/tags`_ for valid values for ``<tag>``)


.. |downloads_tapestry| image:: https://img.shields.io/conda/dn/bioconda/tapestry.svg?style=flat
   :target: https://anaconda.org/bioconda/tapestry
   :alt:   (downloads)
.. |docker_tapestry| image:: https://quay.io/repository/biocontainers/tapestry/status
   :target: https://quay.io/repository/biocontainers/tapestry
.. _`tapestry/tags`: https://quay.io/repository/biocontainers/tapestry?tab=tags


.. raw:: html

    <script>
        var package = "tapestry";
        var versions = ["1.0.0","0.9.3","0.9.3","0.9.2","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tapestry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tapestry/README.html