:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deltapd'
.. highlight: bash

deltapd
=======

.. conda:recipe:: deltapd
   :replaces_section_title:
   :noindex:

   DeltaPD is a tool used to determine outliers in a gene tree when compared against a reference tree.

   :homepage: https://github.com/Ecogenomics/DeltaPD
   :license: AGPL / AGPL-3.0-only
   :recipe: /`deltapd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltapd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltapd/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4107213`

   


.. conda:package:: deltapd

   |downloads_deltapd| |docker_deltapd|

   :versions:
      
      

      ``0.1.5-7``,  ``0.1.5-6``,  ``0.1.5-5``,  ``0.1.5-4``,  ``0.1.5-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends on dendropy: 
   :depends on ete3: 
   :depends on jinja2: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on phylodm: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on seaborn-base: 
   :depends on tqdm: 

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

    pixi global install deltapd

to add into an existing workspace instead, run::

    pixi add deltapd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deltapd

Alternatively, to install into a new environment, run::

    conda create -n envname deltapd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deltapd:<tag>

(see `deltapd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deltapd| image:: https://img.shields.io/conda/dn/bioconda/deltapd.svg?style=flat
   :target: https://anaconda.org/bioconda/deltapd
   :alt:   (downloads)
.. |docker_deltapd| image:: https://quay.io/repository/biocontainers/deltapd/status
   :target: https://quay.io/repository/biocontainers/deltapd
.. _`deltapd/tags`: https://quay.io/repository/biocontainers/deltapd?tab=tags


.. raw:: html

    <script>
        var package = "deltapd";
        var versions = ["0.1.5","0.1.5","0.1.5","0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deltapd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deltapd/README.html