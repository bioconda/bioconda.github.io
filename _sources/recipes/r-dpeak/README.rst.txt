:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dpeak'
.. highlight: bash

r-dpeak
=======

.. conda:recipe:: r-dpeak
   :replaces_section_title:
   :noindex:

   This package provides functions for fitting dPeak\, a statistical framework to deconvolve ChIP\-seq peaks.

   :homepage: http://dongjunchung.github.io/dpeak/
   :license: GPL (>= 2)
   :recipe: /`r-dpeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dpeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dpeak/meta.yaml>`_

   


.. conda:package:: r-dpeak

   |downloads_r-dpeak| |docker_r-dpeak|

   :versions:
      
      

      ``2.0.1-9``,  ``2.0.1-8``,  ``2.0.1-7``,  ``2.0.1-6``,  ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends bioconductor-bsgenome: 
   :depends bioconductor-iranges: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-rcpp: 
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

      mamba install r-dpeak

   and update with::

      mamba update r-dpeak

  To create a new environment, run::

      mamba create --name myenvname r-dpeak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-dpeak:<tag>

   (see `r-dpeak/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dpeak| image:: https://img.shields.io/conda/dn/bioconda/r-dpeak.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dpeak
   :alt:   (downloads)
.. |docker_r-dpeak| image:: https://quay.io/repository/biocontainers/r-dpeak/status
   :target: https://quay.io/repository/biocontainers/r-dpeak
.. _`r-dpeak/tags`: https://quay.io/repository/biocontainers/r-dpeak?tab=tags


.. raw:: html

    <script>
        var package = "r-dpeak";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dpeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dpeak/README.html