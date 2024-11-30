:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dadaist2-full'
.. highlight: bash

dadaist2-full
=============

.. conda:recipe:: dadaist2-full
   :replaces_section_title:
   :noindex:

   Meta\-package for Dadaist2 with full R packages\, VSEARCH\, CD\-HIT and MultiQC

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`dadaist2-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2-full/meta.yaml>`_

   


.. conda:package:: dadaist2-full

   |downloads_dadaist2-full| |docker_dadaist2-full|

   :versions:
      
      

      ``2.0-0``,  ``1.1-0``,  ``1.0-0``,  ``0.7-1``,  ``0.7-0``

      

   
   :depends cd-hit: 
   :depends dadaist2: ``>=1.1``
   :depends itsxpress: 
   :depends multiqc: 
   :depends r-ade4: 
   :depends r-base: ``>=4``
   :depends r-cluster: 
   :depends r-corrplot: 
   :depends r-fpc: 
   :depends r-hmisc: 
   :depends r-optparse: 
   :depends r-phangorn: 
   :depends rich: 
   :depends vsearch: 
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

      mamba install dadaist2-full

   and update with::

      mamba update dadaist2-full

  To create a new environment, run::

      mamba create --name myenvname dadaist2-full

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dadaist2-full:<tag>

   (see `dadaist2-full/tags`_ for valid values for ``<tag>``)


.. |downloads_dadaist2-full| image:: https://img.shields.io/conda/dn/bioconda/dadaist2-full.svg?style=flat
   :target: https://anaconda.org/bioconda/dadaist2-full
   :alt:   (downloads)
.. |docker_dadaist2-full| image:: https://quay.io/repository/biocontainers/dadaist2-full/status
   :target: https://quay.io/repository/biocontainers/dadaist2-full
.. _`dadaist2-full/tags`: https://quay.io/repository/biocontainers/dadaist2-full?tab=tags


.. raw:: html

    <script>
        var package = "dadaist2-full";
        var versions = ["2.0","1.1","1.0","0.7","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dadaist2-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dadaist2-full/README.html