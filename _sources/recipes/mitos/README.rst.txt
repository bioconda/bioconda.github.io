:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitos'
.. highlight: bash

mitos
=====

.. conda:recipe:: mitos
   :replaces_section_title:
   :noindex:

   MITOS is a tool for the annotation of metazoan mitochondrial genomes.

   :homepage: http://mitos.bioinf.uni-leipzig.de
   :developer docs: https://gitlab.com/Bernt/MITOS
   :license: MIT / MIT
   :recipe: /`mitos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitos/meta.yaml>`_

   


.. conda:package:: mitos

   |downloads_mitos| |docker_mitos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.10-0</code>,  <code>2.1.9-1</code>,  <code>2.1.9-0</code>,  <code>2.1.8-0</code>,  <code>2.1.7-1</code>,  <code>2.1.7-0</code>,  <code>2.1.6-1</code>,  <code>2.1.6-0</code>,  <code>2.1.5-0</code>,  </span></summary>
      

      ``2.1.10-0``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.7-1``,  ``2.1.7-0``,  ``2.1.6-1``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``<1.82``
   :depends on blast: ``>=2.9,<3``
   :depends on hmmer: ``3.4.*``
   :depends on infernal: ``>=1.1.5,<2``
   :depends on libtiff: 
   :depends on openjdk: ``>8``
   :depends on pillow: 
   :depends on python: ``>=3.10,<3.14``
   :depends on r-base: 
   :depends on r-ggplot2: 
   :depends on r-reshape2: 
   :depends on reportlab: 
   :depends on typing-extensions: 
   :depends on viennarna: ``<2``

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

    pixi global install mitos

to add into an existing workspace instead, run::

    pixi add mitos

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mitos

Alternatively, to install into a new environment, run::

    conda create -n envname mitos

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mitos:<tag>

(see `mitos/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mitos| image:: https://img.shields.io/conda/dn/bioconda/mitos.svg?style=flat
   :target: https://anaconda.org/bioconda/mitos
   :alt:   (downloads)
.. |docker_mitos| image:: https://quay.io/repository/biocontainers/mitos/status
   :target: https://quay.io/repository/biocontainers/mitos
.. _`mitos/tags`: https://quay.io/repository/biocontainers/mitos?tab=tags


.. raw:: html

    <script>
        var package = "mitos";
        var versions = ["2.1.10","2.1.9","2.1.9","2.1.8","2.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitos/README.html