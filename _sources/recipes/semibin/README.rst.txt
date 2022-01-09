:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'semibin'
.. highlight: bash

semibin
=======

.. conda:recipe:: semibin
   :replaces_section_title:
   :noindex:

   Metagenomic binning with semi\-supervised siamese neural network

   :homepage: https://github.com/BigDataBiology/SemiBin
   :license: MIT / MIT
   :recipe: /`semibin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semibin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semibin/meta.yaml>`_

   


.. conda:package:: semibin

   |downloads_semibin| |docker_semibin|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends atomicwrites: 
   :depends bedtools: 
   :depends biopython: 
   :depends fraggenescan: ``1.30.*``
   :depends hmmer: 
   :depends mmseqs2: ``13.45111.*``
   :depends numpy: ``>=1.20``
   :depends pandas: 
   :depends python: 
   :depends python-igraph: 
   :depends pytorch: ``1.8.*``
   :depends pyyaml: 
   :depends requests: 
   :depends scikit-learn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install semibin

   and update with::

      conda update semibin

   or use the docker container::

      docker pull quay.io/biocontainers/semibin:<tag>

   (see `semibin/tags`_ for valid values for ``<tag>``)


.. |downloads_semibin| image:: https://img.shields.io/conda/dn/bioconda/semibin.svg?style=flat
   :target: https://anaconda.org/bioconda/semibin
   :alt:   (downloads)
.. |docker_semibin| image:: https://quay.io/repository/biocontainers/semibin/status
   :target: https://quay.io/repository/biocontainers/semibin
.. _`semibin/tags`: https://quay.io/repository/biocontainers/semibin?tab=tags


.. raw:: html

    <script>
        var package = "semibin";
        var versions = ["0.5.0","0.4.0","0.3","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/semibin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/semibin/README.html