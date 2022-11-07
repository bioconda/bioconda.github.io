:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfpy'
.. highlight: bash

vcfpy
=====

.. conda:recipe:: vcfpy
   :replaces_section_title:
   :noindex:

   Python 3 VCF library with good support for both reading and writing

   :homepage: https://github.com/bihealth/vcfpy
   :license: MIT / MIT
   :recipe: /`vcfpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy/meta.yaml>`_

   


.. conda:package:: vcfpy

   |downloads_vcfpy| |docker_vcfpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.5-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  <code>0.13.0-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-3</code>,  <code>0.11.2-3</code>,  </span></summary>
      

      ``0.13.5-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.0-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-3``,  ``0.11.2-3``,  ``0.11.2-2``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends pysam: ``>=0.10.0``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcfpy

   and update with::

      conda update vcfpy

   or use the docker container::

      docker pull quay.io/biocontainers/vcfpy:<tag>

   (see `vcfpy/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfpy| image:: https://img.shields.io/conda/dn/bioconda/vcfpy.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfpy
   :alt:   (downloads)
.. |docker_vcfpy| image:: https://quay.io/repository/biocontainers/vcfpy/status
   :target: https://quay.io/repository/biocontainers/vcfpy
.. _`vcfpy/tags`: https://quay.io/repository/biocontainers/vcfpy?tab=tags


.. raw:: html

    <script>
        var package = "vcfpy";
        var versions = ["0.13.5","0.13.4","0.13.3","0.13.2","0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfpy/README.html