:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'braker2'
.. highlight: bash

braker2
=======

.. conda:recipe:: braker2
   :replaces_section_title:
   :noindex:

   BRAKER2 is an extension of BRAKER1

   :homepage: https://github.com/Gaius-Augustus/BRAKER
   :license: Other / Artistic License
   :recipe: /`braker2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker2/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqaa108`

   BRAKER2 is an extension of BRAKER1 which allows for fully automated training of the gene prediction tools GeneMark\-EX and AUGUSTUS from RNA\-Seq and\/or protein homology information\, and that integrates the extrinsic evidence from RNA\-Seq and protein homology information into the prediction.


.. conda:package:: braker2

   |downloads_braker2| |docker_braker2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.6-5</code>,  <code>2.1.6-4</code>,  <code>2.1.6-3</code>,  <code>2.1.6-2</code>,  <code>2.1.6-1</code>,  <code>2.1.6-0</code>,  <code>2.1.5-3</code>,  <code>2.1.5-2</code>,  <code>2.1.5-1</code>,  </span></summary>
      

      ``2.1.6-5``,  ``2.1.6-4``,  ``2.1.6-3``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``,  ``2.1.5-3``,  ``2.1.5-2``,  ``2.1.5-1``,  ``2.1.5-0``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on augustus: ``>=3.4.0``
   :depends on bamtools: ``>=2.5.1``
   :depends on biopython: 
   :depends on blast: ``>=2.2.31``
   :depends on cdbtools: ``>=0.99``
   :depends on diamond: ``>=0.9.24``
   :depends on exonerate: ``>=2.2.0``
   :depends on gemoma: ``1.6.4``
   :depends on genomethreader: ``>=1.7.0``
   :depends on makehub: 
   :depends on perl: 
   :depends on perl-app-cpanminus: 
   :depends on perl-class-data-inheritable: 
   :depends on perl-exception-class: 
   :depends on perl-file-homedir: 
   :depends on perl-file-spec: 
   :depends on perl-file-which: 
   :depends on perl-hash-merge: 
   :depends on perl-list-moreutils: 
   :depends on perl-list-util: 
   :depends on perl-logger-simple: 
   :depends on perl-math-utils: 
   :depends on perl-mce: 
   :depends on perl-module-load-conditional: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-posix: 
   :depends on perl-scalar-util-numeric: 
   :depends on perl-test-pod: 
   :depends on perl-yaml: 
   :depends on python: ``>=3.3``
   :depends on samtools: ``>=1.7``
   :depends on spaln: ``>=2.3.3``

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

    pixi global install braker2

to add into an existing workspace instead, run::

    pixi add braker2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install braker2

Alternatively, to install into a new environment, run::

    conda create -n envname braker2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/braker2:<tag>

(see `braker2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_braker2| image:: https://img.shields.io/conda/dn/bioconda/braker2.svg?style=flat
   :target: https://anaconda.org/bioconda/braker2
   :alt:   (downloads)
.. |docker_braker2| image:: https://quay.io/repository/biocontainers/braker2/status
   :target: https://quay.io/repository/biocontainers/braker2
.. _`braker2/tags`: https://quay.io/repository/biocontainers/braker2?tab=tags


.. raw:: html

    <script>
        var package = "braker2";
        var versions = ["2.1.6","2.1.6","2.1.6","2.1.6","2.1.6"];
    </script>





Notes
-----
- GeneMark software can be used for free\, but requires a license file and should be additionally installed on the machine where the BRAKER2 environment is.

- ProtHint software can be used for free\, but doesn\'t allow redistribution and should be additionally installed on the machine where the BRAKER2 environment is.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/braker2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/braker2/README.html