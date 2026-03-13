:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgbio'
.. highlight: bash

fgbio
=====

.. conda:recipe:: fgbio
   :replaces_section_title:
   :noindex:

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs

   :homepage: https://github.com/fulcrumgenomics/fgbio
   :license: MIT / MIT
   :recipe: /`fgbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.10456900`

   


.. conda:package:: fgbio

   |downloads_fgbio| |docker_fgbio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.0-0</code>,  <code>2.5.21-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.5.21-0``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.0a-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.2.1b-0``,  ``0.2.1a-0``,  ``0.2.0-0``,  ``0.1.5a-0``,  ``0.1.3a-0``,  ``0.1.2a-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``
   :depends on python: 
   :depends on r-base: 
   :depends on r-ggplot2: 
   :depends on r-scales: 

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

    pixi global install fgbio

to add into an existing workspace instead, run::

    pixi add fgbio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fgbio

Alternatively, to install into a new environment, run::

    conda create -n envname fgbio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fgbio:<tag>

(see `fgbio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fgbio| image:: https://img.shields.io/conda/dn/bioconda/fgbio.svg?style=flat
   :target: https://anaconda.org/bioconda/fgbio
   :alt:   (downloads)
.. |docker_fgbio| image:: https://quay.io/repository/biocontainers/fgbio/status
   :target: https://quay.io/repository/biocontainers/fgbio
.. _`fgbio/tags`: https://quay.io/repository/biocontainers/fgbio?tab=tags


.. raw:: html

    <script>
        var package = "fgbio";
        var versions = ["3.1.2","3.1.1","3.1.0","3.0.0","2.5.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgbio/README.html