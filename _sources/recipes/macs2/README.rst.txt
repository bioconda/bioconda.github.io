:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macs2'
.. highlight: bash

macs2
=====

.. conda:recipe:: macs2
   :replaces_section_title:
   :noindex:

   Model Based Analysis for ChIP\-Seq data.

   :homepage: https://github.com/macs3-project/MACS
   :documentation: https://macs3-project.github.io/MACS
   
   :license: BSD / BSD-3-Clause
   :recipe: /`macs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs2/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`peakcalling_macs`, biotools: :biotools:`macs`, doi: :doi:`10.1186/gb-2008-9-9-r137`

   


.. conda:package:: macs2

   |downloads_macs2| |docker_macs2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.9.1-5</code>,  <code>2.2.9.1-4</code>,  <code>2.2.9.1-3</code>,  <code>2.2.9.1-2</code>,  <code>2.2.9.1-1</code>,  <code>2.2.9.1-0</code>,  <code>2.2.7.1-5</code>,  <code>2.2.7.1-4</code>,  <code>2.2.7.1-3</code>,  </span></summary>
      

      ``2.2.9.1-5``,  ``2.2.9.1-4``,  ``2.2.9.1-3``,  ``2.2.9.1-2``,  ``2.2.9.1-1``,  ``2.2.9.1-0``,  ``2.2.7.1-5``,  ``2.2.7.1-4``,  ``2.2.7.1-3``,  ``2.2.7.1-2``,  ``2.2.7.1-1``,  ``2.2.7.1-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.1.4-0``,  ``2.1.3.3-0``,  ``2.1.3.2-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1.20160309-3``,  ``2.1.1.20160309-2``,  ``2.1.1.20160309-1``,  ``2.1.1.20160309-0``,  ``2.1.1-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on numpy: ``>=1.19.0``
   :depends on numpy: ``>=1.21,<3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-base: 

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

    pixi global install macs2

to add into an existing workspace instead, run::

    pixi add macs2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install macs2

Alternatively, to install into a new environment, run::

    conda create -n envname macs2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/macs2:<tag>

(see `macs2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_macs2| image:: https://img.shields.io/conda/dn/bioconda/macs2.svg?style=flat
   :target: https://anaconda.org/bioconda/macs2
   :alt:   (downloads)
.. |docker_macs2| image:: https://quay.io/repository/biocontainers/macs2/status
   :target: https://quay.io/repository/biocontainers/macs2
.. _`macs2/tags`: https://quay.io/repository/biocontainers/macs2?tab=tags


.. raw:: html

    <script>
        var package = "macs2";
        var versions = ["2.2.9.1","2.2.9.1","2.2.9.1","2.2.9.1","2.2.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macs2/README.html