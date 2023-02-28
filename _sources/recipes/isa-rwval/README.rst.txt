:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isa-rwval'
.. highlight: bash

isa-rwval
=========

.. conda:recipe:: isa-rwval
   :replaces_section_title:
   :noindex:

   ISA metadata tracking tools

   :homepage: https://github.com/ISA-tools/isa-rwval
   :license: CPAL
   :recipe: /`isa-rwval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isa-rwval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isa-rwval/meta.yaml>`_

   


.. conda:package:: isa-rwval

   |downloads_isa-rwval| |docker_isa-rwval|

   :versions:
      
      

      ``0.10.9-0``

      

   
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5``
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install isa-rwval

   and update with::

      conda update isa-rwval

   or use the docker container::

      docker pull quay.io/biocontainers/isa-rwval:<tag>

   (see `isa-rwval/tags`_ for valid values for ``<tag>``)


.. |downloads_isa-rwval| image:: https://img.shields.io/conda/dn/bioconda/isa-rwval.svg?style=flat
   :target: https://anaconda.org/bioconda/isa-rwval
   :alt:   (downloads)
.. |docker_isa-rwval| image:: https://quay.io/repository/biocontainers/isa-rwval/status
   :target: https://quay.io/repository/biocontainers/isa-rwval
.. _`isa-rwval/tags`: https://quay.io/repository/biocontainers/isa-rwval?tab=tags


.. raw:: html

    <script>
        var package = "isa-rwval";
        var versions = ["0.10.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isa-rwval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isa-rwval/README.html