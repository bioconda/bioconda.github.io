:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylpy'
.. highlight: bash

methylpy
========

.. conda:recipe:: methylpy
   :replaces_section_title:
   :noindex:

   Bisulfite sequencing data processing and differential methylation analysis

   :homepage: https://github.com/yupenghe/methylpy
   :license: APACHE / Apache 2.0
   :recipe: /`methylpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylpy/meta.yaml>`_
   :links: doi: :doi:`10.1038/nature14465`

   


.. conda:package:: methylpy

   |downloads_methylpy| |docker_methylpy|

   :versions:
      
      

      ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``

      

   
   :depends bowtie: 
   :depends bowtie2: 
   :depends cutadapt: ``>=1.9``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libcxx: ``>=9.0.1``
   :depends minimap2: 
   :depends numpy: ``>=1.6.1``
   :depends openjdk: 
   :depends picard: ``>=2.10.8``
   :depends pysam: ``>=0.5.3``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: ``>=1.3``
   :depends scipy: ``>=0.10.0``
   :depends ucsc-wigtobigwig: 
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

      mamba install methylpy

   and update with::

      mamba update methylpy

  To create a new environment, run::

      mamba create --name myenvname methylpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/methylpy:<tag>

   (see `methylpy/tags`_ for valid values for ``<tag>``)


.. |downloads_methylpy| image:: https://img.shields.io/conda/dn/bioconda/methylpy.svg?style=flat
   :target: https://anaconda.org/bioconda/methylpy
   :alt:   (downloads)
.. |docker_methylpy| image:: https://quay.io/repository/biocontainers/methylpy/status
   :target: https://quay.io/repository/biocontainers/methylpy
.. _`methylpy/tags`: https://quay.io/repository/biocontainers/methylpy?tab=tags


.. raw:: html

    <script>
        var package = "methylpy";
        var versions = ["1.4.3","1.4.3","1.4.2","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylpy/README.html