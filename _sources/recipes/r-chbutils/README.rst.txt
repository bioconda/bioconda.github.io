:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-chbutils'
.. highlight: bash

r-chbutils
==========

.. conda:recipe:: r-chbutils
   :replaces_section_title:
   :noindex:

   Useful utility functions used at the Harvard Chan School Bioinformatics core

   :homepage: https://github.com/hbc/CHBUtils
   :license: MIT
   :recipe: /`r-chbutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chbutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chbutils/meta.yaml>`_

   


.. conda:package:: r-chbutils

   |downloads_r-chbutils| |docker_r-chbutils|

   :versions:
      
      

      ``0.1_2017_10_26-7``,  ``0.1_2017_10_26-6``,  ``0.1_2017_10_26-5``,  ``0.1_2017_10_26-4``,  ``0.1_2017_10_26-3``,  ``0.1_2017_10_26-2``,  ``0.1_2017_10_26-1``,  ``0.1_2017_10_26-0``,  ``0.1_2015_12_21-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mvtnorm: 
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

      mamba install r-chbutils

   and update with::

      mamba update r-chbutils

  To create a new environment, run::

      mamba create --name myenvname r-chbutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-chbutils:<tag>

   (see `r-chbutils/tags`_ for valid values for ``<tag>``)


.. |downloads_r-chbutils| image:: https://img.shields.io/conda/dn/bioconda/r-chbutils.svg?style=flat
   :target: https://anaconda.org/bioconda/r-chbutils
   :alt:   (downloads)
.. |docker_r-chbutils| image:: https://quay.io/repository/biocontainers/r-chbutils/status
   :target: https://quay.io/repository/biocontainers/r-chbutils
.. _`r-chbutils/tags`: https://quay.io/repository/biocontainers/r-chbutils?tab=tags


.. raw:: html

    <script>
        var package = "r-chbutils";
        var versions = ["0.1_2017_10_26","0.1_2017_10_26","0.1_2017_10_26","0.1_2017_10_26","0.1_2017_10_26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-chbutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-chbutils/README.html