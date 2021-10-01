:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clearcnv'
.. highlight: bash

clearcnv
========

.. conda:recipe:: clearcnv
   :replaces_section_title:
   :noindex:

   CNV calling package

   :homepage: https://github.com/bihealth/clear-cnv
   :license: MIT / MIT
   :recipe: /`clearcnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clearcnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clearcnv/meta.yaml>`_

   


.. conda:package:: clearcnv

   |downloads_clearcnv| |docker_clearcnv|

   :versions:
      
      

      ``0.305-0``

      

   
   :depends attrs: 
   :depends bedops: 
   :depends bedtools: 
   :depends cattrs: 
   :depends dash: 
   :depends dash-bootstrap-components: 
   :depends dash-core-components: 
   :depends dash-html-components: 
   :depends dash-renderer: 
   :depends dash-table: 
   :depends fastcluster: 
   :depends flask: 
   :depends flask-caching: 
   :depends hmmlearn: 
   :depends logzero: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends snakemake-minimal: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clearcnv

   and update with::

      conda update clearcnv

   or use the docker container::

      docker pull quay.io/biocontainers/clearcnv:<tag>

   (see `clearcnv/tags`_ for valid values for ``<tag>``)


.. |downloads_clearcnv| image:: https://img.shields.io/conda/dn/bioconda/clearcnv.svg?style=flat
   :target: https://anaconda.org/bioconda/clearcnv
   :alt:   (downloads)
.. |docker_clearcnv| image:: https://quay.io/repository/biocontainers/clearcnv/status
   :target: https://quay.io/repository/biocontainers/clearcnv
.. _`clearcnv/tags`: https://quay.io/repository/biocontainers/clearcnv?tab=tags


.. raw:: html

    <script>
        var package = "clearcnv";
        var versions = ["0.305"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clearcnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clearcnv/README.html