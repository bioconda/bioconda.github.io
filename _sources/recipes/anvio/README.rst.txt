:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anvio'
.. highlight: bash

anvio
=====

.. conda:recipe:: anvio
   :replaces_section_title:
   :noindex:

   A platform for integrated multi\-omics

   :homepage: http://merenlab.org/software/anvio/
   :developer docs: https://github.com/merenlab/anvio
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`anvio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio/meta.yaml>`_

   


.. conda:package:: anvio

   |downloads_anvio| |docker_anvio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7-1</code>,  <code>7-0</code>,  <code>6.2-0</code>,  <code>6.1-1</code>,  <code>6.1-0</code>,  <code>6-0</code>,  <code>5.5.0-0</code>,  <code>5.4.0-0</code>,  <code>5.3.0-0</code>,  </span></summary>
      

      ``7-1``,  ``7-0``,  ``6.2-0``,  ``6.1-1``,  ``6.1-0``,  ``6-0``,  ``5.5.0-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.0-0``,  ``5.1.0-1``,  ``5.0.0-1``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.2-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anvio-minimal: ``7``
   :depends on bioconductor-qvalue: 
   :depends on blast: 
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on centrifuge: 
   :depends on diamond: 
   :depends on fastani: 
   :depends on fasttree: 
   :depends on hmmer: 
   :depends on iqtree: 
   :depends on mcl: 
   :depends on megahit: 
   :depends on muscle: 
   :depends on prodigal: 
   :depends on r-base: 
   :depends on r-magrittr: 
   :depends on r-optparse: 
   :depends on r-stringi: 
   :depends on r-tidyverse: 
   :depends on samtools: 
   :depends on spades: 
   :depends on trimal: 
   :depends on trnascan-se: 

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

    pixi global install anvio

to add into an existing workspace instead, run::

    pixi add anvio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install anvio

Alternatively, to install into a new environment, run::

    conda create -n envname anvio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/anvio:<tag>

(see `anvio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_anvio| image:: https://img.shields.io/conda/dn/bioconda/anvio.svg?style=flat
   :target: https://anaconda.org/bioconda/anvio
   :alt:   (downloads)
.. |docker_anvio| image:: https://quay.io/repository/biocontainers/anvio/status
   :target: https://quay.io/repository/biocontainers/anvio
.. _`anvio/tags`: https://quay.io/repository/biocontainers/anvio?tab=tags


.. raw:: html

    <script>
        var package = "anvio";
        var versions = ["7","7","6.2","6.1","6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anvio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anvio/README.html