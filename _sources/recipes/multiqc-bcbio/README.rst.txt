:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc-bcbio'
.. highlight: bash

multiqc-bcbio
=============

.. conda:recipe:: multiqc-bcbio
   :replaces_section_title:
   :noindex:

   MultiQC plugin for bcbio report visualization.

   :homepage: http://multiqc.info
   :license: GPL3
   :recipe: /`multiqc-bcbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc-bcbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc-bcbio/meta.yaml>`_

   


.. conda:package:: multiqc-bcbio

   |downloads_multiqc-bcbio| |docker_multiqc-bcbio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.9-0</code>,  <code>0.2.8-1</code>,  <code>0.2.8-0</code>,  <code>0.2.6-4</code>,  <code>0.2.6-3</code>,  <code>0.2.6-2</code>,  <code>0.2.6-0</code>,  <code>0.2.5-1</code>,  <code>0.2.5-0</code>,  </span></summary>
      

      ``0.2.9-0``,  ``0.2.8-1``,  ``0.2.8-0``,  ``0.2.6-4``,  ``0.2.6-3``,  ``0.2.6-2``,  ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.2.0dev-4``,  ``0.2.0dev-3``,  ``0.2.0dev-2``,  ``0.2.0dev-1``,  ``0.2.0dev-0``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-1``,  ``0.1.3-1``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.1-1``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends multiqc: ``>=1.2``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multiqc-bcbio

   and update with::

      conda update multiqc-bcbio

   or use the docker container::

      docker pull quay.io/biocontainers/multiqc-bcbio:<tag>

   (see `multiqc-bcbio/tags`_ for valid values for ``<tag>``)


.. |downloads_multiqc-bcbio| image:: https://img.shields.io/conda/dn/bioconda/multiqc-bcbio.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc-bcbio
   :alt:   (downloads)
.. |docker_multiqc-bcbio| image:: https://quay.io/repository/biocontainers/multiqc-bcbio/status
   :target: https://quay.io/repository/biocontainers/multiqc-bcbio
.. _`multiqc-bcbio/tags`: https://quay.io/repository/biocontainers/multiqc-bcbio?tab=tags


.. raw:: html

    <script>
        var package = "multiqc-bcbio";
        var versions = ["0.2.9","0.2.8","0.2.8","0.2.6","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc-bcbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc-bcbio/README.html