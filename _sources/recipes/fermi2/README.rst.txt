:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermi2'
.. highlight: bash

fermi2
======

.. conda:recipe:: fermi2
   :replaces_section_title:
   :noindex:

   Fermi2 focuses on the exploration of FMD\-index as a graph.

   :homepage: https://github.com/lh3/fermi2
   :license: Unknown
   :recipe: /`fermi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi2/meta.yaml>`_

   


.. conda:package:: fermi2

   |downloads_fermi2| |docker_fermi2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r204-0</code>,  <code>r193-10</code>,  <code>r193-9</code>,  <code>r193-8</code>,  <code>r193-7</code>,  <code>r193-6</code>,  <code>r193-5</code>,  <code>r193-4</code>,  <code>r193-3</code>,  </span></summary>
      

      ``r204-0``,  ``r193-10``,  ``r193-9``,  ``r193-8``,  ``r193-7``,  ``r193-6``,  ``r193-5``,  ``r193-4``,  ``r193-3``,  ``r193-2``,  ``r193-1``,  ``r193-0``,  ``r188-0``,  ``r170-4``,  ``r170-3``,  ``r170-2``,  ``r170-1``,  ``r170-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bfc: 
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: 
   :depends on ropebwt2: 
   :depends on seqtk: 

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

    pixi global install fermi2

to add into an existing workspace instead, run::

    pixi add fermi2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fermi2

Alternatively, to install into a new environment, run::

    conda create -n envname fermi2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fermi2:<tag>

(see `fermi2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fermi2| image:: https://img.shields.io/conda/dn/bioconda/fermi2.svg?style=flat
   :target: https://anaconda.org/bioconda/fermi2
   :alt:   (downloads)
.. |docker_fermi2| image:: https://quay.io/repository/biocontainers/fermi2/status
   :target: https://quay.io/repository/biocontainers/fermi2
.. _`fermi2/tags`: https://quay.io/repository/biocontainers/fermi2?tab=tags


.. raw:: html

    <script>
        var package = "fermi2";
        var versions = ["r204","r193","r193","r193","r193"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi2/README.html