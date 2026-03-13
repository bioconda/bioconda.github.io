:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mdp'
.. highlight: bash

bioconductor-mdp
================

.. conda:recipe:: bioconductor-mdp
   :replaces_section_title:
   :noindex:

   Molecular Degree of Perturbation calculates scores for transcriptome data samples based on their perturbation from controls

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mdp.html
   :license: GPL-3
   :recipe: /`bioconductor-mdp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdp/meta.yaml>`_

   The Molecular Degree of Perturbation webtool quantifies the heterogeneity of samples. It takes a data.frame of omic data that contains at least two classes \(control and test\) and assigns a score to all samples based on how perturbed they are compared to the controls. It is based on the Molecular Distance to Health \(Pankla et al. 2009\)\, and expands on this algorithm by adding the options to calculate the z\-score using the modified z\-score \(using median absolute deviation\)\, change the z\-score zeroing threshold\, and look at genes that are most perturbed in the test versus control classes.


.. conda:package:: bioconductor-mdp

   |downloads_bioconductor-mdp| |docker_bioconductor-mdp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-gridextra: 

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

    pixi global install bioconductor-mdp

to add into an existing workspace instead, run::

    pixi add bioconductor-mdp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mdp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mdp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mdp:<tag>

(see `bioconductor-mdp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mdp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mdp
   :alt:   (downloads)
.. |docker_bioconductor-mdp| image:: https://quay.io/repository/biocontainers/bioconductor-mdp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdp
.. _`bioconductor-mdp/tags`: https://quay.io/repository/biocontainers/bioconductor-mdp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mdp";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdp/README.html