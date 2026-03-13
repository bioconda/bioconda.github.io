:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirnature'
.. highlight: bash

mirnature
=========

.. conda:recipe:: mirnature
   :replaces_section_title:
   :noindex:

   MiRNAture improves on ideas from MIRfix and integrates it with homology search. miRNAture is specifically designed to identify and annotate metazoan miRNAs in a homology\-based setting and is complementary to tools and pipelines that extract miRNA candidates from small RNA\-seq data

   :homepage: https://github.com/Bierinformatik/miRNAture
   :license: GPL / GPL-3.0
   :recipe: /`mirnature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirnature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirnature/meta.yaml>`_

   


.. conda:package:: mirnature

   |downloads_mirnature| |docker_mirnature|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on blast: ``>=2.13.0``
   :depends on clustalo: ``>=1.2.4``
   :depends on hmmer: ``>=3.3.2``
   :depends on infernal: ``>=1.1.4``
   :depends on mirfix: ``>=2.1.1``
   :depends on parallel: ``>=20220922``
   :depends on perl: ``>=5.32.1``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl: ``>=1.6.924``
   :depends on perl-file-copy-recursive: ``>=0.45``
   :depends on perl-io-string: ``>=1.08``
   :depends on perl-io-stringy: ``>=2.113``
   :depends on perl-module-build: ``>=0.4224``
   :depends on perl-module-implementation: ``>=0.09``
   :depends on perl-moose: ``>=2.2201``
   :depends on perl-moosex-types-path-class: ``>=0.09``
   :depends on perl-statistics-r: ``>=0.34``
   :depends on perl-yaml-tiny: ``>=1.73``
   :depends on pyfaidx: ``>=0.7.1``
   :depends on python: ``>3``
   :depends on r-base: ``>=4.1.0``
   :depends on r-dplyr: ``>=1.0.10``
   :depends on rmblast: ``>=2.9.0``
   :depends on viennarna: ``>=2.4.15``

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

    pixi global install mirnature

to add into an existing workspace instead, run::

    pixi add mirnature

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirnature

Alternatively, to install into a new environment, run::

    conda create -n envname mirnature

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirnature:<tag>

(see `mirnature/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirnature| image:: https://img.shields.io/conda/dn/bioconda/mirnature.svg?style=flat
   :target: https://anaconda.org/bioconda/mirnature
   :alt:   (downloads)
.. |docker_mirnature| image:: https://quay.io/repository/biocontainers/mirnature/status
   :target: https://quay.io/repository/biocontainers/mirnature
.. _`mirnature/tags`: https://quay.io/repository/biocontainers/mirnature?tab=tags


.. raw:: html

    <script>
        var package = "mirnature";
        var versions = ["1.1","1.1","1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirnature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirnature/README.html