:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'braker3'
.. highlight: bash

braker3
=======

.. conda:recipe:: braker3
   :replaces_section_title:
   :noindex:

   BRAKER3 is the latest pipeline in the BRAKER suite

   :homepage: https://github.com/Gaius-Augustus/BRAKER
   :license: Other / Artistic License
   :recipe: /`braker3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker3/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.01.13.524024`

   BRAKER3 enables the usage of RNA\-seq and protein data in a fully automated pipeline to train and predict highly reliable genes with GeneMark\-ETP and AUGUSTUS. The result of the pipeline is the combined gene set of both gene prediction tools\, which only contains genes with very high support from extrinsic evidence.


.. conda:package:: braker3

   |downloads_braker3| |docker_braker3|

   :versions:
      
      

      ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.3-0``

      

   
   :depends on augustus: ``>=3.5.0``
   :depends on bamtools: ``>=2.5.1``
   :depends on biopython: 
   :depends on blast: ``>=2.12.0``
   :depends on cdbtools: ``>=0.99``
   :depends on compleasm: 
   :depends on diamond: ``>=2.1.6``
   :depends on exonerate: ``>=2.2.0``
   :depends on genomethreader: ``>=1.7.0``
   :depends on makehub: 
   :depends on perl: 
   :depends on perl-app-cpanminus: 
   :depends on perl-class-data-inheritable: 
   :depends on perl-data-dumper: 
   :depends on perl-exception-class: 
   :depends on perl-file-homedir: 
   :depends on perl-file-spec: 
   :depends on perl-file-which: 
   :depends on perl-hash-merge: 
   :depends on perl-logger-simple: 
   :depends on perl-math-utils: 
   :depends on perl-mce: 
   :depends on perl-module-load-conditional: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-posix: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-scalar-util-numeric: 
   :depends on perl-test-pod: 
   :depends on perl-yaml: 
   :depends on perl-yaml-libyaml: 
   :depends on python: ``>=3.7``
   :depends on samtools: ``>=1.14``
   :depends on spaln: ``>=2.4.8``
   :depends on tsebra: 

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

    pixi global install braker3

to add into an existing workspace instead, run::

    pixi add braker3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install braker3

Alternatively, to install into a new environment, run::

    conda create -n envname braker3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/braker3:<tag>

(see `braker3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_braker3| image:: https://img.shields.io/conda/dn/bioconda/braker3.svg?style=flat
   :target: https://anaconda.org/bioconda/braker3
   :alt:   (downloads)
.. |docker_braker3| image:: https://quay.io/repository/biocontainers/braker3/status
   :target: https://quay.io/repository/biocontainers/braker3
.. _`braker3/tags`: https://quay.io/repository/biocontainers/braker3?tab=tags


.. raw:: html

    <script>
        var package = "braker3";
        var versions = ["3.0.8","3.0.7","3.0.6","3.0.3"];
    </script>





Notes
-----
- GeneMark software can be used for free\, but requires a license file and should be additionally installed on the machine where the BRAKER3 environment is.

- ProtHint software can be used for free\, but doesn\'t allow redistribution and should be additionally installed on the machine where the BRAKER3 environment is.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/braker3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/braker3/README.html