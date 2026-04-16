:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasta3'
.. highlight: bash

fasta3
======

.. conda:recipe:: fasta3
   :replaces_section_title:
   :noindex:

   The FASTA package \- protein and DNA sequence similarity searching and alignment programs.

   :homepage: https://fasta.bioch.virginia.edu/wrpearson/fasta
   :developer docs: https://github.com/wrpearson/fasta36
   :license: APACHE / Apache-2.0
   :recipe: /`fasta3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta3/meta.yaml>`_

   


.. conda:package:: fasta3

   |downloads_fasta3| |docker_fasta3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>36.3.8-7</code>,  <code>36.3.8-6</code>,  <code>36.3.8-5</code>,  <code>36.3.8-4</code>,  <code>36.3.8-3</code>,  <code>36.3.8-2</code>,  <code>36.3.8-1</code>,  <code>36.3.8-0</code>,  <code>36.3.8i-3</code>,  </span></summary>
      

      ``36.3.8-7``,  ``36.3.8-6``,  ``36.3.8-5``,  ``36.3.8-4``,  ``36.3.8-3``,  ``36.3.8-2``,  ``36.3.8-1``,  ``36.3.8-0``,  ``36.3.8i-3``,  ``36.3.8i-2``,  ``36.3.8i-1``,  ``36.3.8i-0``,  ``36.3.8h-2``,  ``36.3.8h-1``,  ``36.3.8h-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=10.3.0``

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

    pixi global install fasta3

to add into an existing workspace instead, run::

    pixi add fasta3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fasta3

Alternatively, to install into a new environment, run::

    conda create -n envname fasta3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fasta3:<tag>

(see `fasta3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fasta3| image:: https://img.shields.io/conda/dn/bioconda/fasta3.svg?style=flat
   :target: https://anaconda.org/bioconda/fasta3
   :alt:   (downloads)
.. |docker_fasta3| image:: https://quay.io/repository/biocontainers/fasta3/status
   :target: https://quay.io/repository/biocontainers/fasta3
.. _`fasta3/tags`: https://quay.io/repository/biocontainers/fasta3?tab=tags


.. raw:: html

    <script>
        var package = "fasta3";
        var versions = ["36.3.8","36.3.8","36.3.8","36.3.8","36.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasta3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasta3/README.html