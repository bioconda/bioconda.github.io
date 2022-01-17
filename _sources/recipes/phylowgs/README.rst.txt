:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylowgs'
.. highlight: bash

phylowgs
========

.. conda:recipe:: phylowgs
   :replaces_section_title:
   :noindex:

   Application for inferring subclonal composition and evolution from whole\-genome sequencing data

   :homepage: https://github.com/morrislab/phylowgs
   :license: GPLv3
   :recipe: /`phylowgs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylowgs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylowgs/meta.yaml>`_

   


.. conda:package:: phylowgs

   |downloads_phylowgs| |docker_phylowgs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20181105-6</code>,  <code>20181105-5</code>,  <code>20181105-4</code>,  <code>20181105-3</code>,  <code>20181105-2</code>,  <code>20181105-1</code>,  <code>20181105-0</code>,  <code>20180317-2</code>,  <code>20180317-1</code>,  </span></summary>
      

      ``20181105-6``,  ``20181105-5``,  ``20181105-4``,  ``20181105-3``,  ``20181105-2``,  ``20181105-1``,  ``20181105-0``,  ``20180317-2``,  ``20180317-1``,  ``20180317-0``,  ``20150714-1``

      
      .. raw:: html

         </details>
      

   
   :depends ete2: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends pyvcf: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylowgs

   and update with::

      conda update phylowgs

   or use the docker container::

      docker pull quay.io/biocontainers/phylowgs:<tag>

   (see `phylowgs/tags`_ for valid values for ``<tag>``)


.. |downloads_phylowgs| image:: https://img.shields.io/conda/dn/bioconda/phylowgs.svg?style=flat
   :target: https://anaconda.org/bioconda/phylowgs
   :alt:   (downloads)
.. |docker_phylowgs| image:: https://quay.io/repository/biocontainers/phylowgs/status
   :target: https://quay.io/repository/biocontainers/phylowgs
.. _`phylowgs/tags`: https://quay.io/repository/biocontainers/phylowgs?tab=tags


.. raw:: html

    <script>
        var package = "phylowgs";
        var versions = ["20181105","20181105","20181105","20181105","20181105"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylowgs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylowgs/README.html