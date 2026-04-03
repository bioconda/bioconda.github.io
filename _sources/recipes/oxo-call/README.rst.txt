:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oxo-call'
.. highlight: bash

oxo-call
========

.. conda:recipe:: oxo-call
   :replaces_section_title:
   :noindex:

   Model\-intelligent orchestration for CLI bioinformatics — call any tool with LLM intelligence

   :homepage: https://github.com/Traitome/oxo-call
   :documentation: https://traitome.github.io/oxo-call/documentation/
   
   :license: OTHER / Custom
   :recipe: /`oxo-call <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oxo-call>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oxo-call/meta.yaml>`_

   oxo\-call is an AI\-powered CLI assistant for bioinformatics. Instead of 
   memorizing hundreds of flags across dozens of tools\, you describe what 
   you want to accomplish — oxo\-call translates that into a correct\, grounded command.



.. conda:package:: oxo-call

   |downloads_oxo-call| |docker_oxo-call|

   :versions:
      
      

      ``0.10.0-0``,  ``0.9.2-0``,  ``0.6.0-0``

      

   
   :depends on libgcc: ``>=14``

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

    pixi global install oxo-call

to add into an existing workspace instead, run::

    pixi add oxo-call

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oxo-call

Alternatively, to install into a new environment, run::

    conda create -n envname oxo-call

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oxo-call:<tag>

(see `oxo-call/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oxo-call| image:: https://img.shields.io/conda/dn/bioconda/oxo-call.svg?style=flat
   :target: https://anaconda.org/bioconda/oxo-call
   :alt:   (downloads)
.. |docker_oxo-call| image:: https://quay.io/repository/biocontainers/oxo-call/status
   :target: https://quay.io/repository/biocontainers/oxo-call
.. _`oxo-call/tags`: https://quay.io/repository/biocontainers/oxo-call?tab=tags


.. raw:: html

    <script>
        var package = "oxo-call";
        var versions = ["0.10.0","0.9.2","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oxo-call/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oxo-call/README.html