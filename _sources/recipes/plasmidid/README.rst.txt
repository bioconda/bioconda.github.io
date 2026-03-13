:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidid'
.. highlight: bash

plasmidid
=========

.. conda:recipe:: plasmidid
   :replaces_section_title:
   :noindex:

   Pipeline for plasmid identification and reconstruction

   :homepage: https://github.com/BU-ISCIII/plasmidID
   :license: GPLv3
   :recipe: /`plasmidid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidid/meta.yaml>`_

   PlasmidID is a mapping\-based\, assembly\-assisted plasmid identification tool that analyzes and gives graphic solution for plasmid identification.


.. conda:package:: plasmidid

   |downloads_plasmidid| |docker_plasmidid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.5-0</code>,  <code>1.6.4-3</code>,  <code>1.6.4-2</code>,  <code>1.6.4-1</code>,  <code>1.6.4-0</code>,  <code>1.6.3-2</code>,  <code>1.6.3-1</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  </span></summary>
      

      ``1.6.5-0``,  ``1.6.4-3``,  ``1.6.4-2``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bc: 
   :depends on bedtools: 
   :depends on biopython: 
   :depends on blast: 
   :depends on bowtie2: 
   :depends on circos: 
   :depends on gawk: 
   :depends on mash: ``>=2``
   :depends on numpy: 
   :depends on pandas: 
   :depends on perl-gd: ``>=2.71``
   :depends on prokka: ``>=1.14``
   :depends on python: ``>=3.6``
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on spades: 
   :depends on tabulate: 
   :depends on tbb: ``2020.2``
   :depends on trimmomatic: 
   :depends on wget: 

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

    pixi global install plasmidid

to add into an existing workspace instead, run::

    pixi add plasmidid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plasmidid

Alternatively, to install into a new environment, run::

    conda create -n envname plasmidid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plasmidid:<tag>

(see `plasmidid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plasmidid| image:: https://img.shields.io/conda/dn/bioconda/plasmidid.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidid
   :alt:   (downloads)
.. |docker_plasmidid| image:: https://quay.io/repository/biocontainers/plasmidid/status
   :target: https://quay.io/repository/biocontainers/plasmidid
.. _`plasmidid/tags`: https://quay.io/repository/biocontainers/plasmidid?tab=tags


.. raw:: html

    <script>
        var package = "plasmidid";
        var versions = ["1.6.5","1.6.4","1.6.4","1.6.4","1.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidid/README.html