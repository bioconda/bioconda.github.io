:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnqc'
.. highlight: bash

hmnqc
=====

.. conda:recipe:: hmnqc
   :replaces_section_title:
   :noindex:

   Compute differents metrics about quality\, check identity and coverage from high\-throughput sequencing provided by targeted NGS

   :homepage: https://github.com/guillaume-gricourt/HmnQc
   :license: MIT
   :recipe: /`hmnqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnqc/meta.yaml>`_

   


.. conda:package:: hmnqc

   |downloads_hmnqc| |docker_hmnqc|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends biopython: 
   :depends cnvkit: 
   :depends openpyxl: 
   :depends openssl: ``>=1.1.0,<=1.1.1``
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
   :depends xlsxwriter: 
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

      mamba install hmnqc

   and update with::

      mamba update hmnqc

  To create a new environment, run::

      mamba create --name myenvname hmnqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmnqc:<tag>

   (see `hmnqc/tags`_ for valid values for ``<tag>``)


.. |downloads_hmnqc| image:: https://img.shields.io/conda/dn/bioconda/hmnqc.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnqc
   :alt:   (downloads)
.. |docker_hmnqc| image:: https://quay.io/repository/biocontainers/hmnqc/status
   :target: https://quay.io/repository/biocontainers/hmnqc
.. _`hmnqc/tags`: https://quay.io/repository/biocontainers/hmnqc?tab=tags


.. raw:: html

    <script>
        var package = "hmnqc";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnqc/README.html