:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpeff'
.. highlight: bash

snpeff
======

.. conda:recipe:: snpeff
   :replaces_section_title:
   :noindex:

   Genetic variant annotation and effect prediction toolbox

   :homepage: http://snpeff.sourceforge.net/
   :license: LGPLv3
   :recipe: /`snpeff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpeff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpeff/meta.yaml>`_
   :links: biotools: :biotools:`snpeff`

   


.. conda:package:: snpeff

   |downloads_snpeff| |docker_snpeff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.4.0c-0</code>,  <code>5.4.0a-0</code>,  <code>5.3.0a-1</code>,  <code>5.3.0a-0</code>,  <code>5.2-3</code>,  <code>5.2-2</code>,  <code>5.2-1</code>,  <code>5.2-0</code>,  <code>5.1-4</code>,  </span></summary>
      

      ``5.4.0c-0``,  ``5.4.0a-0``,  ``5.3.0a-1``,  ``5.3.0a-0``,  ``5.2-3``,  ``5.2-2``,  ``5.2-1``,  ``5.2-0``,  ``5.1-4``,  ``5.1-3``,  ``5.1-2``,  ``5.1-1``,  ``5.1-0``,  ``5.1d-2``,  ``5.1d-1``,  ``5.1d-0``,  ``5.0-3``,  ``5.0-2``,  ``5.0-1``,  ``5.0-0``,  ``4.5covid19-2``,  ``4.5covid19-1``,  ``4.5covid19-0``,  ``4.3.1t-5``,  ``4.3.1t-4``,  ``4.3.1t-3``,  ``4.3.1t-2``,  ``4.3.1t-1``,  ``4.3.1t-0``,  ``4.3.1r-0``,  ``4.3.1q-0``,  ``4.3.1p-1``,  ``4.3.1p-0``,  ``4.3.1o-0``,  ``4.3.1m-0``,  ``4.3.1k-0``,  ``4.3-3``,  ``4.3-2``,  ``4.3-1``,  ``4.3-0``,  ``4.3k-0``,  ``4.3i-0``,  ``4.3g-0``,  ``4.3b-0``,  ``4.2-0``,  ``4.1l-8``,  ``4.1l-7``,  ``4.1l-6``,  ``4.1l-5``,  ``4.1l-4``,  ``4.1l-3``,  ``4.1l-2``,  ``4.1l-1``,  ``4.1l-0``,  ``3_6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=21``
   :depends on python: 
   :depends on zlib: 

   :additional platforms:
      

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

    pixi global install snpeff

to add into an existing workspace instead, run::

    pixi add snpeff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snpeff

Alternatively, to install into a new environment, run::

    conda create -n envname snpeff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snpeff:<tag>

(see `snpeff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snpeff| image:: https://img.shields.io/conda/dn/bioconda/snpeff.svg?style=flat
   :target: https://anaconda.org/bioconda/snpeff
   :alt:   (downloads)
.. |docker_snpeff| image:: https://quay.io/repository/biocontainers/snpeff/status
   :target: https://quay.io/repository/biocontainers/snpeff
.. _`snpeff/tags`: https://quay.io/repository/biocontainers/snpeff?tab=tags


.. raw:: html

    <script>
        var package = "snpeff";
        var versions = ["5.4.0c","5.4.0a","5.3.0a","5.3.0a","5.2"];
    </script>





Notes
-----
The tool is available as command \`snpEff\`. Note that the package version is slightly different from upstream\, this is to make sure conda will order the package versions correctly.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpeff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpeff/README.html