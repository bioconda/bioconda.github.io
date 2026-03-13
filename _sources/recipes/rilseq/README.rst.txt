:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rilseq'
.. highlight: bash

rilseq
======

.. conda:recipe:: rilseq
   :replaces_section_title:
   :noindex:

   Processing RILSeq experiments results

   :homepage: http://github.com/asafpr/RILseq
   :license: MIT / MIT
   :recipe: /`rilseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rilseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rilseq/meta.yaml>`_

   


.. conda:package:: rilseq

   |downloads_rilseq| |docker_rilseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.82-0</code>,  <code>0.81-0</code>,  <code>0.80-0</code>,  <code>0.78-1</code>,  <code>0.78-0</code>,  <code>0.77-0</code>,  <code>0.75-0</code>,  <code>0.74-0</code>,  <code>0.73-0</code>,  </span></summary>
      

      ``0.82-0``,  ``0.81-0``,  ``0.80-0``,  ``0.78-1``,  ``0.78-0``,  ``0.77-0``,  ``0.75-0``,  ``0.74-0``,  ``0.73-0``,  ``0.72-0``,  ``0.71-0``,  ``0.70-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on bwa: ``>=0.7.12``
   :depends on numpy: 
   :depends on pysam: ``>=0.14.1``
   :depends on python: ``>=3``
   :depends on samtools: ``>=1.9``
   :depends on scipy: 

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

    pixi global install rilseq

to add into an existing workspace instead, run::

    pixi add rilseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rilseq

Alternatively, to install into a new environment, run::

    conda create -n envname rilseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rilseq:<tag>

(see `rilseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rilseq| image:: https://img.shields.io/conda/dn/bioconda/rilseq.svg?style=flat
   :target: https://anaconda.org/bioconda/rilseq
   :alt:   (downloads)
.. |docker_rilseq| image:: https://quay.io/repository/biocontainers/rilseq/status
   :target: https://quay.io/repository/biocontainers/rilseq
.. _`rilseq/tags`: https://quay.io/repository/biocontainers/rilseq?tab=tags


.. raw:: html

    <script>
        var package = "rilseq";
        var versions = ["0.82","0.81","0.80","0.78","0.78"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rilseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rilseq/README.html