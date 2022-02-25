:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splicemap'
.. highlight: bash

splicemap
=========

.. conda:recipe:: splicemap
   :replaces_section_title:
   :noindex:

   Detects splice junctions from RNA\-seq data. This method does not depend on any existing annotation of gene structures and is capable of finding novel splice junctions with high sensitivity and specificity. It can handle long reads \(50–100 nt\) and can exploit paired\-read information to improve mapping accuracy.

   :homepage: http://www.stanford.edu/group/wonglab/SpliceMap/
   :license: file
   :recipe: /`splicemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splicemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splicemap/meta.yaml>`_
   :links: biotools: :biotools:`splicemap`, doi: :doi:`10.1093/nar/gkq211`

   


.. conda:package:: splicemap

   |downloads_splicemap| |docker_splicemap|

   :versions:
      
      

      ``3.3.5.2-4``,  ``3.3.5.2-3``,  ``3.3.5.2-2``,  ``3.3.5.2-1``,  ``3.3.5.2-0``

      

   
   :depends bowtie: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install splicemap

   and update with::

      conda update splicemap

   or use the docker container::

      docker pull quay.io/biocontainers/splicemap:<tag>

   (see `splicemap/tags`_ for valid values for ``<tag>``)


.. |downloads_splicemap| image:: https://img.shields.io/conda/dn/bioconda/splicemap.svg?style=flat
   :target: https://anaconda.org/bioconda/splicemap
   :alt:   (downloads)
.. |docker_splicemap| image:: https://quay.io/repository/biocontainers/splicemap/status
   :target: https://quay.io/repository/biocontainers/splicemap
.. _`splicemap/tags`: https://quay.io/repository/biocontainers/splicemap?tab=tags


.. raw:: html

    <script>
        var package = "splicemap";
        var versions = ["3.3.5.2","3.3.5.2","3.3.5.2","3.3.5.2","3.3.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splicemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splicemap/README.html