:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-r4cker'
.. highlight: bash

r-r4cker
========

.. conda:recipe:: r-r4cker
   :replaces_section_title:
   :noindex:

   Analysis of 4C\-seq \(circularized chromosome conformation capture\) data

   :homepage: https://github.com/rr1859/R.4Cker
   :license: Unknown
   :recipe: /`r-r4cker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r4cker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r4cker/meta.yaml>`_

   


.. conda:package:: r-r4cker

   |downloads_r-r4cker| |docker_r-r4cker|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.0.0.9000-0``

      

   
   :depends bioconductor-deseq2: 
   :depends bioconductor-genomeinfodbdata: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-depmixs4: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-misctools: 
   :depends r-psych: 
   :depends r-rcolorbrewer: 
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

      mamba install r-r4cker

   and update with::

      mamba update r-r4cker

  To create a new environment, run::

      mamba create --name myenvname r-r4cker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-r4cker:<tag>

   (see `r-r4cker/tags`_ for valid values for ``<tag>``)


.. |downloads_r-r4cker| image:: https://img.shields.io/conda/dn/bioconda/r-r4cker.svg?style=flat
   :target: https://anaconda.org/bioconda/r-r4cker
   :alt:   (downloads)
.. |docker_r-r4cker| image:: https://quay.io/repository/biocontainers/r-r4cker/status
   :target: https://quay.io/repository/biocontainers/r-r4cker
.. _`r-r4cker/tags`: https://quay.io/repository/biocontainers/r-r4cker?tab=tags


.. raw:: html

    <script>
        var package = "r-r4cker";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-r4cker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-r4cker/README.html