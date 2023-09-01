:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wade'
.. highlight: bash

wade
====

.. conda:recipe:: wade
   :replaces_section_title:
   :noindex:

   WADE provides a flexible and customizable method to extract specific genes from a large number of genomes at once.

   :homepage: https://github.com/phac-nml/wade
   :license: APACHE / Apache License, Version 2.0
   :recipe: /`wade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wade/meta.yaml>`_

   


.. conda:package:: wade

   |downloads_wade| |docker_wade|

   :versions:
      
      

      ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends bioconductor-biostrings: 
   :depends blast: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-here: 
   :depends r-magrittr: 
   :depends r-optparse: 
   :depends r-purrr: 
   :depends r-stringr: 
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

      mamba install wade

   and update with::

      mamba update wade

  To create a new environment, run::

      mamba create --name myenvname wade

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wade:<tag>

   (see `wade/tags`_ for valid values for ``<tag>``)


.. |downloads_wade| image:: https://img.shields.io/conda/dn/bioconda/wade.svg?style=flat
   :target: https://anaconda.org/bioconda/wade
   :alt:   (downloads)
.. |docker_wade| image:: https://quay.io/repository/biocontainers/wade/status
   :target: https://quay.io/repository/biocontainers/wade
.. _`wade/tags`: https://quay.io/repository/biocontainers/wade?tab=tags


.. raw:: html

    <script>
        var package = "wade";
        var versions = ["0.2.6","0.2.6","0.2.5","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wade/README.html