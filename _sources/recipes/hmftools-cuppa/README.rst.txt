:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-cuppa'
.. highlight: bash

hmftools-cuppa
==============

.. conda:recipe:: hmftools-cuppa
   :replaces_section_title:
   :noindex:

   Predict tissue of origin for tumor samples from WGTS data.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/cuppa/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-cuppa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cuppa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cuppa/meta.yaml>`_

   


.. conda:package:: hmftools-cuppa

   |downloads_hmftools-cuppa| |docker_hmftools-cuppa|

   :versions:
      
      

      ``1.8.1-0``

      

   
   :depends matplotlib-base: ``>=3.3,<4``
   :depends numpy: ``>=1.19,<2``
   :depends openjdk: ``>=8``
   :depends pandas: ``>=1.1,<2``
   :depends r-base: ``>=4``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-stringi: 
   :depends r-tidyr: 
   :depends scipy: ``>=1,<2``
   :depends seaborn: ``>=0.11,<1``
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

      mamba install hmftools-cuppa

   and update with::

      mamba update hmftools-cuppa

  To create a new environment, run::

      mamba create --name myenvname hmftools-cuppa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-cuppa:<tag>

   (see `hmftools-cuppa/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-cuppa| image:: https://img.shields.io/conda/dn/bioconda/hmftools-cuppa.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-cuppa
   :alt:   (downloads)
.. |docker_hmftools-cuppa| image:: https://quay.io/repository/biocontainers/hmftools-cuppa/status
   :target: https://quay.io/repository/biocontainers/hmftools-cuppa
.. _`hmftools-cuppa/tags`: https://quay.io/repository/biocontainers/hmftools-cuppa?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-cuppa";
        var versions = ["1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-cuppa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-cuppa/README.html