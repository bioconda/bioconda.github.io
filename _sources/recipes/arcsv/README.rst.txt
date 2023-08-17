:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arcsv'
.. highlight: bash

arcsv
=====

.. conda:recipe:: arcsv
   :replaces_section_title:
   :noindex:

   A pipeline to detect SV in archaic human

   :homepage: https://github.com/xuxif/ArcSV
   :license: GPL-3.0
   :recipe: /`arcsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcsv/meta.yaml>`_

   


.. conda:package:: arcsv

   |downloads_arcsv| |docker_arcsv|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bcftools: 
   :depends bedtools: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arcsv

   and update with::

      conda update arcsv

   or use the docker container::

      docker pull quay.io/biocontainers/arcsv:<tag>

   (see `arcsv/tags`_ for valid values for ``<tag>``)


.. |downloads_arcsv| image:: https://img.shields.io/conda/dn/bioconda/arcsv.svg?style=flat
   :target: https://anaconda.org/bioconda/arcsv
   :alt:   (downloads)
.. |docker_arcsv| image:: https://quay.io/repository/biocontainers/arcsv/status
   :target: https://quay.io/repository/biocontainers/arcsv
.. _`arcsv/tags`: https://quay.io/repository/biocontainers/arcsv?tab=tags


.. raw:: html

    <script>
        var package = "arcsv";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arcsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arcsv/README.html