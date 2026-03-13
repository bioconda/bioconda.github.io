:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextclade2'
.. highlight: bash

nextclade2
==========

.. conda:recipe:: nextclade2
   :replaces_section_title:
   :noindex:

   Viral genome alignment\, mutation calling\, clade assignment\, quality checks and phylogenetic placement

   :homepage: https://github.com/nextstrain/nextclade
   :documentation: https://docs.nextstrain.org/projects/nextclade/en/stable/
   
   :license: MIT / MIT
   :recipe: /`nextclade2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade2/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.03773`

   


.. conda:package:: nextclade2

   |downloads_nextclade2| |docker_nextclade2|

   :versions:
      
      

      ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``

      

   

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

    pixi global install nextclade2

to add into an existing workspace instead, run::

    pixi add nextclade2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextclade2

Alternatively, to install into a new environment, run::

    conda create -n envname nextclade2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextclade2:<tag>

(see `nextclade2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextclade2| image:: https://img.shields.io/conda/dn/bioconda/nextclade2.svg?style=flat
   :target: https://anaconda.org/bioconda/nextclade2
   :alt:   (downloads)
.. |docker_nextclade2| image:: https://quay.io/repository/biocontainers/nextclade2/status
   :target: https://quay.io/repository/biocontainers/nextclade2
.. _`nextclade2/tags`: https://quay.io/repository/biocontainers/nextclade2?tab=tags


.. raw:: html

    <script>
        var package = "nextclade2";
        var versions = ["2.14.0","2.14.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextclade2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextclade2/README.html