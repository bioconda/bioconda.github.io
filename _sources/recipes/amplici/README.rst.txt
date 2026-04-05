:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplici'
.. highlight: bash

amplici
=======

.. conda:recipe:: amplici
   :replaces_section_title:
   :noindex:

   AmpliCI\: Cluster amplicon sequences in a fastq file with or without UMIs.

   :homepage: https://github.com/DormanLab/AmpliCI
   :license: BSD / BSD 3-Clause
   :recipe: /`amplici <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplici>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplici/meta.yaml>`_
   :links: biotools: :biotools:`amplici`, doi: :doi:`10.1093/bioinformatics/btaa648`

   


.. conda:package:: amplici

   |downloads_amplici| |docker_amplici|

   :versions:
      
      

      ``2.2-1``,  ``2.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``
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

    pixi global install amplici

to add into an existing workspace instead, run::

    pixi add amplici

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amplici

Alternatively, to install into a new environment, run::

    conda create -n envname amplici

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amplici:<tag>

(see `amplici/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amplici| image:: https://img.shields.io/conda/dn/bioconda/amplici.svg?style=flat
   :target: https://anaconda.org/bioconda/amplici
   :alt:   (downloads)
.. |docker_amplici| image:: https://quay.io/repository/biocontainers/amplici/status
   :target: https://quay.io/repository/biocontainers/amplici
.. _`amplici/tags`: https://quay.io/repository/biocontainers/amplici?tab=tags


.. raw:: html

    <script>
        var package = "amplici";
        var versions = ["2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplici/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplici/README.html