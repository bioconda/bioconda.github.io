:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainest'
.. highlight: bash

strainest
=========

.. conda:recipe:: strainest
   :replaces_section_title:
   :noindex:

   Abundance estimation of strains

   :homepage: https://github.com/compmetagen/strainest
   :license: GPL / GPL-3.0
   :recipe: /`strainest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainest/meta.yaml>`_

   


.. conda:package:: strainest

   |downloads_strainest| |docker_strainest|

   :versions:
      
      

      ``1.2.4-4``,  ``1.2.4-3``,  ``1.2.4-2``,  ``1.2.4-0``,  ``1.2.2-0``

      

   
   :depends on biopython: ``>=1.50``
   :depends on click: ``>=5.1``
   :depends on libcxx: ``>=9.0.1``
   :depends on matplotlib: ``>=1.3.0``
   :depends on mummer: ``3.23.*``
   :depends on numpy: ``>=1.7.0``
   :depends on pandas: 
   :depends on pysam: ``>=0.9``
   :depends on python: ``>=3.6,<3.7.0a0``
   :depends on python_abi: ``3.6.* *_cp36m``
   :depends on scikit-learn: ``>=0.16.1``
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

    pixi global install strainest

to add into an existing workspace instead, run::

    pixi add strainest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strainest

Alternatively, to install into a new environment, run::

    conda create -n envname strainest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strainest:<tag>

(see `strainest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strainest| image:: https://img.shields.io/conda/dn/bioconda/strainest.svg?style=flat
   :target: https://anaconda.org/bioconda/strainest
   :alt:   (downloads)
.. |docker_strainest| image:: https://quay.io/repository/biocontainers/strainest/status
   :target: https://quay.io/repository/biocontainers/strainest
.. _`strainest/tags`: https://quay.io/repository/biocontainers/strainest?tab=tags


.. raw:: html

    <script>
        var package = "strainest";
        var versions = ["1.2.4","1.2.4","1.2.4","1.2.4","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainest/README.html