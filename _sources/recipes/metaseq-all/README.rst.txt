:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaseq-all'
.. highlight: bash

metaseq-all
===========

.. conda:recipe:: metaseq-all
   :replaces_section_title:
   :noindex:

   Meta\-package for metaseq including bedtools and UCSC tools

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`metaseq-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq-all/meta.yaml>`_

   


.. conda:package:: metaseq-all

   |downloads_metaseq-all| |docker_metaseq-all|

   :versions:
      
      

      ``0.5.6-4``,  ``0.5.6-3``,  ``0.5.6-2``,  ``0.5.6-1``,  ``0.5.6-0``

      

   
   :depends bedtools: 
   :depends metaseq: 
   :depends samtools: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-bigbedtobed: 
   :depends ucsc-bigwigsummary: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metaseq-all

   and update with::

      mamba update metaseq-all

  To create a new environment, run::

      mamba create --name myenvname metaseq-all

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaseq-all:<tag>

   (see `metaseq-all/tags`_ for valid values for ``<tag>``)


.. |downloads_metaseq-all| image:: https://img.shields.io/conda/dn/bioconda/metaseq-all.svg?style=flat
   :target: https://anaconda.org/bioconda/metaseq-all
   :alt:   (downloads)
.. |docker_metaseq-all| image:: https://quay.io/repository/biocontainers/metaseq-all/status
   :target: https://quay.io/repository/biocontainers/metaseq-all
.. _`metaseq-all/tags`: https://quay.io/repository/biocontainers/metaseq-all?tab=tags


.. raw:: html

    <script>
        var package = "metaseq-all";
        var versions = ["0.5.6","0.5.6","0.5.6","0.5.6","0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaseq-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaseq-all/README.html