:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fido'
.. highlight: bash

fido
====

.. conda:recipe:: fido
   :replaces_section_title:
   :noindex:

   A method for protein identification in MS\/MS proteomics. Think of it like a protein delivery dog. You bring it the scored matches between peptides and spectra\, and it fetches a list of proteins ranked by posterior probability by doing clever tricks.

   :homepage: https://noble.gs.washington.edu/proj/fido
   :license: MIT / MIT
   :recipe: /`fido <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fido>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fido/meta.yaml>`_

   


.. conda:package:: fido

   |downloads_fido| |docker_fido|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-9</code>,  <code>1.0-8</code>,  <code>1.0-7</code>,  <code>1.0-6</code>,  <code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  </span></summary>
      

      ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
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

    pixi global install fido

to add into an existing workspace instead, run::

    pixi add fido

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fido

Alternatively, to install into a new environment, run::

    conda create -n envname fido

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fido:<tag>

(see `fido/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fido| image:: https://img.shields.io/conda/dn/bioconda/fido.svg?style=flat
   :target: https://anaconda.org/bioconda/fido
   :alt:   (downloads)
.. |docker_fido| image:: https://quay.io/repository/biocontainers/fido/status
   :target: https://quay.io/repository/biocontainers/fido
.. _`fido/tags`: https://quay.io/repository/biocontainers/fido?tab=tags


.. raw:: html

    <script>
        var package = "fido";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fido/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fido/README.html