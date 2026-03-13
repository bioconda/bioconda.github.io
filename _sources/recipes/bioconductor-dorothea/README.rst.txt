:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dorothea'
.. highlight: bash

bioconductor-dorothea
=====================

.. conda:recipe:: bioconductor-dorothea
   :replaces_section_title:
   :noindex:

   Collection Of Human And Mouse TF Regulons

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/dorothea.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-dorothea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dorothea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dorothea/meta.yaml>`_

   DoRothEA is a gene regulatory network containing signed transcription factor \(TF\) \- target gene interactions. DoRothEA regulons\, the collection of a TF and its transcriptional targets\, were curated and collected from different types of evidence for both human and mouse. A confidence level was assigned to each TF\-target interaction based on the number of supporting evidence.


.. conda:package:: bioconductor-dorothea

   |downloads_bioconductor-dorothea| |docker_bioconductor-dorothea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bcellviper: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-decoupler: ``>=2.16.0,<2.17.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-magrittr: 

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

    pixi global install bioconductor-dorothea

to add into an existing workspace instead, run::

    pixi add bioconductor-dorothea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dorothea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dorothea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dorothea:<tag>

(see `bioconductor-dorothea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dorothea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dorothea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dorothea
   :alt:   (downloads)
.. |docker_bioconductor-dorothea| image:: https://quay.io/repository/biocontainers/bioconductor-dorothea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dorothea
.. _`bioconductor-dorothea/tags`: https://quay.io/repository/biocontainers/bioconductor-dorothea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dorothea";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dorothea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dorothea/README.html