:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htsinfer'
.. highlight: bash

htsinfer
========

.. conda:recipe:: htsinfer
   :replaces_section_title:
   :noindex:

   HTSinfer infers metadata from Illumina high throughput sequencing \(HTS\) data

   :homepage: https://github.com/zavolanlab/htsinfer
   :license: APACHE / Apache-2.0
   :recipe: /`htsinfer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsinfer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsinfer/meta.yaml>`_

   


.. conda:package:: htsinfer

   |downloads_htsinfer| |docker_htsinfer|

   :versions:
      
      

      ``1.0.0_rc.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on cutadapt: ``>=3.5,<=4.2``
   :depends on kallisto: ``>=0.46.1,<=0.48.0``
   :depends on numpy: ``>=1.22,<1.25``
   :depends on pandas: ``>=1.3.5,<1.4.0``
   :depends on pyahocorasick: ``>=1.4.0``
   :depends on pydantic: ``>=2,<3``
   :depends on pysam: ``>=0.16.0``
   :depends on python: ``>=3.8,<=3.10``
   :depends on star: ``>=2.7.6``

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

    pixi global install htsinfer

to add into an existing workspace instead, run::

    pixi add htsinfer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install htsinfer

Alternatively, to install into a new environment, run::

    conda create -n envname htsinfer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/htsinfer:<tag>

(see `htsinfer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_htsinfer| image:: https://img.shields.io/conda/dn/bioconda/htsinfer.svg?style=flat
   :target: https://anaconda.org/bioconda/htsinfer
   :alt:   (downloads)
.. |docker_htsinfer| image:: https://quay.io/repository/biocontainers/htsinfer/status
   :target: https://quay.io/repository/biocontainers/htsinfer
.. _`htsinfer/tags`: https://quay.io/repository/biocontainers/htsinfer?tab=tags


.. raw:: html

    <script>
        var package = "htsinfer";
        var versions = ["1.0.0_rc.1","0.11.0","0.11.0","0.10.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htsinfer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htsinfer/README.html