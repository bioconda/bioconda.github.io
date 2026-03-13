:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgscatalog.calc'
.. highlight: bash

pgscatalog.calc
===============

.. conda:recipe:: pgscatalog.calc
   :replaces_section_title:
   :noindex:

   Libraries and applications for working with calculated polygenic scores.

   :homepage: https://github.com/PGScatalog/pygscatalog
   :license: APACHE / Apache-2.0
   :recipe: /`pgscatalog.calc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.calc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.calc/meta.yaml>`_

   


.. conda:package:: pgscatalog.calc

   |downloads_pgscatalog.calc| |docker_pgscatalog.calc|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends on numpy: ``>=1.26.4,<2.0.0``
   :depends on pandas: ``>=2.2.0,<3.0.0``
   :depends on pgscatalog.core: ``>=0.3.0,<2.0.0``
   :depends on pyarrow: ``>=15.0.0,<16.0.0``
   :depends on python: ``>=3.10``
   :depends on scikit-learn: ``>=1.4.0,<2.0.0``
   :depends on scipy: ``>=1.12.0,<2.0.0``

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

    pixi global install pgscatalog.calc

to add into an existing workspace instead, run::

    pixi add pgscatalog.calc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pgscatalog.calc

Alternatively, to install into a new environment, run::

    conda create -n envname pgscatalog.calc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pgscatalog.calc:<tag>

(see `pgscatalog.calc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pgscatalog.calc| image:: https://img.shields.io/conda/dn/bioconda/pgscatalog.calc.svg?style=flat
   :target: https://anaconda.org/bioconda/pgscatalog.calc
   :alt:   (downloads)
.. |docker_pgscatalog.calc| image:: https://quay.io/repository/biocontainers/pgscatalog.calc/status
   :target: https://quay.io/repository/biocontainers/pgscatalog.calc
.. _`pgscatalog.calc/tags`: https://quay.io/repository/biocontainers/pgscatalog.calc?tab=tags


.. raw:: html

    <script>
        var package = "pgscatalog.calc";
        var versions = ["0.3.1","0.3.1","0.3.0","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgscatalog.calc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgscatalog.calc/README.html