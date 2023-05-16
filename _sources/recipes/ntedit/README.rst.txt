:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntedit'
.. highlight: bash

ntedit
======

.. conda:recipe:: ntedit
   :replaces_section_title:
   :noindex:

   ultra fast\, scalable genome assembly polishing and snv detection

   :homepage: https://github.com/bcgsc/ntEdit
   :license: GPL-3.0
   :recipe: /`ntedit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntedit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntedit/meta.yaml>`_

   


.. conda:package:: ntedit

   |downloads_ntedit| |docker_ntedit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.5-4</code>,  <code>1.3.5-3</code>,  <code>1.3.5-2</code>,  <code>1.3.5-1</code>,  <code>1.3.5-0</code>,  <code>1.3.4-1</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  </span></summary>
      

      ``1.3.5-4``,  ``1.3.5-3``,  ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends llvm-openmp: ``>=15.0.7``
   :depends llvm-openmp: ``>=16.0.3``
   :depends nthits: ``0.0.1``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ntedit

   and update with::

      conda update ntedit

   or use the docker container::

      docker pull quay.io/biocontainers/ntedit:<tag>

   (see `ntedit/tags`_ for valid values for ``<tag>``)


.. |downloads_ntedit| image:: https://img.shields.io/conda/dn/bioconda/ntedit.svg?style=flat
   :target: https://anaconda.org/bioconda/ntedit
   :alt:   (downloads)
.. |docker_ntedit| image:: https://quay.io/repository/biocontainers/ntedit/status
   :target: https://quay.io/repository/biocontainers/ntedit
.. _`ntedit/tags`: https://quay.io/repository/biocontainers/ntedit?tab=tags


.. raw:: html

    <script>
        var package = "ntedit";
        var versions = ["1.3.5","1.3.5","1.3.5","1.3.5","1.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntedit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntedit/README.html