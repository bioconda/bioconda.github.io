:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssuissero'
.. highlight: bash

ssuissero
=========

.. conda:recipe:: ssuissero
   :replaces_section_title:
   :noindex:

   Rapid Streptococcus suis serotyping pipeline for Nanopore Data

   :homepage: https://github.com/jimmyliu1326/SsuisSero
   :license: MIT
   :recipe: /`ssuissero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssuissero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssuissero/meta.yaml>`_

   


.. conda:package:: ssuissero

   |downloads_ssuissero| |docker_ssuissero|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends blast: 
   :depends freebayes: 
   :depends medaka: ``1.0.1``
   :depends miniasm: 
   :depends minipolish: 
   :depends samtools: 
   :depends vcflib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ssuissero

   and update with::

      conda update ssuissero

   or use the docker container::

      docker pull quay.io/biocontainers/ssuissero:<tag>

   (see `ssuissero/tags`_ for valid values for ``<tag>``)


.. |downloads_ssuissero| image:: https://img.shields.io/conda/dn/bioconda/ssuissero.svg?style=flat
   :target: https://anaconda.org/bioconda/ssuissero
   :alt:   (downloads)
.. |docker_ssuissero| image:: https://quay.io/repository/biocontainers/ssuissero/status
   :target: https://quay.io/repository/biocontainers/ssuissero
.. _`ssuissero/tags`: https://quay.io/repository/biocontainers/ssuissero?tab=tags


.. raw:: html

    <script>
        var package = "ssuissero";
        var versions = ["1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssuissero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssuissero/README.html