:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wub'
.. highlight: bash

wub
===

.. conda:recipe:: wub
   :replaces_section_title:
   :noindex:

   Tools and software library developed by the ONT Applications group

   :homepage: https://github.com/nanoporetech/wub
   :license: MPL-2.0
   :recipe: /`wub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wub/meta.yaml>`_

   


.. conda:package:: wub

   |downloads_wub| |docker_wub|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.4.0-4</code>,  <code>0.4.0-3</code>,  <code>0.4.0-2</code>,  <code>0.3.1-2</code>,  <code>0.3.0-2</code>,  <code>0.2.0-2</code>,  <code>0.2.0-1</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.4.0-4``,  ``0.4.0-3``,  ``0.4.0-2``,  ``0.3.1-2``,  ``0.3.0-2``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends editdistance: 
   :depends htslib: ``1.1.*``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: ``>=0.20.2``
   :depends pysam: 
   :depends pytest: 
   :depends python: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wub

   and update with::

      conda update wub

   or use the docker container::

      docker pull quay.io/biocontainers/wub:<tag>

   (see `wub/tags`_ for valid values for ``<tag>``)


.. |downloads_wub| image:: https://img.shields.io/conda/dn/bioconda/wub.svg?style=flat
   :target: https://anaconda.org/bioconda/wub
   :alt:   (downloads)
.. |docker_wub| image:: https://quay.io/repository/biocontainers/wub/status
   :target: https://quay.io/repository/biocontainers/wub
.. _`wub/tags`: https://quay.io/repository/biocontainers/wub?tab=tags


.. raw:: html

    <script>
        var package = "wub";
        var versions = ["0.5.1","0.4.0","0.4.0","0.4.0","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wub/README.html