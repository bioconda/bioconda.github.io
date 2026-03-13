:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydamage'
.. highlight: bash

pydamage
========

.. conda:recipe:: pydamage
   :replaces_section_title:
   :noindex:

   Damage parameter estimation for ancient DNA.

   :homepage: https://github.com/maxibor/pydamage
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pydamage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydamage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydamage/meta.yaml>`_

   


.. conda:package:: pydamage

   |downloads_pydamage| |docker_pydamage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-0</code>,  <code>0.90-0</code>,  <code>0.80-0</code>,  <code>0.72-0</code>,  <code>0.71-0</code>,  <code>0.70-1</code>,  <code>0.70-0</code>,  <code>0.62-0</code>,  <code>0.61-0</code>,  </span></summary>
      

      ``1.0-0``,  ``0.90-0``,  ``0.80-0``,  ``0.72-0``,  ``0.71-0``,  ``0.70-1``,  ``0.70-0``,  ``0.62-0``,  ``0.61-0``,  ``0.60-1``,  ``0.60-0``,  ``0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on click: 
   :depends on kneed: 
   :depends on matplotlib-base: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: ``>=0.13.0``
   :depends on python: ``>=3.10``
   :depends on scipy: 
   :depends on statsmodels: 
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

    pixi global install pydamage

to add into an existing workspace instead, run::

    pixi add pydamage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pydamage

Alternatively, to install into a new environment, run::

    conda create -n envname pydamage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pydamage:<tag>

(see `pydamage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pydamage| image:: https://img.shields.io/conda/dn/bioconda/pydamage.svg?style=flat
   :target: https://anaconda.org/bioconda/pydamage
   :alt:   (downloads)
.. |docker_pydamage| image:: https://quay.io/repository/biocontainers/pydamage/status
   :target: https://quay.io/repository/biocontainers/pydamage
.. _`pydamage/tags`: https://quay.io/repository/biocontainers/pydamage?tab=tags


.. raw:: html

    <script>
        var package = "pydamage";
        var versions = ["1.0","0.90","0.80","0.72","0.71"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydamage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydamage/README.html