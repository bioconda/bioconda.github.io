:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biofluff'
.. highlight: bash

biofluff
========

.. conda:recipe:: biofluff
   :replaces_section_title:
   :noindex:

   Exploratory analysis and visualization of high\-throughput sequencing data.

   :homepage: https://github.com/simonvh/fluff
   :documentation: https://fluff.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`biofluff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biofluff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biofluff/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.2209`

   


.. conda:package:: biofluff

   |downloads_biofluff| |docker_biofluff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.4-1</code>,  <code>3.0.4-0</code>,  <code>3.0.3-1</code>,  <code>3.0.3-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  </span></summary>
      

      ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.3-1``,  ``3.0.3-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on htseq: 
   :depends on matplotlib-base: 
   :depends on palettable: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on scikit-learn: 
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

    pixi global install biofluff

to add into an existing workspace instead, run::

    pixi add biofluff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biofluff

Alternatively, to install into a new environment, run::

    conda create -n envname biofluff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biofluff:<tag>

(see `biofluff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biofluff| image:: https://img.shields.io/conda/dn/bioconda/biofluff.svg?style=flat
   :target: https://anaconda.org/bioconda/biofluff
   :alt:   (downloads)
.. |docker_biofluff| image:: https://quay.io/repository/biocontainers/biofluff/status
   :target: https://quay.io/repository/biocontainers/biofluff
.. _`biofluff/tags`: https://quay.io/repository/biocontainers/biofluff?tab=tags


.. raw:: html

    <script>
        var package = "biofluff";
        var versions = ["3.0.4","3.0.4","3.0.3","3.0.3","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biofluff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biofluff/README.html