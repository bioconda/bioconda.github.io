:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grz-pydantic-models'
.. highlight: bash

grz-pydantic-models
===================

.. conda:recipe:: grz-pydantic-models
   :replaces_section_title:
   :noindex:

   Pydantic models for the GRZ metadata schema

   :homepage: https://github.com/BfArM-MVH/grz-tools
   :license: MIT
   :recipe: /`grz-pydantic-models <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-pydantic-models>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-pydantic-models/meta.yaml>`_

   


.. conda:package:: grz-pydantic-models

   |downloads_grz-pydantic-models| |docker_grz-pydantic-models|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  </span></summary>
      

      ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pydantic: ``>=2.9.2,<3``
   :depends on python: ``>=3.12``

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

    pixi global install grz-pydantic-models

to add into an existing workspace instead, run::

    pixi add grz-pydantic-models

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grz-pydantic-models

Alternatively, to install into a new environment, run::

    conda create -n envname grz-pydantic-models

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grz-pydantic-models:<tag>

(see `grz-pydantic-models/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grz-pydantic-models| image:: https://img.shields.io/conda/dn/bioconda/grz-pydantic-models.svg?style=flat
   :target: https://anaconda.org/bioconda/grz-pydantic-models
   :alt:   (downloads)
.. |docker_grz-pydantic-models| image:: https://quay.io/repository/biocontainers/grz-pydantic-models/status
   :target: https://quay.io/repository/biocontainers/grz-pydantic-models
.. _`grz-pydantic-models/tags`: https://quay.io/repository/biocontainers/grz-pydantic-models?tab=tags


.. raw:: html

    <script>
        var package = "grz-pydantic-models";
        var versions = ["2.5.0","2.4.0","2.3.1","2.3.0","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grz-pydantic-models/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grz-pydantic-models/README.html