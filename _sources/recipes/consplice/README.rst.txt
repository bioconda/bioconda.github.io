:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consplice'
.. highlight: bash

consplice
=========

.. conda:recipe:: consplice
   :replaces_section_title:
   :noindex:

   The Constrained Splicing \(ConSplice\) python module

   :homepage: https://github.com/mikecormier/ConSplice
   :license: MIT
   :recipe: /`consplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consplice/meta.yaml>`_

   ConSplice is a python module used to \(1\) model the splicing constraint in the human genome\, and \(2\) an ensembl machine learning metric to score genetic variants for pathogenic splicing.


.. conda:package:: consplice

   |downloads_consplice| |docker_consplice|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends bcftools: 
   :depends biopython: 
   :depends cyvcf2: 
   :depends gsort: 
   :depends gsort: ``>=0.1.4``
   :depends htslib: 
   :depends interlap: 
   :depends ncls: ``0.0.53.*``
   :depends numpy: 
   :depends pandas: 
   :depends pyfaidx: 
   :depends pyranges: ``0.0.92.*``
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install consplice

   and update with::

      conda update consplice

   or use the docker container::

      docker pull quay.io/biocontainers/consplice:<tag>

   (see `consplice/tags`_ for valid values for ``<tag>``)


.. |downloads_consplice| image:: https://img.shields.io/conda/dn/bioconda/consplice.svg?style=flat
   :target: https://anaconda.org/bioconda/consplice
   :alt:   (downloads)
.. |docker_consplice| image:: https://quay.io/repository/biocontainers/consplice/status
   :target: https://quay.io/repository/biocontainers/consplice
.. _`consplice/tags`: https://quay.io/repository/biocontainers/consplice?tab=tags


.. raw:: html

    <script>
        var package = "consplice";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consplice/README.html