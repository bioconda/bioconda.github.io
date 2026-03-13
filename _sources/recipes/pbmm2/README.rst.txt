:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbmm2'
.. highlight: bash

pbmm2
=====

.. conda:recipe:: pbmm2
   :replaces_section_title:
   :noindex:

   A minimap2 frontend for PacBio native data formats

   :homepage: https://github.com/PacificBiosciences/pbmm2
   :license: BSD-3-Clause-Clear
   :recipe: /`pbmm2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbmm2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbmm2/meta.yaml>`_

   


.. conda:package:: pbmm2

   |downloads_pbmm2| |docker_pbmm2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>26.1.99-0</code>,  <code>26.1.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.99-0</code>,  <code>1.16.0-0</code>,  <code>1.14.99-0</code>,  <code>1.13.1-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``26.1.99-0``,  ``26.1.0-0``,  ``1.17.0-0``,  ``1.16.99-0``,  ``1.16.0-0``,  ``1.14.99-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install pbmm2

to add into an existing workspace instead, run::

    pixi add pbmm2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbmm2

Alternatively, to install into a new environment, run::

    conda create -n envname pbmm2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbmm2:<tag>

(see `pbmm2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbmm2| image:: https://img.shields.io/conda/dn/bioconda/pbmm2.svg?style=flat
   :target: https://anaconda.org/bioconda/pbmm2
   :alt:   (downloads)
.. |docker_pbmm2| image:: https://quay.io/repository/biocontainers/pbmm2/status
   :target: https://quay.io/repository/biocontainers/pbmm2
.. _`pbmm2/tags`: https://quay.io/repository/biocontainers/pbmm2?tab=tags


.. raw:: html

    <script>
        var package = "pbmm2";
        var versions = ["26.1.99","26.1.0","1.17.0","1.16.99","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbmm2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbmm2/README.html