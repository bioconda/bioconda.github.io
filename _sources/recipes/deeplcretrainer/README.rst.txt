:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplcretrainer'
.. highlight: bash

deeplcretrainer
===============

.. conda:recipe:: deeplcretrainer
   :replaces_section_title:
   :noindex:

   Evaluating DeepLC performance and retraining prediction models.

   :homepage: https://github.com/RobbinBouwmeester/DeepLCRetrainer
   :license: Apache-2.0
   :recipe: /`deeplcretrainer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplcretrainer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplcretrainer/meta.yaml>`_

   


.. conda:package:: deeplcretrainer

   |downloads_deeplcretrainer| |docker_deeplcretrainer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11-0</code>,  <code>0.2.8-0</code>,  <code>0.2.1-0</code>,  <code>0.1.22-0</code>,  <code>0.1.21-0</code>,  </span></summary>
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.8-0``,  ``0.2.1-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.19-0``,  ``0.1.17-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 

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

    pixi global install deeplcretrainer

to add into an existing workspace instead, run::

    pixi add deeplcretrainer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deeplcretrainer

Alternatively, to install into a new environment, run::

    conda create -n envname deeplcretrainer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deeplcretrainer:<tag>

(see `deeplcretrainer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deeplcretrainer| image:: https://img.shields.io/conda/dn/bioconda/deeplcretrainer.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplcretrainer
   :alt:   (downloads)
.. |docker_deeplcretrainer| image:: https://quay.io/repository/biocontainers/deeplcretrainer/status
   :target: https://quay.io/repository/biocontainers/deeplcretrainer
.. _`deeplcretrainer/tags`: https://quay.io/repository/biocontainers/deeplcretrainer?tab=tags


.. raw:: html

    <script>
        var package = "deeplcretrainer";
        var versions = ["1.0.2","1.0.1","1.0.0","0.2.12","0.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplcretrainer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplcretrainer/README.html