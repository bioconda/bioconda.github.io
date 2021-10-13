:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picard-slim'
.. highlight: bash

picard-slim
===========

.. conda:recipe:: picard-slim
   :replaces_section_title:
   :noindex:

   Java tools for working with NGS data in the BAM format.

   :homepage: http://broadinstitute.github.io/picard/
   :developer docs: https://github.com/broadinstitute/picard
   :license: MIT / MIT
   :recipe: /`picard-slim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picard-slim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picard-slim/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`picard_MarkDuplicates`

   Java tools for working with NGS data in the BAM format. This package lacks the R dependency that is only required for some metrics tasks. This keeps the size of the package smaller\, at the cost of breaking some of Picards\'s commands. The \'picard\' package contains all the necessary dependencies.


.. conda:package:: picard-slim

   |downloads_picard-slim| |docker_picard-slim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.3-0</code>,  <code>2.26.2-0</code>,  <code>2.26.1-0</code>,  <code>2.26.0-0</code>,  <code>2.25.7-0</code>,  <code>2.25.6-0</code>,  <code>2.25.5-0</code>,  <code>2.25.4-0</code>,  <code>2.25.3-0</code>,  </span></summary>
      

      ``2.26.3-0``,  ``2.26.2-0``,  ``2.26.1-0``,  ``2.26.0-0``,  ``2.25.7-0``,  ``2.25.6-0``,  ``2.25.5-0``,  ``2.25.4-0``,  ``2.25.3-0``,  ``2.25.2-0``,  ``2.25.1-1``,  ``2.25.1-0``,  ``2.25.0-1``,  ``2.25.0-0``,  ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.23.9-0``,  ``2.23.8-0``,  ``2.23.7-0``,  ``2.23.6-0``,  ``2.23.5-0``,  ``2.23.4-0``,  ``2.23.3-0``,  ``2.23.2-0``,  ``2.23.1-0``,  ``2.23.0-0``,  ``2.22.9-0``,  ``2.22.8-0``,  ``2.22.7-0``,  ``2.22.6-0``,  ``2.22.5-0``,  ``2.22.4-0``,  ``2.22.3-0``,  ``2.22.2-0``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.21.9-0``,  ``2.21.8-0``,  ``2.21.7-0``,  ``2.21.6-0``,  ``2.21.5-0``,  ``2.21.4-0``,  ``2.21.3-0``,  ``2.21.2-0``,  ``2.21.1-0``,  ``2.20.8-0``,  ``2.20.7-0``,  ``2.20.6-0``,  ``2.20.5-0``,  ``2.20.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install picard-slim

   and update with::

      conda update picard-slim

   or use the docker container::

      docker pull quay.io/biocontainers/picard-slim:<tag>

   (see `picard-slim/tags`_ for valid values for ``<tag>``)


.. |downloads_picard-slim| image:: https://img.shields.io/conda/dn/bioconda/picard-slim.svg?style=flat
   :target: https://anaconda.org/bioconda/picard-slim
   :alt:   (downloads)
.. |docker_picard-slim| image:: https://quay.io/repository/biocontainers/picard-slim/status
   :target: https://quay.io/repository/biocontainers/picard-slim
.. _`picard-slim/tags`: https://quay.io/repository/biocontainers/picard-slim?tab=tags


.. raw:: html

    <script>
        var package = "picard-slim";
        var versions = ["2.26.3","2.26.2","2.26.1","2.26.0","2.25.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picard-slim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picard-slim/README.html