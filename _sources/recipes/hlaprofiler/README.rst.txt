:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hlaprofiler'
.. highlight: bash

hlaprofiler
===========

.. conda:recipe:: hlaprofiler
   :replaces_section_title:
   :noindex:

   HLAProfiler uses k\-mer profiles to predict HLA types from paired\-end RNA\-seq data.

   :homepage: https://github.com/ExpressionAnalysis/HLAProfiler
   :license: Custom non-commercial license
   :recipe: /`hlaprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlaprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlaprofiler/meta.yaml>`_

   


.. conda:package:: hlaprofiler

   |downloads_hlaprofiler| |docker_hlaprofiler|

   :versions:
      
      

      ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends kraken-ea: 
   :depends perl-base: 
   :depends perl-class-load: 
   :depends perl-file-compare: 
   :depends perl-file-slurp: 
   :depends perl-parallel-forkmanager: 
   :depends perl-statistics-basic: 
   :depends perl-test-trap: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hlaprofiler

   and update with::

      mamba update hlaprofiler

  To create a new environment, run::

      mamba create --name myenvname hlaprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hlaprofiler:<tag>

   (see `hlaprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_hlaprofiler| image:: https://img.shields.io/conda/dn/bioconda/hlaprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/hlaprofiler
   :alt:   (downloads)
.. |docker_hlaprofiler| image:: https://quay.io/repository/biocontainers/hlaprofiler/status
   :target: https://quay.io/repository/biocontainers/hlaprofiler
.. _`hlaprofiler/tags`: https://quay.io/repository/biocontainers/hlaprofiler?tab=tags


.. raw:: html

    <script>
        var package = "hlaprofiler";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlaprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlaprofiler/README.html