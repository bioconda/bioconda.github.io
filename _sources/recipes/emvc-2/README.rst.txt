:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emvc-2'
.. highlight: bash

emvc-2
======

.. conda:recipe:: emvc-2
   :replaces_section_title:
   :noindex:

   An efficient SNV variant caller based on the expectation maximization algorithm.

   :homepage: https://github.com/guilledufort/EMVC-2
   :license: MIT / MIT
   :recipe: /`emvc-2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emvc-2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emvc-2/meta.yaml>`_

   


.. conda:package:: emvc-2

   |downloads_emvc-2| |docker_emvc-2|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on numpy: 
   :depends on python: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on tqdm: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install emvc-2

to add into an existing workspace instead, run::

    pixi add emvc-2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install emvc-2

Alternatively, to install into a new environment, run::

    conda create -n envname emvc-2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/emvc-2:<tag>

(see `emvc-2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_emvc-2| image:: https://img.shields.io/conda/dn/bioconda/emvc-2.svg?style=flat
   :target: https://anaconda.org/bioconda/emvc-2
   :alt:   (downloads)
.. |docker_emvc-2| image:: https://quay.io/repository/biocontainers/emvc-2/status
   :target: https://quay.io/repository/biocontainers/emvc-2
.. _`emvc-2/tags`: https://quay.io/repository/biocontainers/emvc-2?tab=tags


.. raw:: html

    <script>
        var package = "emvc-2";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emvc-2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emvc-2/README.html