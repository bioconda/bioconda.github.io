:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genoflu'
.. highlight: bash

genoflu
=======

.. conda:recipe:: genoflu
   :replaces_section_title:
   :noindex:

   Influenza data pipeline to automate genotyping assignment.

   :homepage: https://github.com/USDA-VS/GenoFLU
   :license: GPL3
   :recipe: /`genoflu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoflu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoflu/meta.yaml>`_

   


.. conda:package:: genoflu

   |downloads_genoflu| |docker_genoflu|

   :versions:
      
      

      ``1.01-0``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genoflu

   and update with::

      conda update genoflu

   or use the docker container::

      docker pull quay.io/biocontainers/genoflu:<tag>

   (see `genoflu/tags`_ for valid values for ``<tag>``)


.. |downloads_genoflu| image:: https://img.shields.io/conda/dn/bioconda/genoflu.svg?style=flat
   :target: https://anaconda.org/bioconda/genoflu
   :alt:   (downloads)
.. |docker_genoflu| image:: https://quay.io/repository/biocontainers/genoflu/status
   :target: https://quay.io/repository/biocontainers/genoflu
.. _`genoflu/tags`: https://quay.io/repository/biocontainers/genoflu?tab=tags


.. raw:: html

    <script>
        var package = "genoflu";
        var versions = ["1.01","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genoflu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genoflu/README.html