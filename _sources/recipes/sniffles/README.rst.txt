:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sniffles'
.. highlight: bash

sniffles
========

.. conda:recipe:: sniffles
   :replaces_section_title:
   :noindex:

   Sniffles is a structural variation caller using third generation sequencing \(PacBio or Oxford Nanopore\)

   :homepage: https://github.com/fritzsedlazeck/Sniffles
   :license: MIT / MIT
   :recipe: /`sniffles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sniffles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sniffles/meta.yaml>`_

   


.. conda:package:: sniffles

   |downloads_sniffles| |docker_sniffles|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>1.0.12-1</code>,  <code>1.0.12-0</code>,  <code>1.0.11-1</code>,  <code>1.0.11-0</code>,  </span></summary>
      

      ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``1.0.12-1``,  ``1.0.12-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends pysam: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sniffles

   and update with::

      conda update sniffles

   or use the docker container::

      docker pull quay.io/biocontainers/sniffles:<tag>

   (see `sniffles/tags`_ for valid values for ``<tag>``)


.. |downloads_sniffles| image:: https://img.shields.io/conda/dn/bioconda/sniffles.svg?style=flat
   :target: https://anaconda.org/bioconda/sniffles
   :alt:   (downloads)
.. |docker_sniffles| image:: https://quay.io/repository/biocontainers/sniffles/status
   :target: https://quay.io/repository/biocontainers/sniffles
.. _`sniffles/tags`: https://quay.io/repository/biocontainers/sniffles?tab=tags


.. raw:: html

    <script>
        var package = "sniffles";
        var versions = ["2.0.6","2.0.5","2.0.4","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sniffles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sniffles/README.html