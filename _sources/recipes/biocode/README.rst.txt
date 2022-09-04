:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocode'
.. highlight: bash

biocode
=======

.. conda:recipe:: biocode
   :replaces_section_title:
   :noindex:

   Bioinformatics code libraries and scripts

   :homepage: http://github.com/jorvis/biocode
   :license: MIT / MIT
   :recipe: /`biocode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocode/meta.yaml>`_

   


.. conda:package:: biocode

   |downloads_biocode| |docker_biocode|

   :versions:
      
      

      ``0.10.0-0``

      

   
   :depends biopython: 
   :depends jinja2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends python-igraph: 
   :depends taxadb: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biocode

   and update with::

      conda update biocode

   or use the docker container::

      docker pull quay.io/biocontainers/biocode:<tag>

   (see `biocode/tags`_ for valid values for ``<tag>``)


.. |downloads_biocode| image:: https://img.shields.io/conda/dn/bioconda/biocode.svg?style=flat
   :target: https://anaconda.org/bioconda/biocode
   :alt:   (downloads)
.. |docker_biocode| image:: https://quay.io/repository/biocontainers/biocode/status
   :target: https://quay.io/repository/biocontainers/biocode
.. _`biocode/tags`: https://quay.io/repository/biocontainers/biocode?tab=tags


.. raw:: html

    <script>
        var package = "biocode";
        var versions = ["0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocode/README.html