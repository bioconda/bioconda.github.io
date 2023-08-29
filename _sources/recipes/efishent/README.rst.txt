:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'efishent'
.. highlight: bash

efishent
========

.. conda:recipe:: efishent
   :replaces_section_title:
   :noindex:

   A tool to design RNA FISH oligos\/probes

   :homepage: https://github.com/bbquercus/eFISHent/
   :license: MIT / MIT
   :recipe: /`efishent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/efishent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/efishent/meta.yaml>`_

   


.. conda:package:: efishent

   |downloads_efishent| |docker_efishent|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bowtie: 
   :depends entrez-direct: 
   :depends gtfparse: 
   :depends jellyfish: 
   :depends luigi: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pyarrow: 
   :depends pyomo: 
   :depends pysam: 
   :depends python: ``>=3.9``
   :depends rnastructure: 
   :depends samtools: 
   :depends tqdm: 
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

      mamba install efishent

   and update with::

      mamba update efishent

  To create a new environment, run::

      mamba create --name myenvname efishent

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/efishent:<tag>

   (see `efishent/tags`_ for valid values for ``<tag>``)


.. |downloads_efishent| image:: https://img.shields.io/conda/dn/bioconda/efishent.svg?style=flat
   :target: https://anaconda.org/bioconda/efishent
   :alt:   (downloads)
.. |docker_efishent| image:: https://quay.io/repository/biocontainers/efishent/status
   :target: https://quay.io/repository/biocontainers/efishent
.. _`efishent/tags`: https://quay.io/repository/biocontainers/efishent?tab=tags


.. raw:: html

    <script>
        var package = "efishent";
        var versions = ["0.0.5","0.0.4","0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/efishent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/efishent/README.html