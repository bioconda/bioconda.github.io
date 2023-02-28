:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboplot'
.. highlight: bash

riboplot
========

.. conda:recipe:: riboplot
   :replaces_section_title:
   :noindex:

   Plot read counts of RiboSeq data from BAM format alignment files

   :homepage: https://github.com/vimalkvn/riboplot
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`riboplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboplot/meta.yaml>`_

   


.. conda:package:: riboplot

   |downloads_riboplot| |docker_riboplot|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends bedtools: ``<=2.24.0``
   :depends matplotlib: ``<=1.4.3``
   :depends mock: ``1.0.1``
   :depends pysam: ``<=0.8.3``
   :depends python: ``>=2.7,<2.8.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riboplot

   and update with::

      conda update riboplot

   or use the docker container::

      docker pull quay.io/biocontainers/riboplot:<tag>

   (see `riboplot/tags`_ for valid values for ``<tag>``)


.. |downloads_riboplot| image:: https://img.shields.io/conda/dn/bioconda/riboplot.svg?style=flat
   :target: https://anaconda.org/bioconda/riboplot
   :alt:   (downloads)
.. |docker_riboplot| image:: https://quay.io/repository/biocontainers/riboplot/status
   :target: https://quay.io/repository/biocontainers/riboplot
.. _`riboplot/tags`: https://quay.io/repository/biocontainers/riboplot?tab=tags


.. raw:: html

    <script>
        var package = "riboplot";
        var versions = ["0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboplot/README.html