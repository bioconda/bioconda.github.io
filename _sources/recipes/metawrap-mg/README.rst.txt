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

      

   
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on prokka: ``1.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-annotate-bins

to add into an existing workspace instead, run::

    pixi add metawrap-annotate-bins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-annotate-bins

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-annotate-bins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-annotate-bins:<tag>

(see `metawrap-annotate-bins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on bowtie2: ``2.3.5.*``
   :depends on bwa: ``0.7.17.*``
   :depends on megahit: ``1.1.3.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on quast: ``5.0.2.*``
   :depends on spades: ``3.13.0.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-assembly

to add into an existing workspace instead, run::

    pixi add metawrap-assembly

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-assembly

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-assembly

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-assembly:<tag>

(see `metawrap-assembly/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on bwa: ``0.7.17.*``
   :depends on checkm-genome: ``1.0.12.*``
   :depends on concoct: ``1.0.0.*``
   :depends on curl: 
   :depends on libgfortran: ``3.*``
   :depends on maxbin2: ``2.2.6.*``
   :depends on metabat2: ``2.12.1.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on pplacer: ``1.1.alpha19.*``
   :depends on samtools: ``1.9.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-binning

to add into an existing workspace instead, run::

    pixi add metawrap-binning

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-binning

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-binning

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-binning:<tag>

(see `metawrap-binning/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on blast: ``2.6.0.*``
   :depends on bowtie2: ``2.3.5.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on perl-bioperl: 
   :depends on r-ggplot2: ``3.1.0.*``
   :depends on r-recommended: ``3.5.1.*``
   :depends on r-reshape2: 
   :depends on samtools: ``1.9.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-blobology

to add into an existing workspace instead, run::

    pixi add metawrap-blobology

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-blobology

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-blobology

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-blobology:<tag>

(see `metawrap-blobology/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on blast: ``2.6.0.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on taxator-tk: ``1.3.3e.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-classify-bins

to add into an existing workspace instead, run::

    pixi add metawrap-classify-bins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-classify-bins

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-classify-bins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-classify-bins:<tag>

(see `metawrap-classify-bins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on jellyfish: 
   :depends on kraken: ``1.1.1.*``
   :depends on kraken2: ``2.0.*``
   :depends on krona: ``2.7.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-kraken

to add into an existing workspace instead, run::

    pixi add metawrap-kraken

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-kraken

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-kraken

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-kraken:<tag>

(see `metawrap-kraken/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on biopython: ``1.72.*``
   :depends on python: ``2.7.15.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-mg

to add into an existing workspace instead, run::

    pixi add metawrap-mg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-mg

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-mg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-mg:<tag>

(see `metawrap-mg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on matplotlib-base: ``2.2.5.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on pandas: ``0.24.2.*``
   :depends on salmon: ``0.15.0.*``
   :depends on seaborn: ``0.9.0.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-quant-bins

to add into an existing workspace instead, run::

    pixi add metawrap-quant-bins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-quant-bins

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-quant-bins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-quant-bins:<tag>

(see `metawrap-quant-bins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on bmtagger: ``3.101.*``
   :depends on fastqc: ``0.11.8.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on trim-galore: ``0.5.0.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-read-qc

to add into an existing workspace instead, run::

    pixi add metawrap-read-qc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-read-qc

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-read-qc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-read-qc:<tag>

(see `metawrap-read-qc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on bwa: ``0.7.17.*``
   :depends on checkm-genome: ``1.0.12.*``
   :depends on curl: 
   :depends on matplotlib-base: ``2.2.5.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on minimap2: 
   :depends on pplacer: ``1.1.alpha19.*``
   :depends on spades: ``3.13.0.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-reassemble-bins

to add into an existing workspace instead, run::

    pixi add metawrap-reassemble-bins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-reassemble-bins

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-reassemble-bins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-reassemble-bins:<tag>

(see `metawrap-reassemble-bins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

      

   
   :depends on checkm-genome: ``1.0.12.*``
   :depends on curl: 
   :depends on jellyfish: 
   :depends on kraken: ``1.1.1.*``
   :depends on krona: ``2.7.*``
   :depends on matplotlib-base: ``2.2.5.*``
   :depends on metawrap-mg: ``>=1.3.0,<1.4.0a0``
   :depends on pplacer: ``1.1.alpha19.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawrap-refinement

to add into an existing workspace instead, run::

    pixi add metawrap-refinement

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawrap-refinement

Alternatively, to install into a new environment, run::

    conda create -n envname metawrap-refinement

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawrap-refinement:<tag>

(see `metawrap-refinement/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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