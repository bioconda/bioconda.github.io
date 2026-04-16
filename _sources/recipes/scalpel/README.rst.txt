:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scalpel'
.. highlight: bash

scalpel
=======

.. conda:recipe:: scalpel
   :replaces_section_title:
   :noindex:

   Sensitive detection of INDELs \(INsertions and DELetions\).

   :homepage: https://scalpel.sourceforge.net
   :license: MIT / MIT
   :recipe: /`scalpel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalpel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalpel/meta.yaml>`_

   


.. conda:package:: scalpel

   |downloads_scalpel| |docker_scalpel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-9</code>,  <code>0.5.4-8</code>,  <code>0.5.4-7</code>,  <code>0.5.4-6</code>,  <code>0.5.4-5</code>,  <code>0.5.4-4</code>,  <code>0.5.4-3</code>,  <code>0.5.4-2</code>,  <code>0.5.4-1</code>,  </span></summary>
      

      ``0.5.4-9``,  ``0.5.4-8``,  ``0.5.4-7``,  ``0.5.4-6``,  ``0.5.4-5``,  ``0.5.4-4``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.3,<3.0a0``
   :depends on bcftools: ``>=1.22,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: 
   :depends on samtools: ``>=1.22.1,<2.0a0``

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

    pixi global install scalpel

to add into an existing workspace instead, run::

    pixi add scalpel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scalpel

Alternatively, to install into a new environment, run::

    conda create -n envname scalpel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scalpel:<tag>

(see `scalpel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scalpel| image:: https://img.shields.io/conda/dn/bioconda/scalpel.svg?style=flat
   :target: https://anaconda.org/bioconda/scalpel
   :alt:   (downloads)
.. |docker_scalpel| image:: https://quay.io/repository/biocontainers/scalpel/status
   :target: https://quay.io/repository/biocontainers/scalpel
.. _`scalpel/tags`: https://quay.io/repository/biocontainers/scalpel?tab=tags


.. raw:: html

    <script>
        var package = "scalpel";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scalpel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scalpel/README.html