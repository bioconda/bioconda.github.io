:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cutefc'
.. highlight: bash

cutefc
======

.. conda:recipe:: cutefc
   :replaces_section_title:
   :noindex:

   Regenotyping structural variants through an accurate and efficient force\-calling method

   :homepage: https://github.com/Meltpinkg/cuteFC
   :license: MIT
   :recipe: /`cutefc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutefc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutefc/meta.yaml>`_

   


.. conda:package:: cutefc

   |downloads_cutefc| |docker_cutefc|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on cigar: 
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on pyvcf3: 
   :depends on scikit-learn: 
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

    pixi global install cutefc

to add into an existing workspace instead, run::

    pixi add cutefc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cutefc

Alternatively, to install into a new environment, run::

    conda create -n envname cutefc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cutefc:<tag>

(see `cutefc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cutefc| image:: https://img.shields.io/conda/dn/bioconda/cutefc.svg?style=flat
   :target: https://anaconda.org/bioconda/cutefc
   :alt:   (downloads)
.. |docker_cutefc| image:: https://quay.io/repository/biocontainers/cutefc/status
   :target: https://quay.io/repository/biocontainers/cutefc
.. _`cutefc/tags`: https://quay.io/repository/biocontainers/cutefc?tab=tags


.. raw:: html

    <script>
        var package = "cutefc";
        var versions = ["1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutefc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutefc/README.html