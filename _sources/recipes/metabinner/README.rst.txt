:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabinner'
.. highlight: bash

metabinner
==========

.. conda:recipe:: metabinner
   :replaces_section_title:
   :noindex:

   Ensemble binning method to recover individual genomes from complex microbial communities

   :homepage: https://github.com/ziyewang/MetaBinner
   :license: BSD
   :recipe: /`metabinner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinner/meta.yaml>`_

   


.. conda:package:: metabinner

   |downloads_metabinner| |docker_metabinner|

   :versions:
      
      

      ``1.4.3-0``,  ``1.4.2-0``

      

   
   :depends biolib: ``0.1.6.*``
   :depends biopython: ``1.76.*``
   :depends bwa: ``0.7.17.*``
   :depends checkm-genome: ``1.1.3.*``
   :depends click: ``7.1.2.*``
   :depends fraggenescan: ``1.31.*``
   :depends hmmer: ``3.1b2.*``
   :depends numpy: ``1.18.1.*``
   :depends pandas: ``1.0.1.*``
   :depends pplacer: ``1.1.alpha19.*``
   :depends prodigal: ``2.6.3.*``
   :depends python: ``3.7.6.*``
   :depends samtools: ``1.9.*``
   :depends scikit-learn: ``0.22.1.*``
   :depends scipy: ``1.4.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metabinner

   and update with::

      conda update metabinner

   or use the docker container::

      docker pull quay.io/biocontainers/metabinner:<tag>

   (see `metabinner/tags`_ for valid values for ``<tag>``)


.. |downloads_metabinner| image:: https://img.shields.io/conda/dn/bioconda/metabinner.svg?style=flat
   :target: https://anaconda.org/bioconda/metabinner
   :alt:   (downloads)
.. |docker_metabinner| image:: https://quay.io/repository/biocontainers/metabinner/status
   :target: https://quay.io/repository/biocontainers/metabinner
.. _`metabinner/tags`: https://quay.io/repository/biocontainers/metabinner?tab=tags


.. raw:: html

    <script>
        var package = "metabinner";
        var versions = ["1.4.3","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabinner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabinner/README.html