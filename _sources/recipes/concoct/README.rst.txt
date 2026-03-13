:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'concoct'
.. highlight: bash

concoct
=======

.. conda:recipe:: concoct
   :replaces_section_title:
   :noindex:

   Clustering cONtigs with COverage and ComposiTion.

   :homepage: https://github.com/BinPro/CONCOCT
   :documentation: https://concoct.readthedocs.io/en/latest
   
   :license: BSD / BSD-2-Clause
   :recipe: /`concoct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoct/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.3103`

   


.. conda:package:: concoct

   |downloads_concoct| |docker_concoct|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-9</code>,  <code>1.1.0-8</code>,  <code>1.1.0-7</code>,  <code>1.1.0-6</code>,  <code>1.1.0-5</code>,  <code>1.1.0-4</code>,  <code>1.1.0-3</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  </span></summary>
      

      ``1.1.0-9``,  ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on cython: ``>=0.28.5``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=14``
   :depends on nose: 
   :depends on numpy: ``>=1.23,<3``
   :depends on numpy: ``>=1.8.0,<2``
   :depends on pandas: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on pytz: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on setuptools: ``<80.9``

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

    pixi global install concoct

to add into an existing workspace instead, run::

    pixi add concoct

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install concoct

Alternatively, to install into a new environment, run::

    conda create -n envname concoct

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/concoct:<tag>

(see `concoct/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_concoct| image:: https://img.shields.io/conda/dn/bioconda/concoct.svg?style=flat
   :target: https://anaconda.org/bioconda/concoct
   :alt:   (downloads)
.. |docker_concoct| image:: https://quay.io/repository/biocontainers/concoct/status
   :target: https://quay.io/repository/biocontainers/concoct
.. _`concoct/tags`: https://quay.io/repository/biocontainers/concoct?tab=tags


.. raw:: html

    <script>
        var package = "concoct";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/concoct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/concoct/README.html