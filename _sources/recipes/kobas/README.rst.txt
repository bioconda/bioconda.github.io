:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kobas'
.. highlight: bash

kobas
=====

.. conda:recipe:: kobas
   :replaces_section_title:
   :noindex:

   KEGG Orthology Based Annotation System

   :homepage: http://kobas.cbi.pku.edu.cn
   :license: Biopython License Agreement
   :recipe: /`kobas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kobas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kobas/meta.yaml>`_
   :links: biotools: :biotools:`kobas`

   


.. conda:package:: kobas

   |downloads_kobas| |docker_kobas|

   :versions:
      
      

      ``3.0.3-3``,  ``3.0.3-2``,  ``3.0.3-1``,  ``3.0.3-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends bioconductor-qvalue: 
   :depends biopython: 
   :depends blast: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``<3``
   :depends r-base: 
   :depends rpy2: ``>=2.8.5``
   :depends sqlite: ``>=3.30.1,<4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kobas

   and update with::

      conda update kobas

   or use the docker container::

      docker pull quay.io/biocontainers/kobas:<tag>

   (see `kobas/tags`_ for valid values for ``<tag>``)


.. |downloads_kobas| image:: https://img.shields.io/conda/dn/bioconda/kobas.svg?style=flat
   :target: https://anaconda.org/bioconda/kobas
   :alt:   (downloads)
.. |docker_kobas| image:: https://quay.io/repository/biocontainers/kobas/status
   :target: https://quay.io/repository/biocontainers/kobas
.. _`kobas/tags`: https://quay.io/repository/biocontainers/kobas?tab=tags


.. raw:: html

    <script>
        var package = "kobas";
        var versions = ["3.0.3","3.0.3","3.0.3","3.0.3","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kobas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kobas/README.html