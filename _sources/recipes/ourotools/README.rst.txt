:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ourotools'
.. highlight: bash

ourotools
=========

.. conda:recipe:: ourotools
   :replaces_section_title:
   :noindex:

   A comprehensive toolkit for quality control and analysis of single\-cell long\-read RNA\-seq data

   :homepage: https://github.com/ahs2202/ouro-tools
   :documentation: https://pypi.org/project/ourotools/
   
   :license: MIT / MIT
   :recipe: /`ourotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ourotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ourotools/meta.yaml>`_

   Ouro\-Tools is a novel\, comprehensive computational pipeline for long\-read scRNA\-seq with the following key features. Ouro\-Tools \(1\) normalizes mRNA size distributions and \(2\) detects mRNA 7\-methylguanosine caps to integrate multiple single\-cell long\-read RNA\-sequencing experiments across modalities and characterize full\-length transcripts\, respectively.


.. conda:package:: ourotools

   |downloads_ourotools| |docker_ourotools|

   :versions:
      
      

      ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``

      

   
   :depends on bitarray: ``>=2.5.1``
   :depends on h5py: ``>=3.8.0``
   :depends on intervaltree: ``>=3.1.0``
   :depends on joblib: ``>=1.2.0``
   :depends on mappy: ``>=2.24``
   :depends on matplotlib-base: ``>=3.5.2``
   :depends on minimap2: ``>=2.28``
   :depends on nest-asyncio: ``>=1.5.6``
   :depends on numpy: ``>=1.26.4``
   :depends on owlready2: ``>=0.46``
   :depends on pandas: ``>=1.5.2``
   :depends on plotly: ``>=5.18.0``
   :depends on pybigwig: ``>=0.3.22``
   :depends on pysam: ``>=0.18.0``
   :depends on python: ``>=3.11``
   :depends on regex: ``>=2.5.135``
   :depends on samtools: ``>=1.10``
   :depends on scanpy: ``>=1.10.2``
   :depends on scipy: ``>=1.9.1``
   :depends on tqdm: ``>=4.64.1``

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

    pixi global install ourotools

to add into an existing workspace instead, run::

    pixi add ourotools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ourotools

Alternatively, to install into a new environment, run::

    conda create -n envname ourotools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ourotools:<tag>

(see `ourotools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ourotools| image:: https://img.shields.io/conda/dn/bioconda/ourotools.svg?style=flat
   :target: https://anaconda.org/bioconda/ourotools
   :alt:   (downloads)
.. |docker_ourotools| image:: https://quay.io/repository/biocontainers/ourotools/status
   :target: https://quay.io/repository/biocontainers/ourotools
.. _`ourotools/tags`: https://quay.io/repository/biocontainers/ourotools?tab=tags


.. raw:: html

    <script>
        var package = "ourotools";
        var versions = ["0.2.9","0.2.8","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ourotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ourotools/README.html