:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comebin'
.. highlight: bash

comebin
=======

.. conda:recipe:: comebin
   :replaces_section_title:
   :noindex:

   COMEBin allows effective binning of metagenomic contigs using COntrastive Multi\-viEw representation learning

   :homepage: https://github.com/ziyewang/COMEBin
   :license: BSD
   :recipe: /`comebin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comebin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comebin/meta.yaml>`_

   


.. conda:package:: comebin

   |downloads_comebin| |docker_comebin|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends atomicwrites: ``1.4.0.*``
   :depends bedtools: ``2.30.0.*``
   :depends biolib: ``0.1.6.*``
   :depends biopython: ``1.76.*``
   :depends bwa: ``0.7.17.*``
   :depends checkm-genome: ``1.1.3.*``
   :depends click: ``8.0.4.*``
   :depends fraggenescan: ``1.31.*``
   :depends hmmer: ``3.1b2.*``
   :depends hnswlib: ``0.6.2.*``
   :depends igraph: ``0.9.9.*``
   :depends joblib: ``1.1.0.*``
   :depends leidenalg: ``0.8.10.*``
   :depends matplotlib-base: ``3.5.1.*``
   :depends matplotlib-inline: ``0.1.3.*``
   :depends networkx: ``2.6.3.*``
   :depends numpy: ``1.19.0.*``
   :depends pandas: ``1.3.5.*``
   :depends pip: ``22.0.4.*``
   :depends pplacer: ``1.1.alpha19.*``
   :depends prodigal: ``2.6.3.*``
   :depends python: ``3.7.*``
   :depends python-dateutil: ``2.8.2.*``
   :depends python-fastjsonschema: ``2.15.3.*``
   :depends pytorch: ``1.10.2.*``
   :depends pyyaml: ``6.0.*``
   :depends samtools: ``1.15.1.*``
   :depends scanpy: ``1.9.1.*``
   :depends scikit-learn: ``0.22.1.*``
   :depends scipy: ``1.7.3.*``
   :depends seaborn: ``0.12.1.*``
   :depends setuptools: ``59.5.0.*``
   :depends tensorboard: ``1.15.0.*``
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

      mamba install comebin

   and update with::

      mamba update comebin

  To create a new environment, run::

      mamba create --name myenvname comebin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/comebin:<tag>

   (see `comebin/tags`_ for valid values for ``<tag>``)


.. |downloads_comebin| image:: https://img.shields.io/conda/dn/bioconda/comebin.svg?style=flat
   :target: https://anaconda.org/bioconda/comebin
   :alt:   (downloads)
.. |docker_comebin| image:: https://quay.io/repository/biocontainers/comebin/status
   :target: https://quay.io/repository/biocontainers/comebin
.. _`comebin/tags`: https://quay.io/repository/biocontainers/comebin?tab=tags


.. raw:: html

    <script>
        var package = "comebin";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comebin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comebin/README.html