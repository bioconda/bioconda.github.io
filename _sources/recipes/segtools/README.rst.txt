:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segtools'
.. highlight: bash

segtools
========

.. conda:recipe:: segtools
   :replaces_section_title:
   :noindex:

   a python package for analyzing genomic segmentations

   :homepage: http://segtools.hoffmanlab.org/
   :license: GPL2
   :recipe: /`segtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segtools/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-12-415`

   


.. conda:package:: segtools

   |downloads_segtools| |docker_segtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.1.14-2</code>,  <code>1.1.14-1</code>,  </span></summary>
      

      ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.14-2``,  ``1.1.14-1``,  ``1.1.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends genomedata: 
   :depends gmtk: 
   :depends graphviz: 
   :depends numpy: 
   :depends pygraphviz: 
   :depends python: 
   :depends r-base: 
   :depends r-cairo: 
   :depends r-cluster: 
   :depends r-latticeextra: 
   :depends r-reshape2: 
   :depends rpy2: ``>=2.6.0``
   :depends textinput: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segtools

   and update with::

      conda update segtools

   or use the docker container::

      docker pull quay.io/biocontainers/segtools:<tag>

   (see `segtools/tags`_ for valid values for ``<tag>``)


.. |downloads_segtools| image:: https://img.shields.io/conda/dn/bioconda/segtools.svg?style=flat
   :target: https://anaconda.org/bioconda/segtools
   :alt:   (downloads)
.. |docker_segtools| image:: https://quay.io/repository/biocontainers/segtools/status
   :target: https://quay.io/repository/biocontainers/segtools
.. _`segtools/tags`: https://quay.io/repository/biocontainers/segtools?tab=tags


.. raw:: html

    <script>
        var package = "segtools";
        var versions = ["1.2.4","1.2.4","1.2.3","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segtools/README.html