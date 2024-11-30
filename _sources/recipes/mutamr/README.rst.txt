:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutamr'
.. highlight: bash

mutamr
======

.. conda:recipe:: mutamr
   :replaces_section_title:
   :noindex:

   Stripped down tool for generation of annotated vcf from paired\-end reads in a CPHL.

   :homepage: https://github.com/MDU-PHL/mutamr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mutamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutamr/meta.yaml>`_

   


.. conda:package:: mutamr

   |downloads_mutamr| |docker_mutamr|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends bcftools: ``1.20.*``
   :depends bwa: ``0.7.18.*``
   :depends delly: ``1.2.8.*``
   :depends freebayes: ``1.3.8.*``
   :depends python: ``>=3.10``
   :depends samclip: ``0.4.0.*``
   :depends samtools: ``1.20.*``
   :depends snpeff: ``5.2.*``
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

      mamba install mutamr

   and update with::

      mamba update mutamr

  To create a new environment, run::

      mamba create --name myenvname mutamr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mutamr:<tag>

   (see `mutamr/tags`_ for valid values for ``<tag>``)


.. |downloads_mutamr| image:: https://img.shields.io/conda/dn/bioconda/mutamr.svg?style=flat
   :target: https://anaconda.org/bioconda/mutamr
   :alt:   (downloads)
.. |docker_mutamr| image:: https://quay.io/repository/biocontainers/mutamr/status
   :target: https://quay.io/repository/biocontainers/mutamr
.. _`mutamr/tags`: https://quay.io/repository/biocontainers/mutamr?tab=tags


.. raw:: html

    <script>
        var package = "mutamr";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutamr/README.html