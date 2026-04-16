:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromeister'
.. highlight: bash

chromeister
===========

.. conda:recipe:: chromeister
   :replaces_section_title:
   :noindex:

   An ultra fast\, heuristic approach to detect conserved signals in extremely large pairwise genome comparisons

   :homepage: https://github.com/estebanpw/chromeister
   :license: GPL / GPL-3.0
   :recipe: /`chromeister <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromeister>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromeister/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41598-019-46773-w`

   


.. conda:package:: chromeister

   |downloads_chromeister| |docker_chromeister|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.a-6</code>,  <code>1.5.a-5</code>,  <code>1.5.a-4</code>,  <code>1.5.a-3</code>,  <code>1.5.a-2</code>,  <code>1.5.a-1</code>,  <code>1.5.a-0</code>,  <code>1.4-0</code>,  <code>1.3.c-0</code>,  </span></summary>
      

      ``1.5.a-6``,  ``1.5.a-5``,  ``1.5.a-4``,  ``1.5.a-3``,  ``1.5.a-2``,  ``1.5.a-1``,  ``1.5.a-0``,  ``1.4-0``,  ``1.3.c-0``,  ``1.2-0``,  ``1.1.c-0``,  ``1.1.b-0``,  ``1.1.a-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cycler: 
   :depends on kiwisolver: 
   :depends on libgcc: ``>=13``
   :depends on numpy: 
   :depends on opencv: 
   :depends on pillow: 
   :depends on pyparsing: 
   :depends on python: ``>=3``
   :depends on python-dateutil: 
   :depends on r-ape: 
   :depends on r-base: 
   :depends on scikit-build: 
   :depends on six: 

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

    pixi global install chromeister

to add into an existing workspace instead, run::

    pixi add chromeister

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chromeister

Alternatively, to install into a new environment, run::

    conda create -n envname chromeister

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chromeister:<tag>

(see `chromeister/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chromeister| image:: https://img.shields.io/conda/dn/bioconda/chromeister.svg?style=flat
   :target: https://anaconda.org/bioconda/chromeister
   :alt:   (downloads)
.. |docker_chromeister| image:: https://quay.io/repository/biocontainers/chromeister/status
   :target: https://quay.io/repository/biocontainers/chromeister
.. _`chromeister/tags`: https://quay.io/repository/biocontainers/chromeister?tab=tags


.. raw:: html

    <script>
        var package = "chromeister";
        var versions = ["1.5.a","1.5.a","1.5.a","1.5.a","1.5.a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromeister/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromeister/README.html