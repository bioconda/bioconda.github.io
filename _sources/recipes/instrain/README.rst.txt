:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'instrain'
.. highlight: bash

instrain
========

.. conda:recipe:: instrain
   :replaces_section_title:
   :noindex:

   Calculation of strain\-level metrics.

   :homepage: https://github.com/MrOlm/inStrain
   :license: MIT / MIT
   :recipe: /`instrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instrain/meta.yaml>`_

   


.. conda:package:: instrain

   |downloads_instrain| |docker_instrain|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-0</code>,  <code>1.9.1-0</code>,  <code>1.9.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.6-0</code>,  <code>1.7.5-0</code>,  <code>1.7.1-1</code>,  <code>1.7.1-0</code>,  </span></summary>
      

      ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.6-0``,  ``1.7.5-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.7-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.0-0``,  ``1.3.11-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.14-0``,  ``1.2.13-0``,  ``1.2.12-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``<=1.74``
   :depends on h5py: 
   :depends on lmfit: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: ``>=0.25,!=1.1.3``
   :depends on psutil: 
   :depends on pysam: ``>=0.15``
   :depends on pytest: 
   :depends on python: ``>=3.4``
   :depends on seaborn-base: 
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

    pixi global install instrain

to add into an existing workspace instead, run::

    pixi add instrain

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install instrain

Alternatively, to install into a new environment, run::

    conda create -n envname instrain

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/instrain:<tag>

(see `instrain/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_instrain| image:: https://img.shields.io/conda/dn/bioconda/instrain.svg?style=flat
   :target: https://anaconda.org/bioconda/instrain
   :alt:   (downloads)
.. |docker_instrain| image:: https://quay.io/repository/biocontainers/instrain/status
   :target: https://quay.io/repository/biocontainers/instrain
.. _`instrain/tags`: https://quay.io/repository/biocontainers/instrain?tab=tags


.. raw:: html

    <script>
        var package = "instrain";
        var versions = ["1.10.0","1.9.1","1.9.0","1.8.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/instrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/instrain/README.html