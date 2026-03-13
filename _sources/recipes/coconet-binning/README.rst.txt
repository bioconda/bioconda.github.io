:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coconet-binning'
.. highlight: bash

coconet-binning
===============

.. conda:recipe:: coconet-binning
   :replaces_section_title:
   :noindex:

   A contig binning tool from viral metagenomes

   :homepage: https://github.com/Puumanamana/CoCoNet
   :documentation: https://coconet.readthedocs.io/en/latest/
   
   :license: APACHE / Apache 2.0
   :recipe: /`coconet-binning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coconet-binning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coconet-binning/meta.yaml>`_

   


.. conda:package:: coconet-binning

   |downloads_coconet-binning| |docker_coconet-binning|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``,  ``0.54-0``,  ``0.52-0``

      

   
   :depends on biopython: 
   :depends on h5py: 
   :depends on hnswlib: 
   :depends on numpy: 
   :depends on pandas: ``>=1.0``
   :depends on psutil: 
   :depends on pybind11: 
   :depends on pysam: ``>=0.16``
   :depends on python: ``3.7.*``
   :depends on python-igraph: ``>=0.8``
   :depends on pytorch: ``>=1.0``
   :depends on pyyaml: 
   :depends on scikit-bio: ``>=0.5.6``
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

    pixi global install coconet-binning

to add into an existing workspace instead, run::

    pixi add coconet-binning

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coconet-binning

Alternatively, to install into a new environment, run::

    conda create -n envname coconet-binning

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coconet-binning:<tag>

(see `coconet-binning/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coconet-binning| image:: https://img.shields.io/conda/dn/bioconda/coconet-binning.svg?style=flat
   :target: https://anaconda.org/bioconda/coconet-binning
   :alt:   (downloads)
.. |docker_coconet-binning| image:: https://quay.io/repository/biocontainers/coconet-binning/status
   :target: https://quay.io/repository/biocontainers/coconet-binning
.. _`coconet-binning/tags`: https://quay.io/repository/biocontainers/coconet-binning?tab=tags


.. raw:: html

    <script>
        var package = "coconet-binning";
        var versions = ["1.1.0","1.0.0","0.54","0.52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coconet-binning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coconet-binning/README.html