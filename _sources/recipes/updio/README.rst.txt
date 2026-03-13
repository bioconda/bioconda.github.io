:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'updio'
.. highlight: bash

updio
=====

.. conda:recipe:: updio
   :replaces_section_title:
   :noindex:

   UPDio is designed to identify uniparental disomy in probands of trio VCF data.

   :homepage: https://github.com/rhpvorderman/updio
   :license: gpl-2.0-or-later
   :recipe: /`updio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/updio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/updio/meta.yaml>`_

   


.. conda:package:: updio

   |downloads_updio| |docker_updio|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on bioconductor-quantsmooth: 
   :depends on perl: ``<6``
   :depends on perl-iterator-simple: 
   :depends on perl-list-moreutils: 
   :depends on perl-math-round: 
   :depends on perl-path-class: 
   :depends on perl-statistics-r: 
   :depends on perl-vcftools-vcf: 
   :depends on r-ggplot2: 

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

    pixi global install updio

to add into an existing workspace instead, run::

    pixi add updio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install updio

Alternatively, to install into a new environment, run::

    conda create -n envname updio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/updio:<tag>

(see `updio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_updio| image:: https://img.shields.io/conda/dn/bioconda/updio.svg?style=flat
   :target: https://anaconda.org/bioconda/updio
   :alt:   (downloads)
.. |docker_updio| image:: https://quay.io/repository/biocontainers/updio/status
   :target: https://quay.io/repository/biocontainers/updio
.. _`updio/tags`: https://quay.io/repository/biocontainers/updio?tab=tags


.. raw:: html

    <script>
        var package = "updio";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/updio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/updio/README.html