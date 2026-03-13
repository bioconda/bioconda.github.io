:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sccaf'
.. highlight: bash

sccaf
=====

.. conda:recipe:: sccaf
   :replaces_section_title:
   :noindex:

   Single\-Cell Clustering Assessment Framework

   :homepage: https://github.com/SCCAF/sccaf
   :license: MIT / MIT
   :recipe: /`sccaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaf/meta.yaml>`_

   


.. conda:package:: sccaf

   |downloads_sccaf| |docker_sccaf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.10-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7.post1-1</code>,  <code>0.0.7.post1-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7.post1-1``,  ``0.0.7.post1-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on h5py: ``<2.10``
   :depends on louvain: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on python: ``>=3``
   :depends on scanpy: ``>=1.4.4``
   :depends on scikit-learn: 

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

    pixi global install sccaf

to add into an existing workspace instead, run::

    pixi add sccaf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sccaf

Alternatively, to install into a new environment, run::

    conda create -n envname sccaf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sccaf:<tag>

(see `sccaf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sccaf| image:: https://img.shields.io/conda/dn/bioconda/sccaf.svg?style=flat
   :target: https://anaconda.org/bioconda/sccaf
   :alt:   (downloads)
.. |docker_sccaf| image:: https://quay.io/repository/biocontainers/sccaf/status
   :target: https://quay.io/repository/biocontainers/sccaf
.. _`sccaf/tags`: https://quay.io/repository/biocontainers/sccaf?tab=tags


.. raw:: html

    <script>
        var package = "sccaf";
        var versions = ["0.0.10","0.0.9","0.0.8","0.0.7.post1","0.0.7.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sccaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sccaf/README.html