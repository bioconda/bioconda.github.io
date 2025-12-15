:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metafun'
.. highlight: bash

metafun
=======

.. conda:recipe:: metafun
   :replaces_section_title:
   :noindex:

   Scalable and agile analysis pipeline for metagenomic and comparative genomic analysis

   :homepage: https://github.com/aababc1/metaFun
   :documentation: https://metafun-doc.readthedocs.io/
   
   :license: MIT
   :recipe: /`metafun <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metafun>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metafun/meta.yaml>`_

   metaFun is a comprehensive pipeline for metagenomic analysis including quality control\, assembly\, binning\, taxonomy profiling\, and functional analysis. Version 1.0.0 adds WMS\_STRAIN module for strain\-level microbial diversity analysis.


.. conda:package:: metafun

   |downloads_metafun| |docker_metafun|

   :versions:
      
      

      ``1.0.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends apptainer: ``1.3.0.*``
   :depends dash: ``2.17.1.*``
   :depends dash-bootstrap-components: 
   :depends dash-core-components: 
   :depends dash-daq: 
   :depends dash-html-components: 
   :depends dash-table: 
   :depends nextflow: ``24.04.2.*``
   :depends numpy: ``>=1.26``
   :depends pandas: ``>=2.0``
   :depends plotly: ``>=5.0``
   :depends python: ``>=3.10``
   :depends squashfuse: 
   :depends sylph: ``0.6.1.*``
   :depends tqdm: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metafun

   and update with::

      mamba update metafun

  To create a new environment, run::

      mamba create --name myenvname metafun

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metafun:<tag>

   (see `metafun/tags`_ for valid values for ``<tag>``)


.. |downloads_metafun| image:: https://img.shields.io/conda/dn/bioconda/metafun.svg?style=flat
   :target: https://anaconda.org/bioconda/metafun
   :alt:   (downloads)
.. |docker_metafun| image:: https://quay.io/repository/biocontainers/metafun/status
   :target: https://quay.io/repository/biocontainers/metafun
.. _`metafun/tags`: https://quay.io/repository/biocontainers/metafun?tab=tags


.. raw:: html

    <script>
        var package = "metafun";
        var versions = ["1.0.0","0.3.0","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metafun/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metafun/README.html