:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathifier'
.. highlight: bash

bioconductor-pathifier
======================

.. conda:recipe:: bioconductor-pathifier
   :replaces_section_title:
   :noindex:

   Quantify deregulation of pathways in cancer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pathifier.html
   :license: Artistic-1.0
   :recipe: /`bioconductor-pathifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathifier/meta.yaml>`_
   :links: biotools: :biotools:`pathifier`, doi: :doi:`10.1073/pnas.1219651110`

   Pathifier is an algorithm that infers pathway deregulation scores for each tumor sample on the basis of expression data. This score is determined\, in a context\-specific manner\, for every particular dataset and type of cancer that is being investigated. The algorithm transforms gene\-level information into pathway\-level information\, generating a compact and biologically relevant representation of each sample.


.. conda:package:: bioconductor-pathifier

   |downloads_bioconductor-pathifier| |docker_bioconductor-pathifier|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-princurve: ``>=2.0.4``
   :depends on r-r.oo: 

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

    pixi global install bioconductor-pathifier

to add into an existing workspace instead, run::

    pixi add bioconductor-pathifier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pathifier

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pathifier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pathifier:<tag>

(see `bioconductor-pathifier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pathifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathifier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathifier
   :alt:   (downloads)
.. |docker_bioconductor-pathifier| image:: https://quay.io/repository/biocontainers/bioconductor-pathifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathifier
.. _`bioconductor-pathifier/tags`: https://quay.io/repository/biocontainers/bioconductor-pathifier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathifier";
        var versions = ["1.48.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathifier/README.html