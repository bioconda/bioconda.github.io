:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnaweaver'
.. highlight: bash

dnaweaver
=========

.. conda:recipe:: dnaweaver
   :replaces_section_title:
   :noindex:

   Python library to find optimal strategies for assembling large DNA constructs.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaWeaver/
   :license: MIT
   :recipe: /`dnaweaver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaweaver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaweaver/meta.yaml>`_

   


.. conda:package:: dnaweaver

   |downloads_dnaweaver| |docker_dnaweaver|

   :versions:
      
      

      ``v0.3.7-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends dna_features_viewer: 
   :depends dnachisel: 
   :depends flametree: 
   :depends jinja2: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends proglog: 
   :depends python: ``>=3.6``
   :depends weasyprint: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnaweaver

   and update with::

      conda update dnaweaver

   or use the docker container::

      docker pull quay.io/biocontainers/dnaweaver:<tag>

   (see `dnaweaver/tags`_ for valid values for ``<tag>``)


.. |downloads_dnaweaver| image:: https://img.shields.io/conda/dn/bioconda/dnaweaver.svg?style=flat
   :target: https://anaconda.org/bioconda/dnaweaver
   :alt:   (downloads)
.. |docker_dnaweaver| image:: https://quay.io/repository/biocontainers/dnaweaver/status
   :target: https://quay.io/repository/biocontainers/dnaweaver
.. _`dnaweaver/tags`: https://quay.io/repository/biocontainers/dnaweaver?tab=tags


.. raw:: html

    <script>
        var package = "dnaweaver";
        var versions = ["v0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnaweaver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnaweaver/README.html