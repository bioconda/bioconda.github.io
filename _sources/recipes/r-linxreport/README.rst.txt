:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-linxreport'
.. highlight: bash

r-linxreport
============

.. conda:recipe:: r-linxreport
   :replaces_section_title:
   :noindex:

   LINX Result Reporter

   :homepage: https://github.com/umccr/linxreport
   :license: MIT / MIT + file LICENSE
   :recipe: /`r-linxreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-linxreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-linxreport/meta.yaml>`_

   


.. conda:package:: r-linxreport

   |downloads_r-linxreport| |docker_r-linxreport|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-details: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-fs: 
   :depends r-gtools: 
   :depends r-optparse: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-sessioninfo: 
   :depends r-stringr: 
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

      mamba install r-linxreport

   and update with::

      mamba update r-linxreport

  To create a new environment, run::

      mamba create --name myenvname r-linxreport

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-linxreport:<tag>

   (see `r-linxreport/tags`_ for valid values for ``<tag>``)


.. |downloads_r-linxreport| image:: https://img.shields.io/conda/dn/bioconda/r-linxreport.svg?style=flat
   :target: https://anaconda.org/bioconda/r-linxreport
   :alt:   (downloads)
.. |docker_r-linxreport| image:: https://quay.io/repository/biocontainers/r-linxreport/status
   :target: https://quay.io/repository/biocontainers/r-linxreport
.. _`r-linxreport/tags`: https://quay.io/repository/biocontainers/r-linxreport?tab=tags


.. raw:: html

    <script>
        var package = "r-linxreport";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-linxreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-linxreport/README.html