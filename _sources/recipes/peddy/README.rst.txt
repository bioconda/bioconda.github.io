:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peddy'
.. highlight: bash

peddy
=====

.. conda:recipe:: peddy
   :replaces_section_title:
   :noindex:

   genotype \:\: ped correspondence check\, ancestry check\, sex check. directly\, quickly on VCF

   :homepage: https://github.com/brentp/peddy
   :license: MIT / MIT
   :recipe: /`peddy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peddy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peddy/meta.yaml>`_

   


.. conda:package:: peddy

   |downloads_peddy| |docker_peddy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.8-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-1</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-1</code>,  </span></summary>
      

      ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.6a-0``,  ``0.3.1-0``,  ``0.2.9-0``,  ``0.2.5-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on coloredlogs: 
   :depends on cyvcf2: ``>=0.5.3``
   :depends on matplotlib-base: ``>=1.5.0``
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on scikit-learn: 
   :depends on seaborn: 
   :depends on toolshed: 

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

    pixi global install peddy

to add into an existing workspace instead, run::

    pixi add peddy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install peddy

Alternatively, to install into a new environment, run::

    conda create -n envname peddy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/peddy:<tag>

(see `peddy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_peddy| image:: https://img.shields.io/conda/dn/bioconda/peddy.svg?style=flat
   :target: https://anaconda.org/bioconda/peddy
   :alt:   (downloads)
.. |docker_peddy| image:: https://quay.io/repository/biocontainers/peddy/status
   :target: https://quay.io/repository/biocontainers/peddy
.. _`peddy/tags`: https://quay.io/repository/biocontainers/peddy?tab=tags


.. raw:: html

    <script>
        var package = "peddy";
        var versions = ["0.4.8","0.4.7","0.4.6","0.4.5","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peddy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peddy/README.html