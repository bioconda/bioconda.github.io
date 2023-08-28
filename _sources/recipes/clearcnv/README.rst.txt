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
      
      

      ``0.306-0``,  ``0.305-1``,  ``0.305-0``

      

   
   :depends attrs: 
   :depends bedops: 
   :depends bedtools: 
   :depends cattrs: 
   :depends dash: ``1.21.0.*``
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
   :depends werkzeug: ``2.0.0.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install clearcnv

   and update with::

      mamba update clearcnv

  To create a new environment, run::

      mamba create --name myenvname clearcnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.306","0.305","0.305"];
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