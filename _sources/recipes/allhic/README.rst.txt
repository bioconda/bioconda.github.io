:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'allhic'
.. highlight: bash

allhic
======

.. conda:recipe:: allhic
   :replaces_section_title:
   :noindex:

   Genome scaffolding based on HiC data in heterozygous and high ploidy genomes

   :homepage: https://github.com/tanghaibao/allhic
   :license: BSD / BSD-3-Clause
   :recipe: /`allhic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allhic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allhic/meta.yaml>`_

   


.. conda:package:: allhic

   |downloads_allhic| |docker_allhic|

   :versions:
      
      

      ``0.9.14-0``,  ``0.9.13.1-0``

      

   

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

    pixi global install allhic

to add into an existing workspace instead, run::

    pixi add allhic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install allhic

Alternatively, to install into a new environment, run::

    conda create -n envname allhic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/allhic:<tag>

(see `allhic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_allhic| image:: https://img.shields.io/conda/dn/bioconda/allhic.svg?style=flat
   :target: https://anaconda.org/bioconda/allhic
   :alt:   (downloads)
.. |docker_allhic| image:: https://quay.io/repository/biocontainers/allhic/status
   :target: https://quay.io/repository/biocontainers/allhic
.. _`allhic/tags`: https://quay.io/repository/biocontainers/allhic?tab=tags


.. raw:: html

    <script>
        var package = "allhic";
        var versions = ["0.9.14","0.9.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/allhic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/allhic/README.html