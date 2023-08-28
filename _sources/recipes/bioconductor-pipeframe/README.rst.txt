:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pipeframe'
.. highlight: bash

bioconductor-pipeframe
======================

.. conda:recipe:: bioconductor-pipeframe
   :replaces_section_title:
   :noindex:

   Pipeline framework for bioinformatics in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pipeFrame.html
   :license: GPL-3
   :recipe: /`bioconductor-pipeframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipeframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipeframe/meta.yaml>`_

   pipeFrame is an R package for building a componentized bioinformatics pipeline. Each step in this pipeline is wrapped in the framework\, so the connection among steps is created seamlessly and automatically. Users could focus more on fine\-tuning arguments rather than spending a lot of time on transforming file format\, passing task outputs to task inputs or installing the dependencies. Componentized step elements can be customized into other new pipelines flexibly as well. This pipeline can be split into several important functional steps\, so it is much easier for users to understand the complex arguments from each step rather than parameter combination from the whole pipeline. At the same time\, componentized pipeline can restart at the breakpoint and avoid rerunning the whole pipeline\, which may save a lot of time for users on pipeline tuning or such issues as power off or process other interrupts.


.. conda:package:: bioconductor-pipeframe

   |downloads_bioconductor-pipeframe| |docker_bioconductor-pipeframe|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-magrittr: 
   :depends r-rmarkdown: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-pipeframe

   and update with::

      mamba update bioconductor-pipeframe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pipeframe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pipeframe:<tag>

   (see `bioconductor-pipeframe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pipeframe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pipeframe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pipeframe
   :alt:   (downloads)
.. |docker_bioconductor-pipeframe| image:: https://quay.io/repository/biocontainers/bioconductor-pipeframe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pipeframe
.. _`bioconductor-pipeframe/tags`: https://quay.io/repository/biocontainers/bioconductor-pipeframe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pipeframe";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pipeframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pipeframe/README.html