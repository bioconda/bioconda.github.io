:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orfipy'
.. highlight: bash

orfipy
======

.. conda:recipe:: orfipy
   :replaces_section_title:
   :noindex:

   orfipy\: fast and flexible search for open reading frames in fasta sequences

   :homepage: https://github.com/urmi-21/orfipy
   :license: MIT / MIT
   :recipe: /`orfipy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfipy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfipy/meta.yaml>`_

   


.. conda:package:: orfipy

   |downloads_orfipy| |docker_orfipy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.4-5</code>,  <code>0.0.4-4</code>,  <code>0.0.4-3</code>,  <code>0.0.4-2</code>,  <code>0.0.4-1</code>,  <code>0.0.4-0</code>,  <code>0.0.3-1</code>,  <code>0.0.3-0</code>,  <code>0.0.2-0</code>,  </span></summary>
      

      ``0.0.4-5``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on colorama: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on psutil: 
   :depends on pyahocorasick: 
   :depends on pyfastx: ``>=2.3.0,<3.0a0``
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

    pixi global install orfipy

to add into an existing workspace instead, run::

    pixi add orfipy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orfipy

Alternatively, to install into a new environment, run::

    conda create -n envname orfipy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orfipy:<tag>

(see `orfipy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orfipy| image:: https://img.shields.io/conda/dn/bioconda/orfipy.svg?style=flat
   :target: https://anaconda.org/bioconda/orfipy
   :alt:   (downloads)
.. |docker_orfipy| image:: https://quay.io/repository/biocontainers/orfipy/status
   :target: https://quay.io/repository/biocontainers/orfipy
.. _`orfipy/tags`: https://quay.io/repository/biocontainers/orfipy?tab=tags


.. raw:: html

    <script>
        var package = "orfipy";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfipy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfipy/README.html