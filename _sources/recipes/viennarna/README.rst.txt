:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viennarna'
.. highlight: bash

viennarna
=========

.. conda:recipe:: viennarna
   :replaces_section_title:
   :noindex:

   ViennaRNA package \-\- RNA secondary structure prediction and comparison

   :homepage: http://www.tbi.univie.ac.at/RNA/
   :license: custom
   :recipe: /`viennarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viennarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viennarna/meta.yaml>`_

   


.. conda:package:: viennarna

   |downloads_viennarna| |docker_viennarna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.2-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-1</code>,  <code>2.7.0-0</code>,  <code>2.6.4-3</code>,  <code>2.6.4-2</code>,  <code>2.6.4-1</code>,  <code>2.6.4-0</code>,  <code>2.6.3-0</code>,  </span></summary>
      

      ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-1``,  ``2.7.0-0``,  ``2.6.4-3``,  ``2.6.4-2``,  ``2.6.4-1``,  ``2.6.4-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.18-0``,  ``2.4.17-1``,  ``2.4.17-0``,  ``2.4.15-0``,  ``2.4.14-3``,  ``2.4.14-2``,  ``2.4.14-1``,  ``2.4.14-0``,  ``2.4.13-2``,  ``2.4.11-2``,  ``2.4.11-1``,  ``2.4.11-0``,  ``2.4.9-0``,  ``2.4.8-2``,  ``2.4.8-1``,  ``2.4.8-0``,  ``2.4.7-5``,  ``2.4.7-4``,  ``2.4.7-3``,  ``2.4.7-2``,  ``2.4.6-1``,  ``2.4.6-0``,  ``2.4.5-3``,  ``2.4.5-2``,  ``2.4.5-1``,  ``2.4.5-0``,  ``2.4.4-3``,  ``2.4.4-1``,  ``2.4.4-0``,  ``2.4.3-2``,  ``2.4.3-0``,  ``2.4.2-3``,  ``2.4.2-1``,  ``2.4.1-3``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.5-2``,  ``2.3.5-0``,  ``2.3.3-2``,  ``2.3.3-0``,  ``2.3.2-2``,  ``2.3.2-0``,  ``2.3.1-3``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-3``,  ``2.3.0-1``,  ``2.2.10-3``,  ``2.2.10-1``,  ``2.2.10-0``,  ``2.2.9-0``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.5-3``,  ``2.2.5-2``,  ``2.2.5-0``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.5-0``,  ``1.8.5-1``,  ``1.8.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mpfr: ``>=4.2.1,<5.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install viennarna

to add into an existing workspace instead, run::

    pixi add viennarna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install viennarna

Alternatively, to install into a new environment, run::

    conda create -n envname viennarna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/viennarna:<tag>

(see `viennarna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_viennarna| image:: https://img.shields.io/conda/dn/bioconda/viennarna.svg?style=flat
   :target: https://anaconda.org/bioconda/viennarna
   :alt:   (downloads)
.. |docker_viennarna| image:: https://quay.io/repository/biocontainers/viennarna/status
   :target: https://quay.io/repository/biocontainers/viennarna
.. _`viennarna/tags`: https://quay.io/repository/biocontainers/viennarna?tab=tags


.. raw:: html

    <script>
        var package = "viennarna";
        var versions = ["2.7.2","2.7.1","2.7.0","2.7.0","2.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viennarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viennarna/README.html