:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merqury'
.. highlight: bash

merqury
=======

.. conda:recipe:: merqury
   :replaces_section_title:
   :noindex:

   Evaluate genome assemblies with k\-mers and more.

   :homepage: https://github.com/marbl/merqury
   :license: PUBLIC DOMAIN
   :recipe: /`merqury <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merqury>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merqury/meta.yaml>`_

   Often\, genome assembly projects have illumina whole genome sequencing reads available for the assembled individual. The k\-mer spectrum of this read set can be used for independently evaluating assembly quality without the need of a high quality reference. Merqury provides a set of tools for this purpose.


.. conda:package:: merqury

   |downloads_merqury| |docker_merqury|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3-4</code>,  <code>1.3-3</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.1-3</code>,  <code>1.1-2</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  </span></summary>
      

      ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``v1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.29.2``
   :depends on gawk: 
   :depends on meryl: ``1.4.1.*``
   :depends on mscorefonts: 
   :depends on openjdk: ``>=11.0.1``
   :depends on r-argparse: ``>=2.0.1``
   :depends on r-base: ``>=4``
   :depends on r-ggplot2: ``>=3.3.2,<=3.3.6``
   :depends on r-scales: ``>=1.1.1``
   :depends on samtools: ``>=1.10``
   :depends on sed: 

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

    pixi global install merqury

to add into an existing workspace instead, run::

    pixi add merqury

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install merqury

Alternatively, to install into a new environment, run::

    conda create -n envname merqury

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/merqury:<tag>

(see `merqury/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_merqury| image:: https://img.shields.io/conda/dn/bioconda/merqury.svg?style=flat
   :target: https://anaconda.org/bioconda/merqury
   :alt:   (downloads)
.. |docker_merqury| image:: https://quay.io/repository/biocontainers/merqury/status
   :target: https://quay.io/repository/biocontainers/merqury
.. _`merqury/tags`: https://quay.io/repository/biocontainers/merqury?tab=tags


.. raw:: html

    <script>
        var package = "merqury";
        var versions = ["1.3","1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merqury/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merqury/README.html