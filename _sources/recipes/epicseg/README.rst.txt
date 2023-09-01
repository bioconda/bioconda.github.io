:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epicseg'
.. highlight: bash

epicseg
=======

.. conda:recipe:: epicseg
   :replaces_section_title:
   :noindex:

   EpiCSeg \(Epigenome Count\-based Segmentation\) is a software for annotating the genome based on the state of the chromatin. It provides tools for extracting count data from BAM files\, typlically corresponding to ChIP\-seq experiments for histone marks \(but other choices are possible\) it learns a statistical model for the read counts based on a HMM\, it annotates the genome\, and it provides tools for displaying and analyzing the obtained models and segmentations. EpiCSeg can be used as an R package or from the command line via Rscript.

   :homepage: http://github.com/lamortenera/epicseg
   :license: GPL-3
   :recipe: /`epicseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicseg/meta.yaml>`_

   


.. conda:package:: epicseg

   |downloads_epicseg| |docker_epicseg|

   :versions:
      
      

      ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bioconductor-bamsignals: 
   :depends bioconductor-edger: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-s4vectors: 
   :depends kfoots: 
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=0.10.6``
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

      mamba install epicseg

   and update with::

      mamba update epicseg

  To create a new environment, run::

      mamba create --name myenvname epicseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epicseg:<tag>

   (see `epicseg/tags`_ for valid values for ``<tag>``)


.. |downloads_epicseg| image:: https://img.shields.io/conda/dn/bioconda/epicseg.svg?style=flat
   :target: https://anaconda.org/bioconda/epicseg
   :alt:   (downloads)
.. |docker_epicseg| image:: https://quay.io/repository/biocontainers/epicseg/status
   :target: https://quay.io/repository/biocontainers/epicseg
.. _`epicseg/tags`: https://quay.io/repository/biocontainers/epicseg?tab=tags


.. raw:: html

    <script>
        var package = "epicseg";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epicseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epicseg/README.html