:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqspec'
.. highlight: bash

seqspec
=======

.. conda:recipe:: seqspec
   :replaces_section_title:
   :noindex:

   File format that describes data generated from genomics experiments.  File format and seqspec tool enable uniform processing of genomics data.

   :homepage: https://github.com/sbooeshaghi/seqspec
   :license: MIT
   :recipe: /`seqspec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqspec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqspec/meta.yaml>`_

   


.. conda:package:: seqspec

   |downloads_seqspec| |docker_seqspec|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends on biopython: 
   :depends on jsonschema: 
   :depends on matplotlib-base: 
   :depends on openai-agents: ``>=0.2.8``
   :depends on openinference-instrumentation-openai-agents: ``>=1.2.0``
   :depends on opentelemetry-sdk: ``>=1.36.0``
   :depends on packaging: 
   :depends on pydantic: 
   :depends on python: ``>=3.6``
   :depends on python-newick: 
   :depends on pyyaml: ``>=6.0``
   :depends on requests: 

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

    pixi global install seqspec

to add into an existing workspace instead, run::

    pixi add seqspec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqspec

Alternatively, to install into a new environment, run::

    conda create -n envname seqspec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqspec:<tag>

(see `seqspec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqspec| image:: https://img.shields.io/conda/dn/bioconda/seqspec.svg?style=flat
   :target: https://anaconda.org/bioconda/seqspec
   :alt:   (downloads)
.. |docker_seqspec| image:: https://quay.io/repository/biocontainers/seqspec/status
   :target: https://quay.io/repository/biocontainers/seqspec
.. _`seqspec/tags`: https://quay.io/repository/biocontainers/seqspec?tab=tags


.. raw:: html

    <script>
        var package = "seqspec";
        var versions = ["0.4.0","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqspec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqspec/README.html