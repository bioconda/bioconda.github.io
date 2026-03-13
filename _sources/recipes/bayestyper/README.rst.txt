:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayestyper'
.. highlight: bash

bayestyper
==========

.. conda:recipe:: bayestyper
   :replaces_section_title:
   :noindex:

   A method for variant graph genotyping based on exact alignment of k\-mers.

   :homepage: https://github.com/bioinformatics-centre/BayesTyper
   :documentation: https://github.com/bioinformatics-centre/BayesTyper/blob/v1.5/README.md
   
   :license: MIT / MIT
   :recipe: /`bayestyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayestyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayestyper/meta.yaml>`_
   :links: biotools: :biotools:`bayestyper`, doi: :doi:`10.1038/s41588-018-0145-5`

   


.. conda:package:: bayestyper

   |downloads_bayestyper| |docker_bayestyper|

   :versions:
      
      

      ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bayestyper

to add into an existing workspace instead, run::

    pixi add bayestyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bayestyper

Alternatively, to install into a new environment, run::

    conda create -n envname bayestyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bayestyper:<tag>

(see `bayestyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bayestyper| image:: https://img.shields.io/conda/dn/bioconda/bayestyper.svg?style=flat
   :target: https://anaconda.org/bioconda/bayestyper
   :alt:   (downloads)
.. |docker_bayestyper| image:: https://quay.io/repository/biocontainers/bayestyper/status
   :target: https://quay.io/repository/biocontainers/bayestyper
.. _`bayestyper/tags`: https://quay.io/repository/biocontainers/bayestyper?tab=tags


.. raw:: html

    <script>
        var package = "bayestyper";
        var versions = ["1.5","1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayestyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayestyper/README.html