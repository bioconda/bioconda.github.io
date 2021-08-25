:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circexplorer2'
.. highlight: bash

circexplorer2
=============

.. conda:recipe:: circexplorer2
   :replaces_section_title:
   :noindex:

   Circular RNA analysis toolkits

   :homepage: https://github.com/YangLab/CIRCexplorer2
   :license: MIT License
   :recipe: /`circexplorer2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer2/meta.yaml>`_

   


.. conda:package:: circexplorer2

   |downloads_circexplorer2| |docker_circexplorer2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.8-1</code>,  <code>2.3.8-0</code>,  <code>2.3.6-0</code>,  <code>2.3.5-0</code>,  <code>2.3.3-2</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  </span></summary>
      

      ``2.3.8-1``,  ``2.3.8-0``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.3-2``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-1``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends docopt: 
   :depends pybedtools: 
   :depends pysam: ``>=0.8.4``
   :depends python: 
   :depends requests: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circexplorer2

   and update with::

      conda update circexplorer2

   or use the docker container::

      docker pull quay.io/biocontainers/circexplorer2:<tag>

   (see `circexplorer2/tags`_ for valid values for ``<tag>``)


.. |downloads_circexplorer2| image:: https://img.shields.io/conda/dn/bioconda/circexplorer2.svg?style=flat
   :target: https://anaconda.org/bioconda/circexplorer2
   :alt:   (downloads)
.. |docker_circexplorer2| image:: https://quay.io/repository/biocontainers/circexplorer2/status
   :target: https://quay.io/repository/biocontainers/circexplorer2
.. _`circexplorer2/tags`: https://quay.io/repository/biocontainers/circexplorer2?tab=tags


.. raw:: html

    <script>
        var package = "circexplorer2";
        var versions = ["2.3.8","2.3.8","2.3.6","2.3.5","2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circexplorer2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circexplorer2/README.html