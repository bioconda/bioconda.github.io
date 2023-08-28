:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seroba'
.. highlight: bash

seroba
======

.. conda:recipe:: seroba
   :replaces_section_title:
   :noindex:

   SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references.

   :homepage: https://github.com/sanger-pathogens/seroba
   :license: GPL / GPL3.0
   :recipe: /`seroba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba/meta.yaml>`_

   SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references. 
   You can use SeroBA to download references from \(https\:\/\/github.com\/phe\-bioinformatics\/PneumoCaT\) 
   to do identify the capsular type of Streptococcus pneumoniae.



.. conda:package:: seroba

   |downloads_seroba| |docker_seroba|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends ariba: ``>=2.9.1``
   :depends bcftools: ``<=1.14``
   :depends biopython: ``>=1.68,<1.78``
   :depends bowtie2: 
   :depends cd-hit: 
   :depends kmc: ``>=3.2.1``
   :depends mummer: 
   :depends pyfastaq: ``>=3.14.0``
   :depends pymummer: ``>=0.11.0``
   :depends pysam: ``>=0.15.3,<=0.18.0``
   :depends python: ``>=3``
   :depends pyyaml: ``>=3.12``
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

      mamba install seroba

   and update with::

      mamba update seroba

  To create a new environment, run::

      mamba create --name myenvname seroba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seroba:<tag>

   (see `seroba/tags`_ for valid values for ``<tag>``)


.. |downloads_seroba| image:: https://img.shields.io/conda/dn/bioconda/seroba.svg?style=flat
   :target: https://anaconda.org/bioconda/seroba
   :alt:   (downloads)
.. |docker_seroba| image:: https://quay.io/repository/biocontainers/seroba/status
   :target: https://quay.io/repository/biocontainers/seroba
.. _`seroba/tags`: https://quay.io/repository/biocontainers/seroba?tab=tags


.. raw:: html

    <script>
        var package = "seroba";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seroba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seroba/README.html