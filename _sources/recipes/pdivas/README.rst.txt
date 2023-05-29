:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdivas'
.. highlight: bash

pdivas
======

.. conda:recipe:: pdivas
   :replaces_section_title:
   :noindex:

   PDIVAS\: Pathogenicity predictor of Deep\-Intronic Variants causing Aberrant Splicing

   :homepage: https://github.com/shiro-kur/PDIVAS
   :license: OTHER / MIT
   :recipe: /`pdivas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdivas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdivas/meta.yaml>`_

   


.. conda:package:: pdivas

   |downloads_pdivas| |docker_pdivas|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends cyvcf2: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pdivas

   and update with::

      conda update pdivas

   or use the docker container::

      docker pull quay.io/biocontainers/pdivas:<tag>

   (see `pdivas/tags`_ for valid values for ``<tag>``)


.. |downloads_pdivas| image:: https://img.shields.io/conda/dn/bioconda/pdivas.svg?style=flat
   :target: https://anaconda.org/bioconda/pdivas
   :alt:   (downloads)
.. |docker_pdivas| image:: https://quay.io/repository/biocontainers/pdivas/status
   :target: https://quay.io/repository/biocontainers/pdivas
.. _`pdivas/tags`: https://quay.io/repository/biocontainers/pdivas?tab=tags


.. raw:: html

    <script>
        var package = "pdivas";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdivas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdivas/README.html