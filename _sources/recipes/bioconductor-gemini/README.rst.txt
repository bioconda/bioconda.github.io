:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gemini'
.. highlight: bash

bioconductor-gemini
===================

.. conda:recipe:: bioconductor-gemini
   :replaces_section_title:
   :noindex:

   GEMINI\: Variational inference approach to infer genetic interactions from pairwise CRISPR screens

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gemini.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-gemini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemini/meta.yaml>`_

   GEMINI uses log\-fold changes to model sample\-dependent and independent effects\, and uses a variational Bayes approach to infer these effects. The inferred effects are used to score and identify genetic interactions\, such as lethality and recovery. More details can be found in Zamanighomi et al. 2019 \(in press\).


.. conda:package:: bioconductor-gemini

   |downloads_bioconductor-gemini| |docker_bioconductor-gemini|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-mixtools: 
   :depends on r-pbmcapply: 
   :depends on r-scales: 

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

    pixi global install bioconductor-gemini

to add into an existing workspace instead, run::

    pixi add bioconductor-gemini

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gemini

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gemini

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gemini:<tag>

(see `bioconductor-gemini/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gemini| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gemini.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gemini
   :alt:   (downloads)
.. |docker_bioconductor-gemini| image:: https://quay.io/repository/biocontainers/bioconductor-gemini/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gemini
.. _`bioconductor-gemini/tags`: https://quay.io/repository/biocontainers/bioconductor-gemini?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gemini";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gemini/README.html