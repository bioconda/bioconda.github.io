:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboseed'
.. highlight: bash

riboseed
========

.. conda:recipe:: riboseed
   :replaces_section_title:
   :noindex:

   riboSeed\: assemble across rDNA regions

   :homepage: https://github.com/nickp60/riboSeed
   :license: MIT / MIT License
   :recipe: /`riboseed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseed/meta.yaml>`_

   Genome assembly polisher to bridge rDNA gaps


.. conda:package:: riboseed

   |downloads_riboseed| |docker_riboseed|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.90-0</code>,  <code>0.4.89-0</code>,  <code>0.4.88-0</code>,  <code>0.4.87-0</code>,  <code>0.4.86-0</code>,  <code>0.4.73-1</code>,  <code>0.4.73-0</code>,  <code>0.4.71-0</code>,  <code>0.4.70-2</code>,  </span></summary>
      

      ``0.4.90-0``,  ``0.4.89-0``,  ``0.4.88-0``,  ``0.4.87-0``,  ``0.4.86-0``,  ``0.4.73-1``,  ``0.4.73-0``,  ``0.4.71-0``,  ``0.4.70-2``,  ``0.4.68-2``,  ``0.4.67-2``,  ``0.4.65-1``,  ``0.4.47-1``,  ``0.4.47-0``,  ``0.4.16-0``

      
      .. raw:: html

         </details>
      

   
   :depends on barrnap: 
   :depends on bcbiogff: 
   :depends on bcftools: 
   :depends on biopython: 
   :depends on blast: 
   :depends on bwa: 
   :depends on coverage: 
   :depends on jenkspy: 
   :depends on mafft: 
   :depends on matplotlib: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on prank: 
   :depends on pyaml: 
   :depends on pysam: 
   :depends on python: ``3.5.*``
   :depends on quast: ``>=4.6.3``
   :depends on samtools: 
   :depends on skesa: 
   :depends on spades: ``3.9.1``

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

    pixi global install riboseed

to add into an existing workspace instead, run::

    pixi add riboseed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install riboseed

Alternatively, to install into a new environment, run::

    conda create -n envname riboseed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/riboseed:<tag>

(see `riboseed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_riboseed| image:: https://img.shields.io/conda/dn/bioconda/riboseed.svg?style=flat
   :target: https://anaconda.org/bioconda/riboseed
   :alt:   (downloads)
.. |docker_riboseed| image:: https://quay.io/repository/biocontainers/riboseed/status
   :target: https://quay.io/repository/biocontainers/riboseed
.. _`riboseed/tags`: https://quay.io/repository/biocontainers/riboseed?tab=tags


.. raw:: html

    <script>
        var package = "riboseed";
        var versions = ["0.4.90","0.4.89","0.4.88","0.4.87","0.4.86"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboseed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboseed/README.html