:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimal'
.. highlight: bash

trimal
======

.. conda:recipe:: trimal
   :replaces_section_title:
   :noindex:

   A tool for the automated removal of spurious sequences or poorly aligned regions from a multiple sequence alignment

   :homepage: https://trimal.readthedocs.io
   :developer docs: https://github.com/inab/trimal
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`trimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimal/meta.yaml>`_
   :links: biotools: :biotools:`trimAl`, doi: :doi:`10.1093/bioinformatics/btp348`

   


.. conda:package:: trimal

   |downloads_trimal| |docker_trimal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-0</code>,  <code>1.5.0-2</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.4.1-9</code>,  <code>1.4.1-8</code>,  <code>1.4.1-7</code>,  <code>1.4.1-6</code>,  <code>1.4.1-5</code>,  </span></summary>
      

      ``1.5.1-0``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.1-9``,  ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-6``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install trimal

to add into an existing workspace instead, run::

    pixi add trimal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trimal

Alternatively, to install into a new environment, run::

    conda create -n envname trimal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trimal:<tag>

(see `trimal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trimal| image:: https://img.shields.io/conda/dn/bioconda/trimal.svg?style=flat
   :target: https://anaconda.org/bioconda/trimal
   :alt:   (downloads)
.. |docker_trimal| image:: https://quay.io/repository/biocontainers/trimal/status
   :target: https://quay.io/repository/biocontainers/trimal
.. _`trimal/tags`: https://quay.io/repository/biocontainers/trimal?tab=tags


.. raw:: html

    <script>
        var package = "trimal";
        var versions = ["1.5.1","1.5.0","1.5.0","1.5.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimal/README.html