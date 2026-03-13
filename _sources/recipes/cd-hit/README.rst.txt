:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cd-hit'
.. highlight: bash

cd-hit
======

.. conda:recipe:: cd-hit
   :replaces_section_title:
   :noindex:

   Clusters and compares protein or nucleotide sequences.

   :homepage: https://github.com/weizhongli/cdhit
   :documentation: https://github.com/weizhongli/cdhit/wiki
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`cd-hit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/17.3.282`, doi: :doi:`10.1093/bioinformatics/18.1.77`, biotools: :biotools:`cd-hit`, usegalaxy-eu: :usegalaxy-eu:`cd_hit`

   


.. conda:package:: cd-hit

   |downloads_cd-hit| |docker_cd-hit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.8.1-13</code>,  <code>4.8.1-12</code>,  <code>4.8.1-11</code>,  <code>4.8.1-10</code>,  <code>4.8.1-9</code>,  <code>4.8.1-8</code>,  <code>4.8.1-7</code>,  <code>4.8.1-6</code>,  <code>4.8.1-5</code>,  </span></summary>
      

      ``4.8.1-13``,  ``4.8.1-12``,  ``4.8.1-11``,  ``4.8.1-10``,  ``4.8.1-9``,  ``4.8.1-8``,  ``4.8.1-7``,  ``4.8.1-6``,  ``4.8.1-5``,  ``4.8.1-4``,  ``4.8.1-3``,  ``4.8.1-2``,  ``4.8.1-1``,  ``4.8.1-0``,  ``4.6.8-2``,  ``4.6.8-1``,  ``4.6.8-0``,  ``4.6.6-0``,  ``4.6.4-1``,  ``4.6.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install cd-hit

to add into an existing workspace instead, run::

    pixi add cd-hit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cd-hit

Alternatively, to install into a new environment, run::

    conda create -n envname cd-hit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cd-hit:<tag>

(see `cd-hit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cd-hit| image:: https://img.shields.io/conda/dn/bioconda/cd-hit.svg?style=flat
   :target: https://anaconda.org/bioconda/cd-hit
   :alt:   (downloads)
.. |docker_cd-hit| image:: https://quay.io/repository/biocontainers/cd-hit/status
   :target: https://quay.io/repository/biocontainers/cd-hit
.. _`cd-hit/tags`: https://quay.io/repository/biocontainers/cd-hit?tab=tags


.. raw:: html

    <script>
        var package = "cd-hit";
        var versions = ["4.8.1","4.8.1","4.8.1","4.8.1","4.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cd-hit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cd-hit/README.html