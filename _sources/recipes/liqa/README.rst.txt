:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liqa'
.. highlight: bash

liqa
====

.. conda:recipe:: liqa
   :replaces_section_title:
   :noindex:

   A statistical tool to quantify isoform\-specific expression using long\-read RNA\-seq.

   :homepage: https://github.com/WGLab/LIQA
   :documentation: https://github.com/WGLab/LIQA/blob/master/doc/Usage.md
   
   :license: MIT / MIT
   :recipe: /`liqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liqa/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02399-8`

   


.. conda:package:: liqa

   |downloads_liqa| |docker_liqa|

   :versions:
      
      

      ``1.3.4-0``

      

   
   :depends on lifelines: 
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on r-base: 
   :depends on r-betareg: 
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

    pixi global install liqa

to add into an existing workspace instead, run::

    pixi add liqa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install liqa

Alternatively, to install into a new environment, run::

    conda create -n envname liqa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/liqa:<tag>

(see `liqa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_liqa| image:: https://img.shields.io/conda/dn/bioconda/liqa.svg?style=flat
   :target: https://anaconda.org/bioconda/liqa
   :alt:   (downloads)
.. |docker_liqa| image:: https://quay.io/repository/biocontainers/liqa/status
   :target: https://quay.io/repository/biocontainers/liqa
.. _`liqa/tags`: https://quay.io/repository/biocontainers/liqa?tab=tags


.. raw:: html

    <script>
        var package = "liqa";
        var versions = ["1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liqa/README.html