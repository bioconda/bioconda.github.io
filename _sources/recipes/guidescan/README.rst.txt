:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guidescan'
.. highlight: bash

guidescan
=========

.. conda:recipe:: guidescan
   :replaces_section_title:
   :noindex:

   GuideScan is a tool for genome\-wide CRISPR guide RNA \(gRNA\) design and analysis in custom genomes.

   :homepage: https://github.com/pritykinlab/guidescan-cli
   :license: Unknown
   :recipe: /`guidescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan/meta.yaml>`_

   


.. conda:package:: guidescan

   |downloads_guidescan| |docker_guidescan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.8-0</code>,  <code>2.1.7-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-2</code>,  </span></summary>
      

      ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.5-0``,  ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.0.0-0``,  ``1.2-1``,  ``1.2-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libcurl: 
   :depends on libcxx: ``>=18``

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

    pixi global install guidescan

to add into an existing workspace instead, run::

    pixi add guidescan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install guidescan

Alternatively, to install into a new environment, run::

    conda create -n envname guidescan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/guidescan:<tag>

(see `guidescan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_guidescan| image:: https://img.shields.io/conda/dn/bioconda/guidescan.svg?style=flat
   :target: https://anaconda.org/bioconda/guidescan
   :alt:   (downloads)
.. |docker_guidescan| image:: https://quay.io/repository/biocontainers/guidescan/status
   :target: https://quay.io/repository/biocontainers/guidescan
.. _`guidescan/tags`: https://quay.io/repository/biocontainers/guidescan?tab=tags


.. raw:: html

    <script>
        var package = "guidescan";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guidescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guidescan/README.html