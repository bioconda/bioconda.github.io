:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consplice'
.. highlight: bash

consplice
=========

.. conda:recipe:: consplice
   :replaces_section_title:
   :noindex:

   The Constrained Splicing \(ConSplice\) python module

   :homepage: https://github.com/mikecormier/ConSplice
   :license: MIT
   :recipe: /`consplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consplice/meta.yaml>`_

   ConSplice is a python module used to \(1\) model the splicing constraint in the human genome\, and \(2\) an ensembl machine learning metric to score genetic variants for pathogenic splicing.


.. conda:package:: consplice

   |downloads_consplice| |docker_consplice|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends on bcftools: 
   :depends on biopython: 
   :depends on cyvcf2: 
   :depends on gsort: 
   :depends on gsort: ``>=0.1.4``
   :depends on htslib: 
   :depends on interlap: 
   :depends on ncls: ``0.0.53.*``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyfaidx: 
   :depends on pyranges: ``0.0.92.*``
   :depends on pysam: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on scikit-learn: 
   :depends on scipy: 

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

    pixi global install consplice

to add into an existing workspace instead, run::

    pixi add consplice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install consplice

Alternatively, to install into a new environment, run::

    conda create -n envname consplice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/consplice:<tag>

(see `consplice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_consplice| image:: https://img.shields.io/conda/dn/bioconda/consplice.svg?style=flat
   :target: https://anaconda.org/bioconda/consplice
   :alt:   (downloads)
.. |docker_consplice| image:: https://quay.io/repository/biocontainers/consplice/status
   :target: https://quay.io/repository/biocontainers/consplice
.. _`consplice/tags`: https://quay.io/repository/biocontainers/consplice?tab=tags


.. raw:: html

    <script>
        var package = "consplice";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consplice/README.html