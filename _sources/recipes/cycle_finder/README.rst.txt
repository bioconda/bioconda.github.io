:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cycle_finder'
.. highlight: bash

cycle_finder
============

.. conda:recipe:: cycle_finder
   :replaces_section_title:
   :noindex:

   A de novo analysis tool for tandem and interspersed repeats based on cycle\-finding.

   :homepage: https://github.com/rkajitani/cycle_finder
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`cycle_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cycle_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cycle_finder/meta.yaml>`_

   


.. conda:package:: cycle_finder

   |downloads_cycle_finder| |docker_cycle_finder|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on blast: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on cd-hit: 
   :depends on kmer-jellyfish: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on trf: 

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

    pixi global install cycle_finder

to add into an existing workspace instead, run::

    pixi add cycle_finder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cycle_finder

Alternatively, to install into a new environment, run::

    conda create -n envname cycle_finder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cycle_finder:<tag>

(see `cycle_finder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cycle_finder| image:: https://img.shields.io/conda/dn/bioconda/cycle_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/cycle_finder
   :alt:   (downloads)
.. |docker_cycle_finder| image:: https://quay.io/repository/biocontainers/cycle_finder/status
   :target: https://quay.io/repository/biocontainers/cycle_finder
.. _`cycle_finder/tags`: https://quay.io/repository/biocontainers/cycle_finder?tab=tags


.. raw:: html

    <script>
        var package = "cycle_finder";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cycle_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cycle_finder/README.html