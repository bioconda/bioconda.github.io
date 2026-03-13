:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tyto'
.. highlight: bash

tyto
====

.. conda:recipe:: tyto
   :replaces_section_title:
   :noindex:

   Tyto \(Take Your Terms from Ontologies\) provides a handy interface for ontologies for use in your Python application.

   :homepage: https://github.com/SynBioDex/tyto
   :license: Apache-2.0
   :recipe: /`tyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tyto/meta.yaml>`_

   


.. conda:package:: tyto

   |downloads_tyto| |docker_tyto|

   :versions:
      
      

      ``1.4-0``,  ``1.0b3-0``

      

   
   :depends on pyparsing: ``<3``
   :depends on python: ``>=3.6``
   :depends on rdflib: ``>=5.0``
   :depends on requests: 
   :depends on sparqlwrapper: 

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

    pixi global install tyto

to add into an existing workspace instead, run::

    pixi add tyto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tyto

Alternatively, to install into a new environment, run::

    conda create -n envname tyto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tyto:<tag>

(see `tyto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tyto| image:: https://img.shields.io/conda/dn/bioconda/tyto.svg?style=flat
   :target: https://anaconda.org/bioconda/tyto
   :alt:   (downloads)
.. |docker_tyto| image:: https://quay.io/repository/biocontainers/tyto/status
   :target: https://quay.io/repository/biocontainers/tyto
.. _`tyto/tags`: https://quay.io/repository/biocontainers/tyto?tab=tags


.. raw:: html

    <script>
        var package = "tyto";
        var versions = ["1.4","1.0b3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tyto/README.html