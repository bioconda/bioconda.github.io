:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picard'
.. highlight: bash

picard
======

.. conda:recipe:: picard
   :replaces_section_title:
   :noindex:

   Java tools for working with NGS data in the BAM format

   :homepage: http://broadinstitute.github.io/picard/
   :developer docs: https://github.com/broadinstitute/picard
   :license: MIT / MIT
   :recipe: /`picard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picard/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`picard_MarkDuplicates`

   Java tools for working with NGS data in the BAM format. This package depends on \'r\-base\' because Picard requires R to run some of its metrics commands. The \'picard\-slim\' package offers an  installation of Picard without the  \'r\-base\' dependency. 


.. conda:package:: picard

   |downloads_picard| |docker_picard|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.9-0</code>,  <code>2.26.8-0</code>,  <code>2.26.7-0</code>,  <code>2.26.6-0</code>,  <code>2.26.5-0</code>,  <code>2.26.4-0</code>,  <code>2.26.3-0</code>,  <code>2.26.2-0</code>,  <code>2.26.1-0</code>,  </span></summary>
      

      ``2.26.9-0``,  ``2.26.8-0``,  ``2.26.7-0``,  ``2.26.6-0``,  ``2.26.5-0``,  ``2.26.4-0``,  ``2.26.3-0``,  ``2.26.2-0``,  ``2.26.1-0``,  ``2.26.0-0``,  ``2.25.7-0``,  ``2.25.6-0``,  ``2.25.5-0``,  ``2.25.4-0``,  ``2.25.3-0``,  ``2.25.2-0``,  ``2.25.1-1``,  ``2.25.1-0``,  ``2.25.0-1``,  ``2.25.0-0``,  ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.23.9-0``,  ``2.23.8-0``,  ``2.23.7-0``,  ``2.23.6-0``,  ``2.23.5-0``,  ``2.23.4-0``,  ``2.23.3-0``,  ``2.23.2-0``,  ``2.23.1-0``,  ``2.23.0-0``,  ``2.22.9-0``,  ``2.22.8-0``,  ``2.22.7-0``,  ``2.22.6-0``,  ``2.22.5-0``,  ``2.22.4-0``,  ``2.22.3-0``,  ``2.22.2-0``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.21.9-0``,  ``2.21.8-0``,  ``2.21.7-0``,  ``2.21.6-0``,  ``2.21.5-0``,  ``2.21.4-0``,  ``2.21.3-0``,  ``2.21.2-1``,  ``2.21.2-0``,  ``2.21.1-0``,  ``2.20.8-0``,  ``2.20.7-0``,  ``2.20.6-0``,  ``2.20.5-0``,  ``2.20.4-1``,  ``2.20.4-0``,  ``2.20.3-0``,  ``2.20.2-0``,  ``2.20.1-0``,  ``2.20.0-0``,  ``2.19.2-0``,  ``2.19.1-0``,  ``2.19.0-0``,  ``2.18.29-0``,  ``2.18.27-0``,  ``2.18.26-0``,  ``2.18.25-0``,  ``2.18.23-0``,  ``2.18.22-0``,  ``2.18.21-0``,  ``2.18.20-0``,  ``2.18.17-0``,  ``2.18.16-0``,  ``2.18.15-0``,  ``2.18.14-0``,  ``2.18.13-0``,  ``2.18.12-0``,  ``2.18.11-0``,  ``2.18.10-0``,  ``2.18.9-0``,  ``2.18.7-2``,  ``2.18.7-0``,  ``2.18.6-0``,  ``2.18.5-0``,  ``2.18.4-0``,  ``2.18.3-0``,  ``2.18.2-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.11-0``,  ``2.17.10-0``,  ``2.17.8-0``,  ``2.17.6-0``,  ``2.17.5-0``,  ``2.17.4-0``,  ``2.17.3-0``,  ``2.17.2-0``,  ``2.17.0-0``,  ``2.16.0-0``,  ``2.15.0-0``,  ``2.14.1-0``,  ``2.14-0``,  ``2.13-1``,  ``2.13-0``,  ``2.11.0-0``,  ``2.10.6-0``,  ``2.9.2-2``,  ``2.9.2-1``,  ``2.9.2-0``,  ``2.9.0-0``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.3.0-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.141-6``,  ``1.141-5``,  ``1.141-4``,  ``1.141-3``,  ``1.141-1``,  ``1.141-0``,  ``1.139-0``,  ``1.126-5``,  ``1.126-4``,  ``1.126-3``,  ``1.126-2``,  ``1.97-0``,  ``1.56-1``,  ``1.56-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install picard

   and update with::

      conda update picard

   or use the docker container::

      docker pull quay.io/biocontainers/picard:<tag>

   (see `picard/tags`_ for valid values for ``<tag>``)


.. |downloads_picard| image:: https://img.shields.io/conda/dn/bioconda/picard.svg?style=flat
   :target: https://anaconda.org/bioconda/picard
   :alt:   (downloads)
.. |docker_picard| image:: https://quay.io/repository/biocontainers/picard/status
   :target: https://quay.io/repository/biocontainers/picard
.. _`picard/tags`: https://quay.io/repository/biocontainers/picard?tab=tags


.. raw:: html

    <script>
        var package = "picard";
        var versions = ["2.26.9","2.26.8","2.26.7","2.26.6","2.26.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picard/README.html