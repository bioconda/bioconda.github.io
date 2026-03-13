:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icfree-ml'
.. highlight: bash

icfree-ml
=========

.. conda:recipe:: icfree-ml
   :replaces_section_title:
   :noindex:

   Design of experiments \(DoE\) and machine learning packages for the iCFree project

   :homepage: https://github.com/brsynth/icfree-ml
   :license: MIT / MIT
   :recipe: /`icfree-ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icfree-ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icfree-ml/meta.yaml>`_

   


.. conda:package:: icfree-ml

   |downloads_icfree-ml| |docker_icfree-ml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9.1-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  <code>2.6.0-0</code>,  <code>2.5.2-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  </span></summary>
      

      ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.3-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pydoe2: 
   :depends on pysbol2: 
   :depends on python: ``>3.8,<3.12``

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

    pixi global install icfree-ml

to add into an existing workspace instead, run::

    pixi add icfree-ml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install icfree-ml

Alternatively, to install into a new environment, run::

    conda create -n envname icfree-ml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/icfree-ml:<tag>

(see `icfree-ml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_icfree-ml| image:: https://img.shields.io/conda/dn/bioconda/icfree-ml.svg?style=flat
   :target: https://anaconda.org/bioconda/icfree-ml
   :alt:   (downloads)
.. |docker_icfree-ml| image:: https://quay.io/repository/biocontainers/icfree-ml/status
   :target: https://quay.io/repository/biocontainers/icfree-ml
.. _`icfree-ml/tags`: https://quay.io/repository/biocontainers/icfree-ml?tab=tags


.. raw:: html

    <script>
        var package = "icfree-ml";
        var versions = ["2.9.1","2.9.0","2.8.0","2.7.1","2.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icfree-ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icfree-ml/README.html