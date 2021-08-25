:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wisecondorx'
.. highlight: bash

wisecondorx
===========

.. conda:recipe:: wisecondorx
   :replaces_section_title:
   :noindex:

   WIthin\-SamplE COpy Number aberration DetectOR\, including sex chromosomes

   :homepage: https://github.com/CenterForMedicalGeneticsGhent/wisecondorX
   :license: Attribution-NonCommercial-ShareAlike CC BY-NC-SA
   :recipe: /`wisecondorx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wisecondorx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wisecondorx/meta.yaml>`_

   


.. conda:package:: wisecondorx

   |downloads_wisecondorx| |docker_wisecondorx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-0</code>,  <code>1.2.2-0</code>,  <code>1.2.0-0</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends r-jsonlite: ``>=1.5``
   :depends r-png: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wisecondorx

   and update with::

      conda update wisecondorx

   or use the docker container::

      docker pull quay.io/biocontainers/wisecondorx:<tag>

   (see `wisecondorx/tags`_ for valid values for ``<tag>``)


.. |downloads_wisecondorx| image:: https://img.shields.io/conda/dn/bioconda/wisecondorx.svg?style=flat
   :target: https://anaconda.org/bioconda/wisecondorx
   :alt:   (downloads)
.. |docker_wisecondorx| image:: https://quay.io/repository/biocontainers/wisecondorx/status
   :target: https://quay.io/repository/biocontainers/wisecondorx
.. _`wisecondorx/tags`: https://quay.io/repository/biocontainers/wisecondorx?tab=tags


.. raw:: html

    <script>
        var package = "wisecondorx";
        var versions = ["1.2.4","1.2.2","1.2.0","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wisecondorx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wisecondorx/README.html