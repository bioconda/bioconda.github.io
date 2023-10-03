:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mkdesigner'
.. highlight: bash

mkdesigner
==========

.. conda:recipe:: mkdesigner
   :replaces_section_title:
   :noindex:

   Genome\-wide design of markers for PCR\-based genotyping from NGS data.

   :homepage: https://github.com/KChigira/mkdesigner/
   :license: MIT / MIT
   :recipe: /`mkdesigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mkdesigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mkdesigner/meta.yaml>`_

   


.. conda:package:: mkdesigner

   |downloads_mkdesigner| |docker_mkdesigner|

   :versions:
      
      

      ``0.3.1-0``,  ``0.2.1-0``,  ``0.1.1-0``,  ``0.0.1-0``

      

   
   :depends bcftools: ``>=1.5,<2.0``
   :depends blast: ``>=2.14.0,<3.0.0``
   :depends gatk4: ``>=4.4.0.0,<5.0.0.0``
   :depends matplotlib-base: 
   :depends pandas: ``>=2.0.2,<3.0.0``
   :depends picard: ``>=2.18.29,<3.0.0``
   :depends python: ``>=3.8,<4.0``
   :depends r-base: ``>=4.2.3,<5.0.0``
   :depends samtools: ``>=1.6,<2.0``
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

      mamba install mkdesigner

   and update with::

      mamba update mkdesigner

  To create a new environment, run::

      mamba create --name myenvname mkdesigner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mkdesigner:<tag>

   (see `mkdesigner/tags`_ for valid values for ``<tag>``)


.. |downloads_mkdesigner| image:: https://img.shields.io/conda/dn/bioconda/mkdesigner.svg?style=flat
   :target: https://anaconda.org/bioconda/mkdesigner
   :alt:   (downloads)
.. |docker_mkdesigner| image:: https://quay.io/repository/biocontainers/mkdesigner/status
   :target: https://quay.io/repository/biocontainers/mkdesigner
.. _`mkdesigner/tags`: https://quay.io/repository/biocontainers/mkdesigner?tab=tags


.. raw:: html

    <script>
        var package = "mkdesigner";
        var versions = ["0.3.1","0.2.1","0.1.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mkdesigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mkdesigner/README.html