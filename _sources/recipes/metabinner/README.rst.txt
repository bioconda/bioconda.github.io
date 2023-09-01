:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabinner'
.. highlight: bash

metabinner
==========

.. conda:recipe:: metabinner
   :replaces_section_title:
   :noindex:

   Ensemble binning method to recover individual genomes from complex microbial communities

   :homepage: https://github.com/ziyewang/MetaBinner
   :license: BSD
   :recipe: /`metabinner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinner/meta.yaml>`_

   


.. conda:package:: metabinner

   |downloads_metabinner| |docker_metabinner|

   :versions:
      
      

      ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``

      

   
   :depends biolib: ``0.1.6.*``
   :depends biopython: ``1.76.*``
   :depends bwa: ``0.7.17.*``
   :depends checkm-genome: ``1.1.3.*``
   :depends click: ``7.1.2.*``
   :depends fraggenescan: ``1.31.*``
   :depends hmmer: ``3.1b2.*``
   :depends numpy: ``1.18.1.*``
   :depends pandas: ``1.0.1.*``
   :depends pplacer: ``1.1.alpha19.*``
   :depends prodigal: ``2.6.3.*``
   :depends python: ``3.7.6.*``
   :depends samtools: ``1.9.*``
   :depends scikit-learn: ``0.22.1.*``
   :depends scipy: ``1.4.1.*``
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

      mamba install metabinner

   and update with::

      mamba update metabinner

  To create a new environment, run::

      mamba create --name myenvname metabinner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metabinner:<tag>

   (see `metabinner/tags`_ for valid values for ``<tag>``)


.. |downloads_metabinner| image:: https://img.shields.io/conda/dn/bioconda/metabinner.svg?style=flat
   :target: https://anaconda.org/bioconda/metabinner
   :alt:   (downloads)
.. |docker_metabinner| image:: https://quay.io/repository/biocontainers/metabinner/status
   :target: https://quay.io/repository/biocontainers/metabinner
.. _`metabinner/tags`: https://quay.io/repository/biocontainers/metabinner?tab=tags


.. raw:: html

    <script>
        var package = "metabinner";
        var versions = ["1.4.4","1.4.3","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabinner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabinner/README.html