:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varscan'
.. highlight: bash

varscan
=======

.. conda:recipe:: varscan
   :replaces_section_title:
   :noindex:

   variant detection in massively parallel sequencing data

   :homepage: http://dkoboldt.github.io/varscan/
   :license: The Non-Profit Open Software License version 3.0 (NPOSL-3.0)
   :recipe: /`varscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varscan/meta.yaml>`_
   :links: biotools: :biotools:`varscan`

   


.. conda:package:: varscan

   |downloads_varscan| |docker_varscan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.6-0</code>,  <code>2.4.4-1</code>,  <code>2.4.4-0</code>,  <code>2.4.3-2</code>,  <code>2.4.3-1</code>,  <code>2.4.3-0</code>,  <code>2.4.2-2</code>,  <code>2.4.2-1</code>,  <code>2.4.2-0</code>,  </span></summary>
      

      ``2.4.6-0``,  ``2.4.4-1``,  ``2.4.4-0``,  ``2.4.3-2``,  ``2.4.3-1``,  ``2.4.3-0``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.7-4``,  ``2.3.7-3``,  ``2.3.7-2``,  ``2.3.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: 
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

    pixi global install varscan

to add into an existing workspace instead, run::

    pixi add varscan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install varscan

Alternatively, to install into a new environment, run::

    conda create -n envname varscan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/varscan:<tag>

(see `varscan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_varscan| image:: https://img.shields.io/conda/dn/bioconda/varscan.svg?style=flat
   :target: https://anaconda.org/bioconda/varscan
   :alt:   (downloads)
.. |docker_varscan| image:: https://quay.io/repository/biocontainers/varscan/status
   :target: https://quay.io/repository/biocontainers/varscan
.. _`varscan/tags`: https://quay.io/repository/biocontainers/varscan?tab=tags


.. raw:: html

    <script>
        var package = "varscan";
        var versions = ["2.4.6","2.4.4","2.4.4","2.4.3","2.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varscan/README.html