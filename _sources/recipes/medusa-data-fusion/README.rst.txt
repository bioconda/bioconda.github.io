:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medusa-data-fusion'
.. highlight: bash

medusa-data-fusion
==================

.. conda:recipe:: medusa-data-fusion
   :replaces_section_title:
   :noindex:

   Medusa is an approach to detect size\-k modules of objects that\, taken together\,
   appear most significant to another set of objects. It builds on collective
   matrix factorization to derive different semantics\, and it formulates the
   growing of the modules as a submodular optimization program.


   :homepage: https://github.com/marinkaz/medusa
   :license: GPLv3
   :recipe: /`medusa-data-fusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa-data-fusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa-data-fusion/meta.yaml>`_

   


.. conda:package:: medusa-data-fusion

   |downloads_medusa-data-fusion| |docker_medusa-data-fusion|

   :versions:
      
      

      ``0.1-3``,  ``0.1-2``,  ``0.1-0``

      

   
   :depends on numpy: 
   :depends on python: ``<3``
   :depends on scipy: 

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

    pixi global install medusa-data-fusion

to add into an existing workspace instead, run::

    pixi add medusa-data-fusion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install medusa-data-fusion

Alternatively, to install into a new environment, run::

    conda create -n envname medusa-data-fusion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/medusa-data-fusion:<tag>

(see `medusa-data-fusion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_medusa-data-fusion| image:: https://img.shields.io/conda/dn/bioconda/medusa-data-fusion.svg?style=flat
   :target: https://anaconda.org/bioconda/medusa-data-fusion
   :alt:   (downloads)
.. |docker_medusa-data-fusion| image:: https://quay.io/repository/biocontainers/medusa-data-fusion/status
   :target: https://quay.io/repository/biocontainers/medusa-data-fusion
.. _`medusa-data-fusion/tags`: https://quay.io/repository/biocontainers/medusa-data-fusion?tab=tags


.. raw:: html

    <script>
        var package = "medusa-data-fusion";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medusa-data-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medusa-data-fusion/README.html