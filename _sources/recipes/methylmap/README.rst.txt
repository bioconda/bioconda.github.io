:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylmap'
.. highlight: bash

methylmap
=========

.. conda:recipe:: methylmap
   :replaces_section_title:
   :noindex:

   Plotting tool for population\-scale nucleotide modifications

   :homepage: https://github.com/EliseCoopman/methylmap
   :license: MIT / MIT
   :recipe: /`methylmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylmap/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.11.28.518239`

   


.. conda:package:: methylmap

   |downloads_methylmap| |docker_methylmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.11-0</code>,  <code>0.5.7-0</code>,  <code>0.5.6-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.4.6-0</code>,  </span></summary>
      

      ``0.5.11-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dash: 
   :depends on dash-bootstrap-components: 
   :depends on numpy: ``>=1.14.3``
   :depends on ont-modkit: 
   :depends on pandas: ``>=0.23.4``
   :depends on plotly: ``>=5.4.0``
   :depends on pyranges: ``>=0.0.77``
   :depends on python: ``>=3``
   :depends on scipy: 
   :depends on tabix: 
   :depends on tqdm: 

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

    pixi global install methylmap

to add into an existing workspace instead, run::

    pixi add methylmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install methylmap

Alternatively, to install into a new environment, run::

    conda create -n envname methylmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/methylmap:<tag>

(see `methylmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_methylmap| image:: https://img.shields.io/conda/dn/bioconda/methylmap.svg?style=flat
   :target: https://anaconda.org/bioconda/methylmap
   :alt:   (downloads)
.. |docker_methylmap| image:: https://quay.io/repository/biocontainers/methylmap/status
   :target: https://quay.io/repository/biocontainers/methylmap
.. _`methylmap/tags`: https://quay.io/repository/biocontainers/methylmap?tab=tags


.. raw:: html

    <script>
        var package = "methylmap";
        var versions = ["0.5.11","0.5.7","0.5.6","0.5.5","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylmap/README.html