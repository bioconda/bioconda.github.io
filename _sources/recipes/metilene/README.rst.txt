:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metilene'
.. highlight: bash

metilene
========

.. conda:recipe:: metilene
   :replaces_section_title:
   :noindex:

   Fast and sensitive detection of differential DNA methylation

   :homepage: http://www.bioinf.uni-leipzig.de/Software/metilene/
   :license: GPLv2
   :recipe: /`metilene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metilene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metilene/meta.yaml>`_

   


.. conda:package:: metilene

   |downloads_metilene| |docker_metilene|

   :versions:
      
      

      ``0.2.8-3``,  ``0.2.8-2``,  ``0.2.8-1``,  ``0.2.8-0``,  ``0.2.6-2``,  ``0.2.6-1``,  ``0.2.6-0``

      

   
   :depends bedtools: ``>=2.24``
   :depends libgcc-ng: ``>=12``
   :depends perl: 
   :depends r-base: 
   :depends r-ggplot2: ``>=2.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metilene

   and update with::

      conda update metilene

   or use the docker container::

      docker pull quay.io/biocontainers/metilene:<tag>

   (see `metilene/tags`_ for valid values for ``<tag>``)


.. |downloads_metilene| image:: https://img.shields.io/conda/dn/bioconda/metilene.svg?style=flat
   :target: https://anaconda.org/bioconda/metilene
   :alt:   (downloads)
.. |docker_metilene| image:: https://quay.io/repository/biocontainers/metilene/status
   :target: https://quay.io/repository/biocontainers/metilene
.. _`metilene/tags`: https://quay.io/repository/biocontainers/metilene?tab=tags


.. raw:: html

    <script>
        var package = "metilene";
        var versions = ["0.2.8","0.2.8","0.2.8","0.2.8","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metilene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metilene/README.html