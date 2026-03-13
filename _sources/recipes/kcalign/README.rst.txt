:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kcalign'
.. highlight: bash

kcalign
=======

.. conda:recipe:: kcalign
   :replaces_section_title:
   :noindex:

   Kalgin\-based codon\-aware aligner for multiple sequences

   :homepage: https://github.com/davebx/kc-align
   :documentation: https://github.com/davebx/kc-align/blob/master/README.md
   
   :license: OTHER / AFL-3.0-only
   :recipe: /`kcalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kcalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kcalign/meta.yaml>`_

   


.. conda:package:: kcalign

   |downloads_kcalign| |docker_kcalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-0</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.1-0</code>,  <code>0.6-0</code>,  </span></summary>
      

      ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.1-0``,  ``0.6-0``,  ``0.5.16-0``,  ``0.5.15-0``,  ``0.5.14-0``,  ``0.5.13-1``,  ``0.5.13-0``,  ``0.5.11-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on kalign3: 
   :depends on mafft: 
   :depends on python: ``>=3.6``

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

    pixi global install kcalign

to add into an existing workspace instead, run::

    pixi add kcalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kcalign

Alternatively, to install into a new environment, run::

    conda create -n envname kcalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kcalign:<tag>

(see `kcalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kcalign| image:: https://img.shields.io/conda/dn/bioconda/kcalign.svg?style=flat
   :target: https://anaconda.org/bioconda/kcalign
   :alt:   (downloads)
.. |docker_kcalign| image:: https://quay.io/repository/biocontainers/kcalign/status
   :target: https://quay.io/repository/biocontainers/kcalign
.. _`kcalign/tags`: https://quay.io/repository/biocontainers/kcalign?tab=tags


.. raw:: html

    <script>
        var package = "kcalign";
        var versions = ["1.0.2","1.0.1","1.0.1","1.0","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kcalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kcalign/README.html