:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycoqc'
.. highlight: bash

pycoqc
======

.. conda:recipe:: pycoqc
   :replaces_section_title:
   :noindex:

   PycoQC computes metrics and generates interactive QC plots for Oxford Nanopore technologies sequencing data

   :homepage: https://github.com/a-slide/pycoQC
   :documentation: https://a-slide.github.io/pycoQC/
   
   :license: GPL / GNU General Public v3 (GPLv3)
   :recipe: /`pycoqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycoqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycoqc/meta.yaml>`_

   


.. conda:package:: pycoqc

   |downloads_pycoqc| |docker_pycoqc|

   :versions:
      
      

      ``2.5.2-0``,  ``2.5.0.23-0``,  ``2.5.0.21-0``,  ``2.5.0.3-0``,  ``2.2.4-0``,  ``2.2.3-2``,  ``2.2.3-1``,  ``1.0.alpha1-0``

      

   
   :depends on h5py: ``2.9.0.*``
   :depends on jinja2: ``2.10.1.*``
   :depends on numpy: ``1.17.1.*``
   :depends on pandas: ``0.25.1.*``
   :depends on plotly: ``4.1.0.*``
   :depends on pysam: ``0.15.3.*``
   :depends on python: ``>=3.6``
   :depends on scipy: ``1.3.1.*``
   :depends on tqdm: ``4.35.0.*``

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

    pixi global install pycoqc

to add into an existing workspace instead, run::

    pixi add pycoqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pycoqc

Alternatively, to install into a new environment, run::

    conda create -n envname pycoqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pycoqc:<tag>

(see `pycoqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pycoqc| image:: https://img.shields.io/conda/dn/bioconda/pycoqc.svg?style=flat
   :target: https://anaconda.org/bioconda/pycoqc
   :alt:   (downloads)
.. |docker_pycoqc| image:: https://quay.io/repository/biocontainers/pycoqc/status
   :target: https://quay.io/repository/biocontainers/pycoqc
.. _`pycoqc/tags`: https://quay.io/repository/biocontainers/pycoqc?tab=tags


.. raw:: html

    <script>
        var package = "pycoqc";
        var versions = ["2.5.2","2.5.0.23","2.5.0.21","2.5.0.3","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycoqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycoqc/README.html