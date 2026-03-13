:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'degenotate'
.. highlight: bash

degenotate
==========

.. conda:recipe:: degenotate
   :replaces_section_title:
   :noindex:

   Annotation of degeneracy of sites in coding regions of a genome

   :homepage: https://github.com/harvardinformatics/degenotate
   :license: MIT
   :recipe: /`degenotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/degenotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/degenotate/meta.yaml>`_

   Annotation of degeneracy of sites in coding regions of a genome


.. conda:package:: degenotate

   |downloads_degenotate| |docker_degenotate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.3-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on networkx: 
   :depends on pysam: 
   :depends on python: ``>=3.10``
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

    pixi global install degenotate

to add into an existing workspace instead, run::

    pixi add degenotate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install degenotate

Alternatively, to install into a new environment, run::

    conda create -n envname degenotate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/degenotate:<tag>

(see `degenotate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_degenotate| image:: https://img.shields.io/conda/dn/bioconda/degenotate.svg?style=flat
   :target: https://anaconda.org/bioconda/degenotate
   :alt:   (downloads)
.. |docker_degenotate| image:: https://quay.io/repository/biocontainers/degenotate/status
   :target: https://quay.io/repository/biocontainers/degenotate
.. _`degenotate/tags`: https://quay.io/repository/biocontainers/degenotate?tab=tags


.. raw:: html

    <script>
        var package = "degenotate";
        var versions = ["1.3","1.2.4","1.2.3","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/degenotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/degenotate/README.html