:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'te-aid'
.. highlight: bash

te-aid
======

.. conda:recipe:: te-aid
   :replaces_section_title:
   :noindex:

   Annotation helper tool for the manual curation of transposable element consensus sequences

   :homepage: https://github.com/clemgoub/TE-Aid/tree/v{version}
   :developer docs: https://github.com/clemgoub/TE-Aid
   :license: MIT
   :recipe: /`te-aid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/te-aid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/te-aid/meta.yaml>`_

   TE\-Aid is a shell\+R program aimed to help the manual curation of transposable 
   elements \(TE\). It inputs a TE consensus sequence \(fasta format\) and requires a 
   reference genome \(in fasta as well\). TE\-Aid produces 4 figures reporting i\) the genomic 
   hits with divergence to consensus\, ii\) the genomic coverage of the consensus\, 
   iii\) a self dot\-plot\, and iv\) a structure analysis including TIR and LTR suggestions\, 
   open reading frames \(ORFs\) and TE protein hit annotation.


.. conda:package:: te-aid

   |downloads_te-aid| |docker_te-aid|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.70.1``
   :depends on blast: ``>=2.15.0``
   :depends on emboss: ``>=6.6.0``
   :depends on r: ``>=4.2``
   :depends on r-rcpp: ``>=1.0.12``

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

    pixi global install te-aid

to add into an existing workspace instead, run::

    pixi add te-aid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install te-aid

Alternatively, to install into a new environment, run::

    conda create -n envname te-aid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/te-aid:<tag>

(see `te-aid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_te-aid| image:: https://img.shields.io/conda/dn/bioconda/te-aid.svg?style=flat
   :target: https://anaconda.org/bioconda/te-aid
   :alt:   (downloads)
.. |docker_te-aid| image:: https://quay.io/repository/biocontainers/te-aid/status
   :target: https://quay.io/repository/biocontainers/te-aid
.. _`te-aid/tags`: https://quay.io/repository/biocontainers/te-aid?tab=tags


.. raw:: html

    <script>
        var package = "te-aid";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/te-aid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/te-aid/README.html