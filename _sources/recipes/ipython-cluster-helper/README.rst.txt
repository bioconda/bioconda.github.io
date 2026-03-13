:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ipython-cluster-helper'
.. highlight: bash

ipython-cluster-helper
======================

.. conda:recipe:: ipython-cluster-helper
   :replaces_section_title:
   :noindex:

   Tool to easily start up an IPython cluster on different schedulers

   :homepage: https://github.com/roryk/ipython-cluster-helper
   :license: MIT
   :recipe: /`ipython-cluster-helper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipython-cluster-helper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipython-cluster-helper/meta.yaml>`_

   


.. conda:package:: ipython-cluster-helper

   |downloads_ipython-cluster-helper| |docker_ipython-cluster-helper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.4-1</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-0</code>,  <code>0.5.7-1</code>,  </span></summary>
      

      ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.7-1``,  ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ipyparallel: ``>=6.0.2``
   :depends on netifaces: 
   :depends on python: 
   :depends on pyzmq: 
   :depends on zeromq: 

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

    pixi global install ipython-cluster-helper

to add into an existing workspace instead, run::

    pixi add ipython-cluster-helper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ipython-cluster-helper

Alternatively, to install into a new environment, run::

    conda create -n envname ipython-cluster-helper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ipython-cluster-helper:<tag>

(see `ipython-cluster-helper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ipython-cluster-helper| image:: https://img.shields.io/conda/dn/bioconda/ipython-cluster-helper.svg?style=flat
   :target: https://anaconda.org/bioconda/ipython-cluster-helper
   :alt:   (downloads)
.. |docker_ipython-cluster-helper| image:: https://quay.io/repository/biocontainers/ipython-cluster-helper/status
   :target: https://quay.io/repository/biocontainers/ipython-cluster-helper
.. _`ipython-cluster-helper/tags`: https://quay.io/repository/biocontainers/ipython-cluster-helper?tab=tags


.. raw:: html

    <script>
        var package = "ipython-cluster-helper";
        var versions = ["0.6.4","0.6.4","0.6.3","0.6.2","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ipython-cluster-helper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ipython-cluster-helper/README.html