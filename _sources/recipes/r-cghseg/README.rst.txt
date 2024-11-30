:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cghseg'
.. highlight: bash

r-cghseg
========

.. conda:recipe:: r-cghseg
   :replaces_section_title:
   :noindex:

   Dedicated to the analysis of CGH \(Comparative Genomic Hybridization\) array profiles using segmentation models. \'cghseg\' package is intended to detect breakpoints from CGH profiles. It can handle both single and multiple profiles analysis\, to perform segmentation\, normalization and calling. Methods for joint segmentation are described in Picard and al. \(2011\).

   :homepage: https://CRAN.R-project.org/package=cghseg
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-cghseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cghseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cghseg/meta.yaml>`_

   


.. conda:package:: r-cghseg

   |downloads_r-cghseg| |docker_r-cghseg|

   :versions:
      
      

      ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
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

      mamba install r-cghseg

   and update with::

      mamba update r-cghseg

  To create a new environment, run::

      mamba create --name myenvname r-cghseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cghseg:<tag>

   (see `r-cghseg/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cghseg| image:: https://img.shields.io/conda/dn/bioconda/r-cghseg.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cghseg
   :alt:   (downloads)
.. |docker_r-cghseg| image:: https://quay.io/repository/biocontainers/r-cghseg/status
   :target: https://quay.io/repository/biocontainers/r-cghseg
.. _`r-cghseg/tags`: https://quay.io/repository/biocontainers/r-cghseg?tab=tags


.. raw:: html

    <script>
        var package = "r-cghseg";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cghseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cghseg/README.html