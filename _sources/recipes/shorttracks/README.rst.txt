:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shorttracks'
.. highlight: bash

shorttracks
===========

.. conda:recipe:: shorttracks
   :replaces_section_title:
   :noindex:

   ShortTracks \: Useful length\- and strand\-based coverage files \(bigwig\) from small RNA\-seq alignments \(BAM\)

   :homepage: https://github.com/MikeAxtell/ShortTracks
   :license: MIT / MIT
   :recipe: /`shorttracks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorttracks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorttracks/meta.yaml>`_

   


.. conda:package:: shorttracks

   |downloads_shorttracks| |docker_shorttracks|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends python: ``>=3.10``
   :depends samtools: ``>=1.10``
   :depends ucsc-wigtobigwig: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shorttracks

   and update with::

      conda update shorttracks

   or use the docker container::

      docker pull quay.io/biocontainers/shorttracks:<tag>

   (see `shorttracks/tags`_ for valid values for ``<tag>``)


.. |downloads_shorttracks| image:: https://img.shields.io/conda/dn/bioconda/shorttracks.svg?style=flat
   :target: https://anaconda.org/bioconda/shorttracks
   :alt:   (downloads)
.. |docker_shorttracks| image:: https://quay.io/repository/biocontainers/shorttracks/status
   :target: https://quay.io/repository/biocontainers/shorttracks
.. _`shorttracks/tags`: https://quay.io/repository/biocontainers/shorttracks?tab=tags


.. raw:: html

    <script>
        var package = "shorttracks";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shorttracks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shorttracks/README.html