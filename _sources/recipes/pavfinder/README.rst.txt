:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pavfinder'
.. highlight: bash

pavfinder
=========

.. conda:recipe:: pavfinder
   :replaces_section_title:
   :noindex:

   PAVFinder is a Python package that detects structural variants from de novo assemblies.

   :homepage: https://github.com/bcgsc/pavfinder
   :license: GPL-3.0
   :recipe: /`pavfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pavfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pavfinder/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12920-018-0402-6`, doi: :doi:`10.1093/bioinformatics/btz902`

   


.. conda:package:: pavfinder

   |downloads_pavfinder| |docker_pavfinder|

   :versions:
      
      

      ``1.8.5-0``

      

   
   :depends bash: 
   :depends biobloomtools: 
   :depends biopython: 
   :depends blast: 
   :depends bwa: 
   :depends gmap: 
   :depends intspan: ``>=0.701``
   :depends make: 
   :depends pybedtools: ``>=0.6.9``
   :depends pysam: ``>=0.8.1``
   :depends python: ``>=3``
   :depends rnabloom: 
   :depends ruffus: 
   :depends samtools: 
   :depends transabyss: 
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

      mamba install pavfinder

   and update with::

      mamba update pavfinder

  To create a new environment, run::

      mamba create --name myenvname pavfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pavfinder:<tag>

   (see `pavfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_pavfinder| image:: https://img.shields.io/conda/dn/bioconda/pavfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/pavfinder
   :alt:   (downloads)
.. |docker_pavfinder| image:: https://quay.io/repository/biocontainers/pavfinder/status
   :target: https://quay.io/repository/biocontainers/pavfinder
.. _`pavfinder/tags`: https://quay.io/repository/biocontainers/pavfinder?tab=tags


.. raw:: html

    <script>
        var package = "pavfinder";
        var versions = ["1.8.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pavfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pavfinder/README.html