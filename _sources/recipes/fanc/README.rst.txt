:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fanc'
.. highlight: bash

fanc
====

.. conda:recipe:: fanc
   :replaces_section_title:
   :noindex:

   Framework for the ANalysis of C\-data.

   :homepage: https://github.com/vaquerizaslab/fanc
   :documentation: https://vaquerizaslab.github.io/fanc
   
   :license: ACADEMIC PUBLIC LICENSE (FAN-C)
   :recipe: /`fanc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fanc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fanc/meta.yaml>`_

   


.. conda:package:: fanc

   |downloads_fanc| |docker_fanc|

   :versions:
      
      

      ``0.9.23b-2``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends on biopython: 
   :depends on cooler: ``>=0.8.0``
   :depends on future: 
   :depends on genomic_regions: ``>=0.0.7``
   :depends on gridmap: ``>=0.14.0``
   :depends on h5py: 
   :depends on intervaltree: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on matplotlib-base: 
   :depends on msgpack-numpy: ``>=0.4.4.3``
   :depends on msgpack-python: 
   :depends on numpy: ``>=1.16.0``
   :depends on pandas: ``>=0.15.0``
   :depends on pillow: 
   :depends on progressbar2: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pysam: ``>=0.9.1``
   :depends on pytables: ``>=3.5.1``
   :depends on python: ``>=3.7,<3.8.0a0``
   :depends on python_abi: ``3.7.* *_cp37m``
   :depends on pyyaml: ``>=5.1``
   :depends on scikit-image: ``>=0.15.0``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 

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

    pixi global install fanc

to add into an existing workspace instead, run::

    pixi add fanc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fanc

Alternatively, to install into a new environment, run::

    conda create -n envname fanc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fanc:<tag>

(see `fanc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fanc| image:: https://img.shields.io/conda/dn/bioconda/fanc.svg?style=flat
   :target: https://anaconda.org/bioconda/fanc
   :alt:   (downloads)
.. |docker_fanc| image:: https://quay.io/repository/biocontainers/fanc/status
   :target: https://quay.io/repository/biocontainers/fanc
.. _`fanc/tags`: https://quay.io/repository/biocontainers/fanc?tab=tags


.. raw:: html

    <script>
        var package = "fanc";
        var versions = ["0.9.23b","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fanc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fanc/README.html