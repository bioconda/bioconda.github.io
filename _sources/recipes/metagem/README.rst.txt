:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagem'
.. highlight: bash

metagem
=======

.. conda:recipe:: metagem
   :replaces_section_title:
   :noindex:

   Generate context specific genome\-scale metabolic models and predict metabolic interactions directly from metagenomic data

   :homepage: https://github.com/franciscozorrilla/metaGEM
   :license: MIT
   :recipe: /`metagem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagem/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkab815`, biotools: :biotools:`metagem`

   


.. conda:package:: metagem

   |downloads_metagem| |docker_metagem|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends bedtools: ``>=2.29.2``
   :depends bwa: ``>=0.7.17``
   :depends concoct: ``>=1.1.0``
   :depends diamond: ``>=2.0.6``
   :depends fastp: ``>=0.20.1``
   :depends gtdbtk: ``>=1.4.0``
   :depends maxbin2: ``>=2.2.7``
   :depends megahit: ``>=1.2.9``
   :depends metabat2: ``>=2.15``
   :depends python: ``>=3.7``
   :depends r-base: ``>=3.5.1``
   :depends r-gridextra: ``>=2.2.1``
   :depends r-tidytext: 
   :depends r-tidyverse: 
   :depends samtools: ``>=1.9``
   :depends snakemake: ``>=5.10.0,<5.31.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metagem

   and update with::

      conda update metagem

   or use the docker container::

      docker pull quay.io/biocontainers/metagem:<tag>

   (see `metagem/tags`_ for valid values for ``<tag>``)


.. |downloads_metagem| image:: https://img.shields.io/conda/dn/bioconda/metagem.svg?style=flat
   :target: https://anaconda.org/bioconda/metagem
   :alt:   (downloads)
.. |docker_metagem| image:: https://quay.io/repository/biocontainers/metagem/status
   :target: https://quay.io/repository/biocontainers/metagem
.. _`metagem/tags`: https://quay.io/repository/biocontainers/metagem?tab=tags


.. raw:: html

    <script>
        var package = "metagem";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagem/README.html