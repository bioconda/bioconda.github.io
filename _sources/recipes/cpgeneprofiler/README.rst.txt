:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpgeneprofiler'
.. highlight: bash

cpgeneprofiler
==============

.. conda:recipe:: cpgeneprofiler
   :replaces_section_title:
   :noindex:

   Generate a profile of carbapenamase genes from the genome assemblies. 

   :homepage: https://github.com/ramadatta/CPgeneProfiler
   :license: GPL2
   :recipe: /`cpgeneprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpgeneprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpgeneprofiler/meta.yaml>`_

   


.. conda:package:: cpgeneprofiler

   |downloads_cpgeneprofiler| |docker_cpgeneprofiler|

   :versions:
      
      

      ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends bioconductor-biostrings: 
   :depends blast: ``>=2.9.0``
   :depends r-ape: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: 
   :depends r-gridextra: 
   :depends r-jpeg: 
   :depends r-pdftools: 
   :depends r-png: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-tidyverse: 
   :depends r-tiff: 
   :depends r-upsetr: 
   :depends r-usethis: 
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

      mamba install cpgeneprofiler

   and update with::

      mamba update cpgeneprofiler

  To create a new environment, run::

      mamba create --name myenvname cpgeneprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cpgeneprofiler:<tag>

   (see `cpgeneprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_cpgeneprofiler| image:: https://img.shields.io/conda/dn/bioconda/cpgeneprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/cpgeneprofiler
   :alt:   (downloads)
.. |docker_cpgeneprofiler| image:: https://quay.io/repository/biocontainers/cpgeneprofiler/status
   :target: https://quay.io/repository/biocontainers/cpgeneprofiler
.. _`cpgeneprofiler/tags`: https://quay.io/repository/biocontainers/cpgeneprofiler?tab=tags


.. raw:: html

    <script>
        var package = "cpgeneprofiler";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpgeneprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpgeneprofiler/README.html