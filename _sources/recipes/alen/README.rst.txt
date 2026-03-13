:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alen'
.. highlight: bash

alen
====

.. conda:recipe:: alen
   :replaces_section_title:
   :noindex:

   Simple terminal sequence alignment viewer

   :homepage: https://github.com/jakobnissen/alen
   :license: MIT
   :recipe: /`alen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alen/meta.yaml>`_

   


.. conda:package:: alen

   |downloads_alen| |docker_alen|

   :versions:
      
      

      ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``

      

   

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

    pixi global install alen

to add into an existing workspace instead, run::

    pixi add alen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alen

Alternatively, to install into a new environment, run::

    conda create -n envname alen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alen:<tag>

(see `alen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alen| image:: https://img.shields.io/conda/dn/bioconda/alen.svg?style=flat
   :target: https://anaconda.org/bioconda/alen
   :alt:   (downloads)
.. |docker_alen| image:: https://quay.io/repository/biocontainers/alen/status
   :target: https://quay.io/repository/biocontainers/alen
.. _`alen/tags`: https://quay.io/repository/biocontainers/alen?tab=tags


.. raw:: html

    <script>
        var package = "alen";
        var versions = ["0.3.3","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alen/README.html