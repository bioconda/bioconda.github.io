:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rucs'
.. highlight: bash

rucs
====

.. conda:recipe:: rucs
   :replaces_section_title:
   :noindex:

   RUCS is a bioinformatics tool developed to ease the task of designing new primers.

   :homepage: https://bitbucket.org/genomicepidemiology/rucs/src/master
   :documentation: https://cge.cbs.dtu.dk/services/rucs/instructions.php
   
   :license: APACHE / Apache-2.0
   :recipe: /`rucs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rucs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rucs/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx526`

   


.. conda:package:: rucs

   |downloads_rucs| |docker_rucs|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends blast: 
   :depends bwa: 
   :depends numpy: 
   :depends primer3-py: 
   :depends python: ``>=3.5``
   :depends samtools: 
   :depends tabulate: 
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

      mamba install rucs

   and update with::

      mamba update rucs

  To create a new environment, run::

      mamba create --name myenvname rucs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rucs:<tag>

   (see `rucs/tags`_ for valid values for ``<tag>``)


.. |downloads_rucs| image:: https://img.shields.io/conda/dn/bioconda/rucs.svg?style=flat
   :target: https://anaconda.org/bioconda/rucs
   :alt:   (downloads)
.. |docker_rucs| image:: https://quay.io/repository/biocontainers/rucs/status
   :target: https://quay.io/repository/biocontainers/rucs
.. _`rucs/tags`: https://quay.io/repository/biocontainers/rucs?tab=tags


.. raw:: html

    <script>
        var package = "rucs";
        var versions = ["1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rucs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rucs/README.html