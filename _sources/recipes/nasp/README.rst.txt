:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nasp'
.. highlight: bash

nasp
====

.. conda:recipe:: nasp
   :replaces_section_title:
   :noindex:

   NASP\: an accurate\, rapid method for the identification of SNPs in WGS datasets that supports flexible input and output formats

   :homepage: https://github.com/TGenNorth/nasp
   :license: Academic and Research License
   :recipe: /`nasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nasp/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000074`

   


.. conda:package:: nasp

   |downloads_nasp| |docker_nasp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.0.2a1-3</code>,  <code>1.0.2a1-2</code>,  <code>1.0.2a1-1</code>,  <code>1.0.1-1</code>,  </span></summary>
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.2a1-3``,  ``1.0.2a1-2``,  ``1.0.2a1-1``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on mummer: 
   :depends on python: ``>=3.6,<3.7.0a0``
   :depends on python_abi: ``3.6.* *_cp36m``
   :depends on samtools: ``<1.3``
   :depends on trimmomatic: 

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

    pixi global install nasp

to add into an existing workspace instead, run::

    pixi add nasp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nasp

Alternatively, to install into a new environment, run::

    conda create -n envname nasp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nasp:<tag>

(see `nasp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nasp| image:: https://img.shields.io/conda/dn/bioconda/nasp.svg?style=flat
   :target: https://anaconda.org/bioconda/nasp
   :alt:   (downloads)
.. |docker_nasp| image:: https://quay.io/repository/biocontainers/nasp/status
   :target: https://quay.io/repository/biocontainers/nasp
.. _`nasp/tags`: https://quay.io/repository/biocontainers/nasp?tab=tags


.. raw:: html

    <script>
        var package = "nasp";
        var versions = ["1.2.1","1.2.1","1.2.0","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nasp/README.html