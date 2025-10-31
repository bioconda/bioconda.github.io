:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metawrap-mg'
.. highlight: bash

metawrap-mg
===========

.. conda:recipe:: metawrap-mg
   :replaces_section_title:
   :noindex:

   MetaWRAP is a pipeline for genome\-resolved metagenomic data analysis

   :homepage: https://github.com/bxlab/metaWRAP
   :license: MIT
   :recipe: /`metawrap-mg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawrap-mg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawrap-mg/meta.yaml>`_

   


.. conda:package:: metawrap-annotate-bins

   |downloads_metawrap-annotate-bins| |docker_metawrap-annotate-bins|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends prokka: ``1.*``
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

      mamba install metawrap-annotate-bins

   and update with::

      mamba update metawrap-annotate-bins

  To create a new environment, run::

      mamba create --name myenvname metawrap-annotate-bins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-annotate-bins:<tag>

   (see `metawrap-annotate-bins/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-annotate-bins| image:: https://img.shields.io/conda/dn/bioconda/metawrap-annotate-bins.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-annotate-bins
   :alt:   (downloads)
.. |docker_metawrap-annotate-bins| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-annotate-bins/tags`: https://quay.io/repository/biocontainers/metawrap-annotate-bins?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-assembly

   |downloads_metawrap-assembly| |docker_metawrap-assembly|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends bowtie2: ``2.3.5.*``
   :depends bwa: ``0.7.17.*``
   :depends megahit: ``1.1.3.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends quast: ``5.0.2.*``
   :depends spades: ``3.13.0.*``
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

      mamba install metawrap-assembly

   and update with::

      mamba update metawrap-assembly

  To create a new environment, run::

      mamba create --name myenvname metawrap-assembly

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-assembly:<tag>

   (see `metawrap-assembly/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-assembly| image:: https://img.shields.io/conda/dn/bioconda/metawrap-assembly.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-assembly
   :alt:   (downloads)
.. |docker_metawrap-assembly| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-assembly/tags`: https://quay.io/repository/biocontainers/metawrap-assembly?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-binning

   |downloads_metawrap-binning| |docker_metawrap-binning|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends bwa: ``0.7.17.*``
   :depends checkm-genome: ``1.0.12.*``
   :depends concoct: ``1.0.0.*``
   :depends curl: 
   :depends libgfortran: ``3.*``
   :depends maxbin2: ``2.2.6.*``
   :depends metabat2: ``2.12.1.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends pplacer: ``1.1.alpha19.*``
   :depends samtools: ``1.9.*``
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

      mamba install metawrap-binning

   and update with::

      mamba update metawrap-binning

  To create a new environment, run::

      mamba create --name myenvname metawrap-binning

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-binning:<tag>

   (see `metawrap-binning/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-binning| image:: https://img.shields.io/conda/dn/bioconda/metawrap-binning.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-binning
   :alt:   (downloads)
.. |docker_metawrap-binning| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-binning/tags`: https://quay.io/repository/biocontainers/metawrap-binning?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-blobology

   |downloads_metawrap-blobology| |docker_metawrap-blobology|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends blast: ``2.6.0.*``
   :depends bowtie2: ``2.3.5.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends perl-bioperl: 
   :depends r-ggplot2: ``3.1.0.*``
   :depends r-recommended: ``3.5.1.*``
   :depends r-reshape2: 
   :depends samtools: ``1.9.*``
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

      mamba install metawrap-blobology

   and update with::

      mamba update metawrap-blobology

  To create a new environment, run::

      mamba create --name myenvname metawrap-blobology

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-blobology:<tag>

   (see `metawrap-blobology/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-blobology| image:: https://img.shields.io/conda/dn/bioconda/metawrap-blobology.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-blobology
   :alt:   (downloads)
.. |docker_metawrap-blobology| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-blobology/tags`: https://quay.io/repository/biocontainers/metawrap-blobology?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-classify-bins

   |downloads_metawrap-classify-bins| |docker_metawrap-classify-bins|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends blast: ``2.6.0.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends taxator-tk: ``1.3.3e.*``
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

      mamba install metawrap-classify-bins

   and update with::

      mamba update metawrap-classify-bins

  To create a new environment, run::

      mamba create --name myenvname metawrap-classify-bins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-classify-bins:<tag>

   (see `metawrap-classify-bins/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-classify-bins| image:: https://img.shields.io/conda/dn/bioconda/metawrap-classify-bins.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-classify-bins
   :alt:   (downloads)
.. |docker_metawrap-classify-bins| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-classify-bins/tags`: https://quay.io/repository/biocontainers/metawrap-classify-bins?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-kraken

   |downloads_metawrap-kraken| |docker_metawrap-kraken|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends jellyfish: 
   :depends kraken: ``1.1.1.*``
   :depends kraken2: ``2.0.*``
   :depends krona: ``2.7.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
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

      mamba install metawrap-kraken

   and update with::

      mamba update metawrap-kraken

  To create a new environment, run::

      mamba create --name myenvname metawrap-kraken

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-kraken:<tag>

   (see `metawrap-kraken/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-kraken| image:: https://img.shields.io/conda/dn/bioconda/metawrap-kraken.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-kraken
   :alt:   (downloads)
.. |docker_metawrap-kraken| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-kraken/tags`: https://quay.io/repository/biocontainers/metawrap-kraken?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-mg

   |downloads_metawrap-mg| |docker_metawrap-mg|

   :versions:
      
      

      ``1.3.0-3``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends biopython: ``1.72.*``
   :depends python: ``2.7.15.*``
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

      mamba install metawrap-mg

   and update with::

      mamba update metawrap-mg

  To create a new environment, run::

      mamba create --name myenvname metawrap-mg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-mg:<tag>

   (see `metawrap-mg/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-mg| image:: https://img.shields.io/conda/dn/bioconda/metawrap-mg.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-mg
   :alt:   (downloads)
.. |docker_metawrap-mg| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-mg/tags`: https://quay.io/repository/biocontainers/metawrap-mg?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0","1.3.0","1.3.0"];
    </script>


.. conda:package:: metawrap-quant-bins

   |downloads_metawrap-quant-bins| |docker_metawrap-quant-bins|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends matplotlib-base: ``2.2.5.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends pandas: ``0.24.2.*``
   :depends salmon: ``0.15.0.*``
   :depends seaborn: ``0.9.0.*``
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

      mamba install metawrap-quant-bins

   and update with::

      mamba update metawrap-quant-bins

  To create a new environment, run::

      mamba create --name myenvname metawrap-quant-bins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-quant-bins:<tag>

   (see `metawrap-quant-bins/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-quant-bins| image:: https://img.shields.io/conda/dn/bioconda/metawrap-quant-bins.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-quant-bins
   :alt:   (downloads)
.. |docker_metawrap-quant-bins| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-quant-bins/tags`: https://quay.io/repository/biocontainers/metawrap-quant-bins?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-read-qc

   |downloads_metawrap-read-qc| |docker_metawrap-read-qc|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends bmtagger: ``3.101.*``
   :depends fastqc: ``0.11.8.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends trim-galore: ``0.5.0.*``
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

      mamba install metawrap-read-qc

   and update with::

      mamba update metawrap-read-qc

  To create a new environment, run::

      mamba create --name myenvname metawrap-read-qc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-read-qc:<tag>

   (see `metawrap-read-qc/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-read-qc| image:: https://img.shields.io/conda/dn/bioconda/metawrap-read-qc.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-read-qc
   :alt:   (downloads)
.. |docker_metawrap-read-qc| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-read-qc/tags`: https://quay.io/repository/biocontainers/metawrap-read-qc?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-reassemble-bins

   |downloads_metawrap-reassemble-bins| |docker_metawrap-reassemble-bins|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends bwa: ``0.7.17.*``
   :depends checkm-genome: ``1.0.12.*``
   :depends curl: 
   :depends matplotlib-base: ``2.2.5.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends minimap2: 
   :depends pplacer: ``1.1.alpha19.*``
   :depends spades: ``3.13.0.*``
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

      mamba install metawrap-reassemble-bins

   and update with::

      mamba update metawrap-reassemble-bins

  To create a new environment, run::

      mamba create --name myenvname metawrap-reassemble-bins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-reassemble-bins:<tag>

   (see `metawrap-reassemble-bins/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-reassemble-bins| image:: https://img.shields.io/conda/dn/bioconda/metawrap-reassemble-bins.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-reassemble-bins
   :alt:   (downloads)
.. |docker_metawrap-reassemble-bins| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-reassemble-bins/tags`: https://quay.io/repository/biocontainers/metawrap-reassemble-bins?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>


.. conda:package:: metawrap-refinement

   |downloads_metawrap-refinement| |docker_metawrap-refinement|

   :versions:
      
      

      ``1.3.0-3``

      

   
   :depends checkm-genome: ``1.0.12.*``
   :depends curl: 
   :depends jellyfish: 
   :depends kraken: ``1.1.1.*``
   :depends krona: ``2.7.*``
   :depends matplotlib-base: ``2.2.5.*``
   :depends metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends pplacer: ``1.1.alpha19.*``
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

      mamba install metawrap-refinement

   and update with::

      mamba update metawrap-refinement

  To create a new environment, run::

      mamba create --name myenvname metawrap-refinement

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-refinement:<tag>

   (see `metawrap-refinement/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-refinement| image:: https://img.shields.io/conda/dn/bioconda/metawrap-refinement.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-refinement
   :alt:   (downloads)
.. |docker_metawrap-refinement| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-refinement/tags`: https://quay.io/repository/biocontainers/metawrap-refinement?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawrap-mg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawrap-mg/README.html