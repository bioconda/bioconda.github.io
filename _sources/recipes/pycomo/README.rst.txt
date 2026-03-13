:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycomo'
.. highlight: bash

pycomo
======

.. conda:recipe:: pycomo
   :replaces_section_title:
   :noindex:

   PyCoMo is a software package for generating and analysing compartmentalized community metabolic models.

   :homepage: https://github.com/univieCUBE/PyCoMo
   :license: MIT / MIT
   :recipe: /`pycomo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycomo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycomo/meta.yaml>`_

   


.. conda:package:: pycomo

   |downloads_pycomo| |docker_pycomo|

   :versions:
      
      

      ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends on cobra: ``>=0.23.0``
   :depends on numpy: ``>=1.22.4``
   :depends on pandas: ``>=1.5.3``
   :depends on python: ``>=3.9``
   :depends on python-libsbml: ``>=5.20.1``

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

    pixi global install pycomo

to add into an existing workspace instead, run::

    pixi add pycomo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pycomo

Alternatively, to install into a new environment, run::

    conda create -n envname pycomo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pycomo:<tag>

(see `pycomo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pycomo| image:: https://img.shields.io/conda/dn/bioconda/pycomo.svg?style=flat
   :target: https://anaconda.org/bioconda/pycomo
   :alt:   (downloads)
.. |docker_pycomo| image:: https://quay.io/repository/biocontainers/pycomo/status
   :target: https://quay.io/repository/biocontainers/pycomo
.. _`pycomo/tags`: https://quay.io/repository/biocontainers/pycomo?tab=tags


.. raw:: html

    <script>
        var package = "pycomo";
        var versions = ["0.2.9","0.2.8","0.2.6","0.2.5","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycomo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycomo/README.html