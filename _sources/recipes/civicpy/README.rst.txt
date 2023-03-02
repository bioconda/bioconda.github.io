:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'civicpy'
.. highlight: bash

civicpy
=======

.. conda:recipe:: civicpy
   :replaces_section_title:
   :noindex:

   CIViC variant knowledgebase analysis toolkit.

   :homepage: http://civicpy.org
   :documentation: https://docs.civicpy.org/en/latest/
   
   :developer docs: https://github.com/griffithlab/civicpy
   :license: MIT / MIT
   :recipe: /`civicpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/civicpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/civicpy/meta.yaml>`_

   


.. conda:package:: civicpy

   |downloads_civicpy| |docker_civicpy|

   :versions:
      
      

      ``3.0.0-0``

      

   
   :depends backports-datetime-fromisoformat: ``2.0.0.*``
   :depends click: 
   :depends deprecation: 
   :depends networkx: 
   :depends obonet: ``0.2.3.*``
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends requests: 
   :depends vcfpy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install civicpy

   and update with::

      conda update civicpy

   or use the docker container::

      docker pull quay.io/biocontainers/civicpy:<tag>

   (see `civicpy/tags`_ for valid values for ``<tag>``)


.. |downloads_civicpy| image:: https://img.shields.io/conda/dn/bioconda/civicpy.svg?style=flat
   :target: https://anaconda.org/bioconda/civicpy
   :alt:   (downloads)
.. |docker_civicpy| image:: https://quay.io/repository/biocontainers/civicpy/status
   :target: https://quay.io/repository/biocontainers/civicpy
.. _`civicpy/tags`: https://quay.io/repository/biocontainers/civicpy?tab=tags


.. raw:: html

    <script>
        var package = "civicpy";
        var versions = ["3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/civicpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/civicpy/README.html