:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alternativesplicingevents.hg38'
.. highlight: bash

bioconductor-alternativesplicingevents.hg38
===========================================

.. conda:recipe:: bioconductor-alternativesplicingevents.hg38
   :replaces_section_title:
   :noindex:

   Alternative splicing event annotation for Human \(hg38\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/alternativeSplicingEvents.hg38.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alternativesplicingevents.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alternativesplicingevents.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alternativesplicingevents.hg38/meta.yaml>`_

   Data frame containing alternative splicing events. The splicing events were compiled from the annotation files used by the alternative splicing quantification tools MISO\, VAST\-TOOLS\, SUPPA and rMATS.


.. conda:package:: bioconductor-alternativesplicingevents.hg38

   |downloads_bioconductor-alternativesplicingevents.hg38| |docker_bioconductor-alternativesplicingevents.hg38|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  </span></summary>
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alternativesplicingevents.hg38

   and update with::

      conda update bioconductor-alternativesplicingevents.hg38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alternativesplicingevents.hg38:<tag>

   (see `bioconductor-alternativesplicingevents.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alternativesplicingevents.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alternativesplicingevents.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alternativesplicingevents.hg38
   :alt:   (downloads)
.. |docker_bioconductor-alternativesplicingevents.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg38
.. _`bioconductor-alternativesplicingevents.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alternativesplicingevents.hg38";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alternativesplicingevents.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alternativesplicingevents.hg38/README.html