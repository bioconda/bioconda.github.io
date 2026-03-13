:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biasaway'
.. highlight: bash

biasaway
========

.. conda:recipe:: biasaway
   :replaces_section_title:
   :noindex:

   BiasAway\: a tool to generate composition\-matched background sequences

   :homepage: https://bitbucket.org/CBGR/biasaway
   :documentation: https://biasaway.rtfd.io
   
   :license: GPL / GPLv3
   :recipe: /`biasaway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biasaway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biasaway/meta.yaml>`_

   BiasAway provides user with four models for generating background sequences useful to enrichment analyses. These backgrounds derived from mono\- and di\- nucleotide shuffled sequences\, and genomic sequences matched to the GC content of the target data.


.. conda:package:: biasaway

   |downloads_biasaway| |docker_biasaway|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-0</code>,  <code>3.2.7-0</code>,  <code>3.2.5-0</code>,  <code>3.2.4-0</code>,  <code>3.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.4-0</code>,  </span></summary>
      

      ``3.3.0-0``,  ``3.2.7-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.4-0``,  ``2.0.1-0``,  ``1.0.4-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on cyushuffle: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3.4``
   :depends on scikit-learn: 
   :depends on seaborn: 

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

    pixi global install biasaway

to add into an existing workspace instead, run::

    pixi add biasaway

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biasaway

Alternatively, to install into a new environment, run::

    conda create -n envname biasaway

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biasaway:<tag>

(see `biasaway/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biasaway| image:: https://img.shields.io/conda/dn/bioconda/biasaway.svg?style=flat
   :target: https://anaconda.org/bioconda/biasaway
   :alt:   (downloads)
.. |docker_biasaway| image:: https://quay.io/repository/biocontainers/biasaway/status
   :target: https://quay.io/repository/biocontainers/biasaway
.. _`biasaway/tags`: https://quay.io/repository/biocontainers/biasaway?tab=tags


.. raw:: html

    <script>
        var package = "biasaway";
        var versions = ["3.3.0","3.2.7","3.2.5","3.2.4","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biasaway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biasaway/README.html