:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ea-utils'
.. highlight: bash

ea-utils
========

.. conda:recipe:: ea-utils
   :replaces_section_title:
   :noindex:

   Command\-line tools for processing biological sequencing data.

   :homepage: https://expressionanalysis.github.io/ea-utils/
   :license: MIT
   :recipe: /`ea-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ea-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ea-utils/meta.yaml>`_
   :links: biotools: :biotools:`ea-utils`, doi: :doi:`10.2174/1875036201307010001`

   


.. conda:package:: ea-utils

   |downloads_ea-utils| |docker_ea-utils|

   :versions:
      
      

      ``1.1.2.779-2``,  ``1.1.2.779-1``,  ``1.1.2.779-0``,  ``1.1.2.537-0``

      

   
   :depends on gsl: ``>=2.6,<2.7.0a0``
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``
   :depends on openblas: 
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install ea-utils

to add into an existing workspace instead, run::

    pixi add ea-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ea-utils

Alternatively, to install into a new environment, run::

    conda create -n envname ea-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ea-utils:<tag>

(see `ea-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ea-utils| image:: https://img.shields.io/conda/dn/bioconda/ea-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/ea-utils
   :alt:   (downloads)
.. |docker_ea-utils| image:: https://quay.io/repository/biocontainers/ea-utils/status
   :target: https://quay.io/repository/biocontainers/ea-utils
.. _`ea-utils/tags`: https://quay.io/repository/biocontainers/ea-utils?tab=tags


.. raw:: html

    <script>
        var package = "ea-utils";
        var versions = ["1.1.2.779","1.1.2.779","1.1.2.779","1.1.2.537"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ea-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ea-utils/README.html