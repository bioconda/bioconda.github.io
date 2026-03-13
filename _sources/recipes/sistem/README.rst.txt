:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sistem'
.. highlight: bash

sistem
======

.. conda:recipe:: sistem
   :replaces_section_title:
   :noindex:

   A tool for simulating tumor growth\, metastasis\, and DNA\-seq data.

   :homepage: https://github.com/samsonweiner/sistem
   :documentation: https://sistem.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`sistem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistem/meta.yaml>`_

   SISTEM \(SImulation of Single\-cell Tumor Evolution and Metastasis\) is a software package and mathematical model for simulating tumor evolution\, cell migrations\, and DNA\-seq data at single\-cell resolution.



.. conda:package:: sistem

   |downloads_sistem| |docker_sistem|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on biopython: ``>=1.8.1``
   :depends on dwgsim: 
   :depends on numpy: ``>=1.24.3``
   :depends on pyfaidx: ``>=0.7.2.1``
   :depends on python: ``>=3.9``
   :depends on samtools: 
   :depends on scikit-learn: ``>=1.6.1``
   :depends on scipy: ``>=1.10.1``

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

    pixi global install sistem

to add into an existing workspace instead, run::

    pixi add sistem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sistem

Alternatively, to install into a new environment, run::

    conda create -n envname sistem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sistem:<tag>

(see `sistem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sistem| image:: https://img.shields.io/conda/dn/bioconda/sistem.svg?style=flat
   :target: https://anaconda.org/bioconda/sistem
   :alt:   (downloads)
.. |docker_sistem| image:: https://quay.io/repository/biocontainers/sistem/status
   :target: https://quay.io/repository/biocontainers/sistem
.. _`sistem/tags`: https://quay.io/repository/biocontainers/sistem?tab=tags


.. raw:: html

    <script>
        var package = "sistem";
        var versions = ["1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sistem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sistem/README.html