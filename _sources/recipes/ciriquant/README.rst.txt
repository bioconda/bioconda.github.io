:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ciriquant'
.. highlight: bash

ciriquant
=========

.. conda:recipe:: ciriquant
   :replaces_section_title:
   :noindex:

   Circular RNA quantification pipeline.

   :homepage: https://github.com/bioinfo-biols/CIRIquant
   :documentation: https://ciri-cookbook.readthedocs.io/en/latest/CIRIquant_0_home.html
   
   :license: MIT / MIT
   :recipe: /`ciriquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciriquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciriquant/meta.yaml>`_

   


.. conda:package:: ciriquant

   |downloads_ciriquant| |docker_ciriquant|

   :versions:
      
      

      ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends argparse: 
   :depends bwa: 
   :depends hisat2: 
   :depends numexpr: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``2.7.15``
   :depends pyyaml: 
   :depends samtools: ``1.9``
   :depends scikit-learn: 
   :depends scipy: 
   :depends stringtie: 
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

      mamba install ciriquant

   and update with::

      mamba update ciriquant

  To create a new environment, run::

      mamba create --name myenvname ciriquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ciriquant:<tag>

   (see `ciriquant/tags`_ for valid values for ``<tag>``)


.. |downloads_ciriquant| image:: https://img.shields.io/conda/dn/bioconda/ciriquant.svg?style=flat
   :target: https://anaconda.org/bioconda/ciriquant
   :alt:   (downloads)
.. |docker_ciriquant| image:: https://quay.io/repository/biocontainers/ciriquant/status
   :target: https://quay.io/repository/biocontainers/ciriquant
.. _`ciriquant/tags`: https://quay.io/repository/biocontainers/ciriquant?tab=tags


.. raw:: html

    <script>
        var package = "ciriquant";
        var versions = ["1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ciriquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ciriquant/README.html