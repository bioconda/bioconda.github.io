:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'star-fusion'
.. highlight: bash

star-fusion
===========

.. conda:recipe:: star-fusion
   :replaces_section_title:
   :noindex:

   STAR\-Fusion fusion variant caller. All dependencies required to run FusionInspector and FusionAnnotator are included.

   :homepage: https://github.com/STAR-Fusion/STAR-Fusion
   :documentation: https://github.com/STAR-Fusion/STAR-Fusion/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`star-fusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star-fusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star-fusion/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-019-1842-9`, biotools: :biotools:`star-fusion`, usegalaxy-eu: :usegalaxy-eu:`star_fusion`

   


.. conda:package:: star-fusion

   |downloads_star-fusion| |docker_star-fusion|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15.1-1</code>,  <code>1.15.1-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.13.0-1</code>,  <code>1.13.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.15.1-1``,  ``1.15.1-0``,  ``1.15.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.11.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: 
   :depends on blast: 
   :depends on bzip2: 
   :depends on gmap: 
   :depends on htslib: 
   :depends on igv-reports: 
   :depends on openssl: 
   :depends on perl: 
   :depends on perl-carp: 
   :depends on perl-carp-assert: 
   :depends on perl-db_file: 
   :depends on perl-json-xs: 
   :depends on perl-perlio-gzip: 
   :depends on perl-set-intervaltree: 
   :depends on perl-uri: 
   :depends on python: 
   :depends on samtools: ``<1.10``
   :depends on star: ``2.7.11b``
   :depends on trinity: ``<2.9``

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

    pixi global install star-fusion

to add into an existing workspace instead, run::

    pixi add star-fusion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install star-fusion

Alternatively, to install into a new environment, run::

    conda create -n envname star-fusion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/star-fusion:<tag>

(see `star-fusion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_star-fusion| image:: https://img.shields.io/conda/dn/bioconda/star-fusion.svg?style=flat
   :target: https://anaconda.org/bioconda/star-fusion
   :alt:   (downloads)
.. |docker_star-fusion| image:: https://quay.io/repository/biocontainers/star-fusion/status
   :target: https://quay.io/repository/biocontainers/star-fusion
.. _`star-fusion/tags`: https://quay.io/repository/biocontainers/star-fusion?tab=tags


.. raw:: html

    <script>
        var package = "star-fusion";
        var versions = ["1.15.1","1.15.1","1.15.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/star-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/star-fusion/README.html