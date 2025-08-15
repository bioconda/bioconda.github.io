:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drhip'
.. highlight: bash

drhip
=====

.. conda:recipe:: drhip
   :replaces_section_title:
   :noindex:

   DRHIP \- Data Reduction for HyPhy with Inference Processing

   :homepage: https://github.com/veg/drhip
   :license: MIT / MIT
   :recipe: /`drhip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drhip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drhip/meta.yaml>`_

   DRHIP \(Data Reduction for HyPhy with Inference Processing\) is a Python package designed to analyze and summarize 
   results from HyPhy evolutionary selection analyses. It provides tools for processing 
   BUSTED\, RELAX\, MEME\, and other HyPhy method outputs to generate summary statistics 
   and site\-specific analyses.



.. conda:package:: drhip

   |downloads_drhip| |docker_drhip|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.79``
   :depends numpy: ``>=1.20.0``
   :depends pandas: ``>=1.3.0``
   :depends python: ``>=3.7``
   :depends scipy: ``>=1.7.0``
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

      mamba install drhip

   and update with::

      mamba update drhip

  To create a new environment, run::

      mamba create --name myenvname drhip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/drhip:<tag>

   (see `drhip/tags`_ for valid values for ``<tag>``)


.. |downloads_drhip| image:: https://img.shields.io/conda/dn/bioconda/drhip.svg?style=flat
   :target: https://anaconda.org/bioconda/drhip
   :alt:   (downloads)
.. |docker_drhip| image:: https://quay.io/repository/biocontainers/drhip/status
   :target: https://quay.io/repository/biocontainers/drhip
.. _`drhip/tags`: https://quay.io/repository/biocontainers/drhip?tab=tags


.. raw:: html

    <script>
        var package = "drhip";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drhip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drhip/README.html