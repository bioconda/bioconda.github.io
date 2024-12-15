:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mkmisc'
.. highlight: bash

r-mkmisc
========

.. conda:recipe:: r-mkmisc
   :replaces_section_title:
   :noindex:

   Contains several functions for statistical data analysis\; e.g. for sample size and power calculations\, computation of confidence intervals and tests\, and generation of similarity matrices.

   :homepage: http://www.stamats.de/
   :license: LGPL / LGPL-3.0-only
   :recipe: /`r-mkmisc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mkmisc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mkmisc/meta.yaml>`_

   


.. conda:package:: r-mkmisc

   |downloads_r-mkmisc| |docker_r-mkmisc|

   :versions:
      
      

      ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-1``,  ``1.8-0``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :depends r-robustbase: 
   :depends r-scales: 
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

      mamba install r-mkmisc

   and update with::

      mamba update r-mkmisc

  To create a new environment, run::

      mamba create --name myenvname r-mkmisc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mkmisc:<tag>

   (see `r-mkmisc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mkmisc| image:: https://img.shields.io/conda/dn/bioconda/r-mkmisc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mkmisc
   :alt:   (downloads)
.. |docker_r-mkmisc| image:: https://quay.io/repository/biocontainers/r-mkmisc/status
   :target: https://quay.io/repository/biocontainers/r-mkmisc
.. _`r-mkmisc/tags`: https://quay.io/repository/biocontainers/r-mkmisc?tab=tags


.. raw:: html

    <script>
        var package = "r-mkmisc";
        var versions = ["1.9","1.9","1.9","1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mkmisc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mkmisc/README.html