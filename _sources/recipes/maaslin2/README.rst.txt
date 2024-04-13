:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maaslin2'
.. highlight: bash

maaslin2
========

.. conda:recipe:: maaslin2
   :replaces_section_title:
   :noindex:

   MaAsLin2 is comprehensive R package for efficiently determining multivariable association between microbial meta\'omic features and clinical metadata.

   :homepage: http://huttenhower.sph.harvard.edu/maaslin2
   :license: Custom OSS
   :recipe: /`maaslin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin2/meta.yaml>`_

   


.. conda:package:: maaslin2

   |downloads_maaslin2| |docker_maaslin2|

   :versions:
      
      

      ``1.16.0-0``,  ``0.99.12-0``,  ``0.99.2-0``,  ``0.99.1-0``,  ``0.3.0-0``

      

   
   :depends bioconductor-edger: 
   :depends bioconductor-metagenomeseq: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-chemometrics: 
   :depends r-cplm: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-glmmtmb: 
   :depends r-hash: 
   :depends r-lmertest: 
   :depends r-logging: 
   :depends r-mass: 
   :depends r-mumin: 
   :depends r-optparse: 
   :depends r-pbapply: 
   :depends r-pheatmap: 
   :depends r-pscl: 
   :depends r-vegan: 
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

      mamba install maaslin2

   and update with::

      mamba update maaslin2

  To create a new environment, run::

      mamba create --name myenvname maaslin2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maaslin2:<tag>

   (see `maaslin2/tags`_ for valid values for ``<tag>``)


.. |downloads_maaslin2| image:: https://img.shields.io/conda/dn/bioconda/maaslin2.svg?style=flat
   :target: https://anaconda.org/bioconda/maaslin2
   :alt:   (downloads)
.. |docker_maaslin2| image:: https://quay.io/repository/biocontainers/maaslin2/status
   :target: https://quay.io/repository/biocontainers/maaslin2
.. _`maaslin2/tags`: https://quay.io/repository/biocontainers/maaslin2?tab=tags


.. raw:: html

    <script>
        var package = "maaslin2";
        var versions = ["1.16.0","0.99.12","0.99.2","0.99.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maaslin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maaslin2/README.html