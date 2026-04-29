:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genbank'
.. highlight: bash

genbank
=======

.. conda:recipe:: genbank
   :replaces_section_title:
   :noindex:

   Code to work with Genbank files

   :homepage: https://github.com/deprekate/genbank
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`genbank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genbank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genbank/meta.yaml>`_

   


.. conda:package:: genbank

   |downloads_genbank| |docker_genbank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.121-2</code>,  <code>0.121-1</code>,  <code>0.121-0</code>,  <code>0.120-0</code>,  <code>0.119-1</code>,  <code>0.119-0</code>,  <code>0.118-1</code>,  <code>0.118-0</code>,  <code>0.110-1</code>,  </span></summary>
      

      ``0.121-2``,  ``0.121-1``,  ``0.121-0``,  ``0.120-0``,  ``0.119-1``,  ``0.119-0``,  ``0.118-1``,  ``0.118-0``,  ``0.110-1``,  ``0.110-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
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

    pixi global install genbank

to add into an existing workspace instead, run::

    pixi add genbank

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genbank

Alternatively, to install into a new environment, run::

    conda create -n envname genbank

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genbank:<tag>

(see `genbank/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genbank| image:: https://img.shields.io/conda/dn/bioconda/genbank.svg?style=flat
   :target: https://anaconda.org/bioconda/genbank
   :alt:   (downloads)
.. |docker_genbank| image:: https://quay.io/repository/biocontainers/genbank/status
   :target: https://quay.io/repository/biocontainers/genbank
.. _`genbank/tags`: https://quay.io/repository/biocontainers/genbank?tab=tags


.. raw:: html

    <script>
        var package = "genbank";
        var versions = ["0.121","0.121","0.121","0.120","0.119"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genbank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genbank/README.html