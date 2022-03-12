:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segway'
.. highlight: bash

segway
======

.. conda:recipe:: segway
   :replaces_section_title:
   :noindex:

   a tool for easy pattern discovery and identification in functional genomics data.

   :homepage: http://segway.hoffmanlab.org/
   :license: GPL2
   :recipe: /`segway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segway/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx603`, biotools: :biotools:`segway`

   


.. conda:package:: segway

   |downloads_segway| |docker_segway|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.4-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0-1</code>,  <code>3.0-0</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  <code>2.0.4-1</code>,  </span></summary>
      

      ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0-1``,  ``3.0-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.4.4-0``,  ``1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends autolog: 
   :depends colorbrewer: 
   :depends drmaa: ``>=0.4a3``
   :depends genomedata: 
   :depends gmtk: ``>=1.4.4 hd5b5912_5``
   :depends optbuild: 
   :depends optplus: 
   :depends path.py: 
   :depends python: 
   :depends six: 
   :depends textinput: 
   :depends ucsc-bedtobigbed: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segway

   and update with::

      conda update segway

   or use the docker container::

      docker pull quay.io/biocontainers/segway:<tag>

   (see `segway/tags`_ for valid values for ``<tag>``)


.. |downloads_segway| image:: https://img.shields.io/conda/dn/bioconda/segway.svg?style=flat
   :target: https://anaconda.org/bioconda/segway
   :alt:   (downloads)
.. |docker_segway| image:: https://quay.io/repository/biocontainers/segway/status
   :target: https://quay.io/repository/biocontainers/segway
.. _`segway/tags`: https://quay.io/repository/biocontainers/segway?tab=tags


.. raw:: html

    <script>
        var package = "segway";
        var versions = ["3.0.4","3.0.3","3.0.2","3.0.2","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segway/README.html