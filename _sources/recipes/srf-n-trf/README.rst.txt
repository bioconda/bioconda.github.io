:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srf-n-trf'
.. highlight: bash

srf-n-trf
=========

.. conda:recipe:: srf-n-trf
   :replaces_section_title:
   :noindex:

   Extract specific monomers\, motifs\, and regions from srf and trf output

   :homepage: https://github.com/koisland/srf-n-trf
   :license: MIT / MIT
   :recipe: /`srf-n-trf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srf-n-trf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srf-n-trf/meta.yaml>`_

   


.. conda:package:: srf-n-trf

   |downloads_srf-n-trf| |docker_srf-n-trf|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   

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

    pixi global install srf-n-trf

to add into an existing workspace instead, run::

    pixi add srf-n-trf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install srf-n-trf

Alternatively, to install into a new environment, run::

    conda create -n envname srf-n-trf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/srf-n-trf:<tag>

(see `srf-n-trf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_srf-n-trf| image:: https://img.shields.io/conda/dn/bioconda/srf-n-trf.svg?style=flat
   :target: https://anaconda.org/bioconda/srf-n-trf
   :alt:   (downloads)
.. |docker_srf-n-trf| image:: https://quay.io/repository/biocontainers/srf-n-trf/status
   :target: https://quay.io/repository/biocontainers/srf-n-trf
.. _`srf-n-trf/tags`: https://quay.io/repository/biocontainers/srf-n-trf?tab=tags


.. raw:: html

    <script>
        var package = "srf-n-trf";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srf-n-trf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srf-n-trf/README.html