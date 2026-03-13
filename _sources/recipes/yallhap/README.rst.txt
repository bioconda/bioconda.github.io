:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yallhap'
.. highlight: bash

yallhap
=======

.. conda:recipe:: yallhap
   :replaces_section_title:
   :noindex:

   Modern Y\-chromosome haplogroup inference

   :homepage: https://github.com/trianglegrrl/yallHap
   :documentation: https://github.com/trianglegrrl/yallHap#readme
   
   :license: PolyForm-Noncommercial-1.0.0
   :recipe: /`yallhap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yallhap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yallhap/meta.yaml>`_

   yallHap is a pipeline\-friendly tool for Y\-chromosome haplogroup
   classification supporting modern and ancient DNA with probabilistic
   confidence scoring. It uses the YFull phylogenetic tree and supports
   multiple reference genomes including T2T\-CHM13v2.0.



.. conda:package:: yallhap

   |downloads_yallhap| |docker_yallhap|

   :versions:
      
      

      ``1.0.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends on click: ``>=8.0.0``
   :depends on numpy: ``>=1.24.0``
   :depends on pandas: ``>=2.0.0``
   :depends on pyliftover: ``>=0.4``
   :depends on pysam: ``>=0.22.0``
   :depends on python: ``>=3.10``
   :depends on requests: ``>=2.28.0``

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

    pixi global install yallhap

to add into an existing workspace instead, run::

    pixi add yallhap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yallhap

Alternatively, to install into a new environment, run::

    conda create -n envname yallhap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yallhap:<tag>

(see `yallhap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yallhap| image:: https://img.shields.io/conda/dn/bioconda/yallhap.svg?style=flat
   :target: https://anaconda.org/bioconda/yallhap
   :alt:   (downloads)
.. |docker_yallhap| image:: https://quay.io/repository/biocontainers/yallhap/status
   :target: https://quay.io/repository/biocontainers/yallhap
.. _`yallhap/tags`: https://quay.io/repository/biocontainers/yallhap?tab=tags


.. raw:: html

    <script>
        var package = "yallhap";
        var versions = ["1.0.1","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yallhap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yallhap/README.html