:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riassigner'
.. highlight: bash

riassigner
==========

.. conda:recipe:: riassigner
   :replaces_section_title:
   :noindex:

   GC\-MS retention index calculation

   :homepage: https://github.com/RECETOX/RIAssigner
   :license: MIT
   :recipe: /`riassigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riassigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riassigner/meta.yaml>`_

   RIAssigner is a python tool for retention index \(RI\) computation for GC\-MS data



.. conda:package:: riassigner

   |downloads_riassigner| |docker_riassigner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.4-3</code>,  <code>0.3.4-2</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  <code>0.3.3-1</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends matchms: ``>=0.14.0,<0.18.0``
   :depends numpy: 
   :depends pandas: 
   :depends pint: ``>=0.17,<0.20``
   :depends python: ``>=3.7,<3.9``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riassigner

   and update with::

      conda update riassigner

   or use the docker container::

      docker pull quay.io/biocontainers/riassigner:<tag>

   (see `riassigner/tags`_ for valid values for ``<tag>``)


.. |downloads_riassigner| image:: https://img.shields.io/conda/dn/bioconda/riassigner.svg?style=flat
   :target: https://anaconda.org/bioconda/riassigner
   :alt:   (downloads)
.. |docker_riassigner| image:: https://quay.io/repository/biocontainers/riassigner/status
   :target: https://quay.io/repository/biocontainers/riassigner
.. _`riassigner/tags`: https://quay.io/repository/biocontainers/riassigner?tab=tags


.. raw:: html

    <script>
        var package = "riassigner";
        var versions = ["0.3.4","0.3.4","0.3.4","0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riassigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riassigner/README.html