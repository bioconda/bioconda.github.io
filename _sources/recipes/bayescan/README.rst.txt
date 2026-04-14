:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayescan'
.. highlight: bash

bayescan
========

.. conda:recipe:: bayescan
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Randomized Axelerated Maximum Likelihood.

   :homepage: https://cmpg.unibe.ch/software/BayeScan
   :documentation: https://cmpg.unibe.ch/software/BayeScan/files/BayeScan2.1_manual.pdf
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bayescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescan/meta.yaml>`_
   :links: biotools: :biotools:`bayescan`, usegalaxy-eu: :usegalaxy-eu:`BayeScan`, doi: :doi:`10.1534/genetics.108.092221`

   


.. conda:package:: bayescan

   |downloads_bayescan| |docker_bayescan|

   :versions:
      
      

      ``2.1-0``,  ``2.0.1-7``,  ``2.0.1-6``,  ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``

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

    pixi global install bayescan

to add into an existing workspace instead, run::

    pixi add bayescan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bayescan

Alternatively, to install into a new environment, run::

    conda create -n envname bayescan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bayescan:<tag>

(see `bayescan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bayescan| image:: https://img.shields.io/conda/dn/bioconda/bayescan.svg?style=flat
   :target: https://anaconda.org/bioconda/bayescan
   :alt:   (downloads)
.. |docker_bayescan| image:: https://quay.io/repository/biocontainers/bayescan/status
   :target: https://quay.io/repository/biocontainers/bayescan
.. _`bayescan/tags`: https://quay.io/repository/biocontainers/bayescan?tab=tags


.. raw:: html

    <script>
        var package = "bayescan";
        var versions = ["2.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayescan/README.html