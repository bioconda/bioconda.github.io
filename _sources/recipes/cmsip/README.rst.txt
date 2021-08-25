:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmsip'
.. highlight: bash

cmsip
=====

.. conda:recipe:: cmsip
   :replaces_section_title:
   :noindex:

   A package for detecting differential 5hmC regions from CMS\-IP sequencing data.

   :homepage: https://github.com/lijinbio/cmsip
   :license: MIT / MIT
   :recipe: /`cmsip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmsip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmsip/meta.yaml>`_

   


.. conda:package:: cmsip

   |downloads_cmsip| |docker_cmsip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.3.0-0</code>,  <code>0.0.2.9-0</code>,  <code>0.0.2.8-1</code>,  <code>0.0.2.8-0</code>,  <code>0.0.2.6-0</code>,  <code>0.0.2.3-0</code>,  <code>0.0.2.1-1</code>,  <code>0.0.2.1-0</code>,  <code>0.0.2.0-0</code>,  </span></summary>
      

      ``0.0.3.0-0``,  ``0.0.2.9-0``,  ``0.0.2.8-1``,  ``0.0.2.8-0``,  ``0.0.2.6-0``,  ``0.0.2.3-0``,  ``0.0.2.1-1``,  ``0.0.2.1-0``,  ``0.0.2.0-0``,  ``0.0.1.8-0``,  ``0.0.1.7-0``,  ``0.0.1.4-1``,  ``0.0.1.4-0``,  ``0.0.1.3-0``,  ``0.0.1.2-0``,  ``0.0.1.1.9-0``,  ``0.0.1.1.1-0``,  ``0.0.0.9-0``,  ``0.0.0.6-0``,  ``0.0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-genefilter: 
   :depends gawk: 
   :depends matplotlib-base: 
   :depends moabs: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends r-base: 
   :depends r-desctools: 
   :depends ucsc-fetchchromsizes: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmsip

   and update with::

      conda update cmsip

   or use the docker container::

      docker pull quay.io/biocontainers/cmsip:<tag>

   (see `cmsip/tags`_ for valid values for ``<tag>``)


.. |downloads_cmsip| image:: https://img.shields.io/conda/dn/bioconda/cmsip.svg?style=flat
   :target: https://anaconda.org/bioconda/cmsip
   :alt:   (downloads)
.. |docker_cmsip| image:: https://quay.io/repository/biocontainers/cmsip/status
   :target: https://quay.io/repository/biocontainers/cmsip
.. _`cmsip/tags`: https://quay.io/repository/biocontainers/cmsip?tab=tags


.. raw:: html

    <script>
        var package = "cmsip";
        var versions = ["0.0.3.0","0.0.2.9","0.0.2.8","0.0.2.8","0.0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmsip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmsip/README.html