:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kgwasflow'
.. highlight: bash

kgwasflow
=========

.. conda:recipe:: kgwasflow
   :replaces_section_title:
   :noindex:

   kGWASflow is a Snakemake workflow for performing k\-mers\-based GWAS.

   :homepage: https://github.com/akcorut/kGWASflow
   :documentation: https://github.com/akcorut/kGWASflow/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`kgwasflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kgwasflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kgwasflow/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.7860705`

   


.. conda:package:: kgwasflow

   |downloads_kgwasflow| |docker_kgwasflow|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends click: 
   :depends mamba: 
   :depends numpy: ``1.23.5.*``
   :depends pandas: ``1.5.3.*``
   :depends python: ``>=3.10.10``
   :depends snakemake: ``7.25.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kgwasflow

   and update with::

      conda update kgwasflow

   or use the docker container::

      docker pull quay.io/biocontainers/kgwasflow:<tag>

   (see `kgwasflow/tags`_ for valid values for ``<tag>``)


.. |downloads_kgwasflow| image:: https://img.shields.io/conda/dn/bioconda/kgwasflow.svg?style=flat
   :target: https://anaconda.org/bioconda/kgwasflow
   :alt:   (downloads)
.. |docker_kgwasflow| image:: https://quay.io/repository/biocontainers/kgwasflow/status
   :target: https://quay.io/repository/biocontainers/kgwasflow
.. _`kgwasflow/tags`: https://quay.io/repository/biocontainers/kgwasflow?tab=tags


.. raw:: html

    <script>
        var package = "kgwasflow";
        var versions = ["1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kgwasflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kgwasflow/README.html