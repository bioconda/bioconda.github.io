:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoi-utils'
.. highlight: bash

kipoi-utils
===========

.. conda:recipe:: kipoi-utils
   :replaces_section_title:
   :noindex:

   kipoi\-utils\: utils used in various packages related to kipoi

   :homepage: https://github.com/kipoi/kipoi-utils
   :license: MIT / MIT
   :recipe: /`kipoi-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi-utils/meta.yaml>`_

   kipoi\-utils\: utils used in various packages related to kipoi


.. conda:package:: kipoi-utils

   |downloads_kipoi-utils| |docker_kipoi-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.3.8-1</code>,  <code>0.3.8-0</code>,  </span></summary>
      

      ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.1.12-2``,  ``0.1.12-1``,  ``0.1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: 
   :depends on numpy: 
   :depends on pandas: ``>=0.21.0``
   :depends on python: 
   :depends on pyyaml: ``>=5.1.0``
   :depends on related: 
   :depends on six: 
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

    pixi global install kipoi-utils

to add into an existing workspace instead, run::

    pixi add kipoi-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kipoi-utils

Alternatively, to install into a new environment, run::

    conda create -n envname kipoi-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kipoi-utils:<tag>

(see `kipoi-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kipoi-utils| image:: https://img.shields.io/conda/dn/bioconda/kipoi-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoi-utils
   :alt:   (downloads)
.. |docker_kipoi-utils| image:: https://quay.io/repository/biocontainers/kipoi-utils/status
   :target: https://quay.io/repository/biocontainers/kipoi-utils
.. _`kipoi-utils/tags`: https://quay.io/repository/biocontainers/kipoi-utils?tab=tags


.. raw:: html

    <script>
        var package = "kipoi-utils";
        var versions = ["0.7.7","0.7.6","0.7.5","0.7.2","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi-utils/README.html