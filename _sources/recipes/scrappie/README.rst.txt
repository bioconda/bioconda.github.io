:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrappie'
.. highlight: bash

scrappie
========

.. conda:recipe:: scrappie
   :replaces_section_title:
   :noindex:

   Scrappie is a technology demonstrator for the Oxford Nanopore Research Algorithms group

   :homepage: https://github.com/nanoporetech/scrappie
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`scrappie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrappie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrappie/meta.yaml>`_

   


.. conda:package:: scrappie

   |downloads_scrappie| |docker_scrappie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-7</code>,  <code>1.4.2-6</code>,  <code>1.4.2-5</code>,  <code>1.4.2-4</code>,  <code>1.4.2-3</code>,  <code>1.4.2-2</code>,  <code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.4.2-7``,  ``1.4.2-6``,  ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.2-2``,  ``1.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cffi: ``>=1.0.0``
   :depends on cunit: 
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mkl: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on openblas: 
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on zlib: 

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

    pixi global install scrappie

to add into an existing workspace instead, run::

    pixi add scrappie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scrappie

Alternatively, to install into a new environment, run::

    conda create -n envname scrappie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scrappie:<tag>

(see `scrappie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scrappie| image:: https://img.shields.io/conda/dn/bioconda/scrappie.svg?style=flat
   :target: https://anaconda.org/bioconda/scrappie
   :alt:   (downloads)
.. |docker_scrappie| image:: https://quay.io/repository/biocontainers/scrappie/status
   :target: https://quay.io/repository/biocontainers/scrappie
.. _`scrappie/tags`: https://quay.io/repository/biocontainers/scrappie?tab=tags


.. raw:: html

    <script>
        var package = "scrappie";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrappie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrappie/README.html