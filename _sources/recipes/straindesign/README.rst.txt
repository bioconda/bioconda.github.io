:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'straindesign'
.. highlight: bash

straindesign
============

.. conda:recipe:: straindesign
   :replaces_section_title:
   :noindex:

   Library to perform metabolic engineering tasks

   :homepage: https://github.com/brsynth/straindesign
   :license: MIT
   :recipe: /`straindesign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straindesign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straindesign/meta.yaml>`_

   


.. conda:package:: straindesign

   |downloads_straindesign| |docker_straindesign|

   :versions:
      
      

      ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends biopython: 
   :depends blessings: 
   :depends click: 
   :depends cobra: ``>=0.24``
   :depends escher: 
   :depends future: 
   :depends gnomic: 
   :depends inspyred: 
   :depends iprogress: 
   :depends lazy-object-proxy: 
   :depends markupsafe: 
   :depends networkx: 
   :depends numexpr: 
   :depends numpy: ``<1.24``
   :depends openbabel: 
   :depends openpyxl: 
   :depends optlang: 
   :depends ordered-set: 
   :depends palettable: 
   :depends pandas: 
   :depends plotly: 
   :depends python: 
   :depends redis-py: 
   :depends requests: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install straindesign

   and update with::

      conda update straindesign

   or use the docker container::

      docker pull quay.io/biocontainers/straindesign:<tag>

   (see `straindesign/tags`_ for valid values for ``<tag>``)


.. |downloads_straindesign| image:: https://img.shields.io/conda/dn/bioconda/straindesign.svg?style=flat
   :target: https://anaconda.org/bioconda/straindesign
   :alt:   (downloads)
.. |docker_straindesign| image:: https://quay.io/repository/biocontainers/straindesign/status
   :target: https://quay.io/repository/biocontainers/straindesign
.. _`straindesign/tags`: https://quay.io/repository/biocontainers/straindesign?tab=tags


.. raw:: html

    <script>
        var package = "straindesign";
        var versions = ["3.2.2","3.2.0","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/straindesign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/straindesign/README.html