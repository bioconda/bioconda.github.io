:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioprov'
.. highlight: bash

bioprov
=======

.. conda:recipe:: bioprov
   :replaces_section_title:
   :noindex:

   BioProv \- Provenance capture for bioinformatics workflows

   :homepage: https://github.com/vinisalazar/BioProv
   :documentation: https://bioprov.readthedocs.io/
   
   :developer docs: https://github.com/vinisalazar/bioprov
   :license: MIT / MIT
   :recipe: /`bioprov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioprov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioprov/meta.yaml>`_

   


.. conda:package:: bioprov

   |downloads_bioprov| |docker_bioprov|

   :versions:
      
      

      ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.20-0``

      

   
   :depends biopython: 
   :depends coolname: 
   :depends coveralls: 
   :depends dataclasses: 
   :depends pandas: 
   :depends prodigal: 
   :depends prov: 
   :depends provstore-api: 
   :depends pydot: 
   :depends pytest: 
   :depends pytest-cov: 
   :depends python: 
   :depends tinydb: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioprov

   and update with::

      conda update bioprov

   or use the docker container::

      docker pull quay.io/biocontainers/bioprov:<tag>

   (see `bioprov/tags`_ for valid values for ``<tag>``)


.. |downloads_bioprov| image:: https://img.shields.io/conda/dn/bioconda/bioprov.svg?style=flat
   :target: https://anaconda.org/bioconda/bioprov
   :alt:   (downloads)
.. |docker_bioprov| image:: https://quay.io/repository/biocontainers/bioprov/status
   :target: https://quay.io/repository/biocontainers/bioprov
.. _`bioprov/tags`: https://quay.io/repository/biocontainers/bioprov?tab=tags


.. raw:: html

    <script>
        var package = "bioprov";
        var versions = ["0.1.23","0.1.22","0.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioprov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioprov/README.html