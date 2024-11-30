:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'labrat'
.. highlight: bash

labrat
======

.. conda:recipe:: labrat
   :replaces_section_title:
   :noindex:

   A package to quantify changes in alternative polyadenylation isoform abundance using RNAseq data

   :homepage: https://github.com/TaliaferroLab/LABRAT
   :license: MIT / MIT
   :recipe: /`labrat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/labrat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/labrat/meta.yaml>`_
   :links: https: :https:`//bmcgenomics.biomedcentral.com/articles/10.1186/s12864-021-07781-1`

   


.. conda:package:: labrat

   |downloads_labrat| |docker_labrat|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``

      

   
   :depends biopython: ``>=1.76``
   :depends gffutils: ``>=0.9``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.6``
   :depends salmon: ``0.14.*``
   :depends scipy: ``>=1.3.0``
   :depends statsmodels: ``>=0.10``
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

      mamba install labrat

   and update with::

      mamba update labrat

  To create a new environment, run::

      mamba create --name myenvname labrat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/labrat:<tag>

   (see `labrat/tags`_ for valid values for ``<tag>``)


.. |downloads_labrat| image:: https://img.shields.io/conda/dn/bioconda/labrat.svg?style=flat
   :target: https://anaconda.org/bioconda/labrat
   :alt:   (downloads)
.. |docker_labrat| image:: https://quay.io/repository/biocontainers/labrat/status
   :target: https://quay.io/repository/biocontainers/labrat
.. _`labrat/tags`: https://quay.io/repository/biocontainers/labrat?tab=tags


.. raw:: html

    <script>
        var package = "labrat";
        var versions = ["0.3.0","0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/labrat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/labrat/README.html