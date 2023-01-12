:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-chew'
.. highlight: bash

ngs-chew
========

.. conda:recipe:: ngs-chew
   :replaces_section_title:
   :noindex:

   Simple QC and sanity checking of germline NGS data

   :homepage: https://github.com/bihealth/ngs-chew
   :license: MIT / MIT
   :recipe: /`ngs-chew <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-chew>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-chew/meta.yaml>`_

   


.. conda:package:: ngs-chew

   |downloads_ngs-chew| |docker_ngs-chew|

   :versions:
      
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``

      

   
   :depends attrs: 
   :depends bcftools: 
   :depends click: 
   :depends logzero: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends samtools: 
   :depends scipy: 
   :depends tqdm: 
   :depends vcfpy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngs-chew

   and update with::

      conda update ngs-chew

   or use the docker container::

      docker pull quay.io/biocontainers/ngs-chew:<tag>

   (see `ngs-chew/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-chew| image:: https://img.shields.io/conda/dn/bioconda/ngs-chew.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-chew
   :alt:   (downloads)
.. |docker_ngs-chew| image:: https://quay.io/repository/biocontainers/ngs-chew/status
   :target: https://quay.io/repository/biocontainers/ngs-chew
.. _`ngs-chew/tags`: https://quay.io/repository/biocontainers/ngs-chew?tab=tags


.. raw:: html

    <script>
        var package = "ngs-chew";
        var versions = ["0.7.1","0.7.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-chew/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-chew/README.html