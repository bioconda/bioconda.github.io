:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opentargets-validator'
.. highlight: bash

opentargets-validator
=====================

.. conda:recipe:: opentargets-validator
   :replaces_section_title:
   :noindex:

   Evidence validation at targetvalidation.org

   :homepage: https://github.com/opentargets/validator
   :license: APACHE / Apache, Version 2.0
   :recipe: /`opentargets-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets-validator/meta.yaml>`_

   


.. conda:package:: opentargets-validator

   |downloads_opentargets-validator| |docker_opentargets-validator|

   :versions:
      
      

      ``1.0.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``

      

   
   :depends on pathos: ``>=0.3.1``
   :depends on python: ``>=3.8``
   :depends on python-fastjsonschema: ``>=2.18.0``

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

    pixi global install opentargets-validator

to add into an existing workspace instead, run::

    pixi add opentargets-validator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install opentargets-validator

Alternatively, to install into a new environment, run::

    conda create -n envname opentargets-validator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/opentargets-validator:<tag>

(see `opentargets-validator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_opentargets-validator| image:: https://img.shields.io/conda/dn/bioconda/opentargets-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/opentargets-validator
   :alt:   (downloads)
.. |docker_opentargets-validator| image:: https://quay.io/repository/biocontainers/opentargets-validator/status
   :target: https://quay.io/repository/biocontainers/opentargets-validator
.. _`opentargets-validator/tags`: https://quay.io/repository/biocontainers/opentargets-validator?tab=tags


.. raw:: html

    <script>
        var package = "opentargets-validator";
        var versions = ["1.0.0","0.8.0","0.7.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opentargets-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opentargets-validator/README.html