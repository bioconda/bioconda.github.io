:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vitap'
.. highlight: bash

vitap
=====

.. conda:recipe:: vitap
   :replaces_section_title:
   :noindex:

   Viral Taxonomic Assignment Pipeline

   :homepage: https://github.com/DrKaiyangZheng/VITAP/
   :documentation: https://github.com/DrKaiyangZheng/VITAP/blob/main/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`vitap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vitap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vitap/meta.yaml>`_

   Viral Taxonomic Assignment Pipeline \(VITAP\) is a cutting\-edge tool designed to address the growing need for accurate and comprehensive taxonomic assignments of DNA and RNA viral sequences based on ICTV VMR and UniRef90.


.. conda:package:: vitap

   |downloads_vitap| |docker_vitap|

   :versions:
      
      

      ``1.10-0``,  ``1.7.1-0``,  ``1.7-1``,  ``1.7-0``,  ``1.5-0``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on diamond: ``2.1.16.*``
   :depends on entrez-direct: ``>=16.2``
   :depends on pandas: ``>=1.5``
   :depends on polars: ``>=0.19``
   :depends on pyarrow: ``>=10``
   :depends on pyrodigal: ``>=3.6``
   :depends on python: 
   :depends on seqkit: 
   :depends on taxonkit: 
   :depends on tqdm: ``>=4.65.0``
   :depends on wget: 

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

    pixi global install vitap

to add into an existing workspace instead, run::

    pixi add vitap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vitap

Alternatively, to install into a new environment, run::

    conda create -n envname vitap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vitap:<tag>

(see `vitap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vitap| image:: https://img.shields.io/conda/dn/bioconda/vitap.svg?style=flat
   :target: https://anaconda.org/bioconda/vitap
   :alt:   (downloads)
.. |docker_vitap| image:: https://quay.io/repository/biocontainers/vitap/status
   :target: https://quay.io/repository/biocontainers/vitap
.. _`vitap/tags`: https://quay.io/repository/biocontainers/vitap?tab=tags


.. raw:: html

    <script>
        var package = "vitap";
        var versions = ["1.10","1.7.1","1.7","1.7","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vitap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vitap/README.html