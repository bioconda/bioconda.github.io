:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cutqc'
.. highlight: bash

cutqc
=====

.. conda:recipe:: cutqc
   :replaces_section_title:
   :noindex:

   generate aggregated fastqc report of both before and after trimming.

   :homepage: https://github.com/obenno/cutqc
   :license: MIT
   :recipe: /`cutqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutqc/meta.yaml>`_

   


.. conda:package:: cutqc

   |downloads_cutqc| |docker_cutqc|

   :versions:
      
      

      ``0.07-0``,  ``0.06-0``

      

   
   :depends cutadapt: 
   :depends fastqc: 
   :depends gawk: 
   :depends r-base: 
   :depends r-plotly: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-tidyverse: 
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

      mamba install cutqc

   and update with::

      mamba update cutqc

  To create a new environment, run::

      mamba create --name myenvname cutqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cutqc:<tag>

   (see `cutqc/tags`_ for valid values for ``<tag>``)


.. |downloads_cutqc| image:: https://img.shields.io/conda/dn/bioconda/cutqc.svg?style=flat
   :target: https://anaconda.org/bioconda/cutqc
   :alt:   (downloads)
.. |docker_cutqc| image:: https://quay.io/repository/biocontainers/cutqc/status
   :target: https://quay.io/repository/biocontainers/cutqc
.. _`cutqc/tags`: https://quay.io/repository/biocontainers/cutqc?tab=tags


.. raw:: html

    <script>
        var package = "cutqc";
        var versions = ["0.07","0.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutqc/README.html