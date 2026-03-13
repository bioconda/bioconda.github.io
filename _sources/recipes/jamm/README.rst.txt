:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jamm'
.. highlight: bash

jamm
====

.. conda:recipe:: jamm
   :replaces_section_title:
   :noindex:

   JAMM is a peak finder for NGS datasets \(ChIP\-Seq\, ATAC\-Seq\, DNase\-Seq..etc.\) that can integrate replicates and assign peak boundaries accurately.

   :homepage: https://github.com/mahmoudibrahim/JAMM
   :license: GPL
   :recipe: /`jamm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jamm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jamm/meta.yaml>`_

   


.. conda:package:: jamm

   |downloads_jamm| |docker_jamm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.8.0-1</code>,  <code>1.0.8.0-0</code>,  <code>1.0.7.6-0</code>,  <code>1.0.7.5-2</code>,  <code>1.0.7.5-1</code>,  <code>1.0.7.5-0</code>,  <code>1.0.7.4-0</code>,  <code>1.0.7.2-3</code>,  <code>1.0.7.2-2</code>,  </span></summary>
      

      ``1.0.8.0-1``,  ``1.0.8.0-0``,  ``1.0.7.6-0``,  ``1.0.7.5-2``,  ``1.0.7.5-1``,  ``1.0.7.5-0``,  ``1.0.7.4-0``,  ``1.0.7.2-3``,  ``1.0.7.2-2``,  ``1.0.7.2-1``,  ``1.0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gawk: 
   :depends on perl: 
   :depends on r-mclust: ``>=5.3``
   :depends on r-signal: 

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

    pixi global install jamm

to add into an existing workspace instead, run::

    pixi add jamm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jamm

Alternatively, to install into a new environment, run::

    conda create -n envname jamm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jamm:<tag>

(see `jamm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jamm| image:: https://img.shields.io/conda/dn/bioconda/jamm.svg?style=flat
   :target: https://anaconda.org/bioconda/jamm
   :alt:   (downloads)
.. |docker_jamm| image:: https://quay.io/repository/biocontainers/jamm/status
   :target: https://quay.io/repository/biocontainers/jamm
.. _`jamm/tags`: https://quay.io/repository/biocontainers/jamm?tab=tags


.. raw:: html

    <script>
        var package = "jamm";
        var versions = ["1.0.8.0","1.0.8.0","1.0.7.6","1.0.7.5","1.0.7.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jamm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jamm/README.html