:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slncky'
.. highlight: bash

slncky
======

.. conda:recipe:: slncky
   :replaces_section_title:
   :noindex:

   slncky is a tool for lncRNA discovery from RNA\-Seq data. slncky filters a high\-quality set of noncoding transcripts\, discovers lncRNA orthologs\, and characterizes conserved lncRNA evolution. slncky was developed as a collaboration between the Garber Lab at UMass Medical and the Regev Lab at the Broad Institute.

   :homepage: https://github.com/slncky/slncky
   :license: MIT / MIT
   :recipe: /`slncky <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slncky>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slncky/meta.yaml>`_

   


.. conda:package:: slncky

   |downloads_slncky| |docker_slncky|

   :versions:
      
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends bedtools: ``>=2.17.0,<=2.24.0``
   :depends lastz: 
   :depends numpy: 
   :depends python: ``<3``
   :depends ucsc-liftover: 
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

      mamba install slncky

   and update with::

      mamba update slncky

  To create a new environment, run::

      mamba create --name myenvname slncky

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/slncky:<tag>

   (see `slncky/tags`_ for valid values for ``<tag>``)


.. |downloads_slncky| image:: https://img.shields.io/conda/dn/bioconda/slncky.svg?style=flat
   :target: https://anaconda.org/bioconda/slncky
   :alt:   (downloads)
.. |docker_slncky| image:: https://quay.io/repository/biocontainers/slncky/status
   :target: https://quay.io/repository/biocontainers/slncky
.. _`slncky/tags`: https://quay.io/repository/biocontainers/slncky?tab=tags


.. raw:: html

    <script>
        var package = "slncky";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slncky/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slncky/README.html