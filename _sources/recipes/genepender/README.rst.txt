:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genepender'
.. highlight: bash

genepender
==========

.. conda:recipe:: genepender
   :replaces_section_title:
   :noindex:

   Annotates overlapping BED\-defined regions to variants in a VCF file. Used primarily for providing a gene\/exon context to variants \(see\:bedtarget\).

   :homepage: https://github.com/BioTools-Tek/genepender
   :license: GPLv3
   :recipe: /`genepender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepender/meta.yaml>`_

   


.. conda:package:: genepender

   |downloads_genepender| |docker_genepender|

   :versions:
      
      

      ``v2.6-1``,  ``v2.6-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends qt: ``4.8.7.*``
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

      mamba install genepender

   and update with::

      mamba update genepender

  To create a new environment, run::

      mamba create --name myenvname genepender

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genepender:<tag>

   (see `genepender/tags`_ for valid values for ``<tag>``)


.. |downloads_genepender| image:: https://img.shields.io/conda/dn/bioconda/genepender.svg?style=flat
   :target: https://anaconda.org/bioconda/genepender
   :alt:   (downloads)
.. |docker_genepender| image:: https://quay.io/repository/biocontainers/genepender/status
   :target: https://quay.io/repository/biocontainers/genepender
.. _`genepender/tags`: https://quay.io/repository/biocontainers/genepender?tab=tags


.. raw:: html

    <script>
        var package = "genepender";
        var versions = ["v2.6","v2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genepender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genepender/README.html