:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alternativesplicingevents.hg19'
.. highlight: bash

bioconductor-alternativesplicingevents.hg19
===========================================

.. conda:recipe:: bioconductor-alternativesplicingevents.hg19
   :replaces_section_title:
   :noindex:

   Alternative splicing event annotation for Human \(hg19\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/alternativeSplicingEvents.hg19.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alternativesplicingevents.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alternativesplicingevents.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alternativesplicingevents.hg19/meta.yaml>`_

   Data frame containing alternative splicing events. The splicing events were compiled from the annotation files used by the alternative splicing quantification tools MISO\, VAST\-TOOLS\, SUPPA and rMATS.


.. conda:package:: bioconductor-alternativesplicingevents.hg19

   |downloads_bioconductor-alternativesplicingevents.hg19| |docker_bioconductor-alternativesplicingevents.hg19|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alternativesplicingevents.hg19

   and update with::

      conda update bioconductor-alternativesplicingevents.hg19

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alternativesplicingevents.hg19:<tag>

   (see `bioconductor-alternativesplicingevents.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alternativesplicingevents.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alternativesplicingevents.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alternativesplicingevents.hg19
   :alt:   (downloads)
.. |docker_bioconductor-alternativesplicingevents.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg19
.. _`bioconductor-alternativesplicingevents.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alternativesplicingevents.hg19";
        var versions = ["1.1.0","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alternativesplicingevents.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alternativesplicingevents.hg19/README.html