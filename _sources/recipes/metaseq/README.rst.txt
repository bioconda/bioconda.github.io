:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaseq'
.. highlight: bash

metaseq
=======

.. conda:recipe:: metaseq
   :replaces_section_title:
   :noindex:

   Framework for integrated analysis and plotting of ChIP\/RIP\/RNA\/\*\-seq data.

   :homepage: http://github.com/daler/metaseq
   :license: MIT / MIT
   :recipe: /`metaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq/meta.yaml>`_

   


.. conda:package:: metaseq

   |downloads_metaseq| |docker_metaseq|

   :versions:
      
      

      ``0.5.6-5``,  ``0.5.6-4``,  ``0.5.6-3``,  ``0.5.6-2``,  ``0.5.6-0``

      

   
   :depends biopython: 
   :depends bx-python: ``>=0.7.1``
   :depends fisher: 
   :depends gffutils: ``>=0.8.2``
   :depends libgcc-ng: ``>=10.3.0``
   :depends matplotlib: ``>=1.3.1``
   :depends numpy: ``>=1.8.0``
   :depends pandas: ``>=0.13.1``
   :depends pybedtools: ``>=0.6.6``
   :depends pysam: ``>=0.7``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends pyyaml: ``>=3.10``
   :depends scikit-learn: 
   :depends scipy: ``>=0.10.1``
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

      mamba install metaseq

   and update with::

      mamba update metaseq

  To create a new environment, run::

      mamba create --name myenvname metaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaseq:<tag>

   (see `metaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_metaseq| image:: https://img.shields.io/conda/dn/bioconda/metaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/metaseq
   :alt:   (downloads)
.. |docker_metaseq| image:: https://quay.io/repository/biocontainers/metaseq/status
   :target: https://quay.io/repository/biocontainers/metaseq
.. _`metaseq/tags`: https://quay.io/repository/biocontainers/metaseq?tab=tags


.. raw:: html

    <script>
        var package = "metaseq";
        var versions = ["0.5.6","0.5.6","0.5.6","0.5.6","0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaseq/README.html